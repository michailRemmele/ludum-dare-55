import type {
  ActorSpawner,
  ScriptOptions,
  Scene,
  UpdateOptions,
} from 'remiz';
import { Actor, Script, Transform } from 'remiz';
import { CollisionEnter, CollisionLeave } from 'remiz/events';
import type { CollisionEnterEvent, CollisionLeaveEvent } from 'remiz/events';

import * as EventType from '../../events';
import {
  ARCHER_ID,
  LIGHT_FIGHTER_ID,
  ARCHER_GHOST_ID,
  LIGHT_FIGHTER_GHOST_ID,
} from '../../../consts/templates';
import { Resurrectable, Spellbook } from '../../components';

const SUMMON_COOLDOWN = 2000;

const RESURRECT_MAP: Record<string, string> = {
  [LIGHT_FIGHTER_ID]: LIGHT_FIGHTER_GHOST_ID,
  [ARCHER_ID]: ARCHER_GHOST_ID,
};

export class PlayerScript extends Script {
  private scene: Scene;
  private actor: Actor;
  private actorSpawner: ActorSpawner;
  private canResurrect: Array<Actor>;
  private activeGhost: Actor | undefined;
  private summonCooldown: number;

  constructor(options: ScriptOptions) {
    super();

    this.scene = options.scene;
    this.actor = options.actor;
    this.actorSpawner = options.actorSpawner;
    this.canResurrect = [];
    this.summonCooldown = 0;

    this.actor.addEventListener(CollisionEnter, this.handleCanResurrect);
    this.actor.addEventListener(CollisionLeave, this.handleCannotResurrect);
    this.actor.addEventListener(EventType.ResurrectInput, this.handleResurrect);
    this.actor.addEventListener(EventType.SummonInput, this.handleSummon);
  }

  destroy(): void {
    this.actor.removeEventListener(CollisionEnter, this.handleCanResurrect);
    this.actor.removeEventListener(CollisionLeave, this.handleCannotResurrect);
    this.actor.removeEventListener(EventType.SummonInput, this.handleSummon);
  }

  private handleSummon = (): void => {
    if (!this.activeGhost || this.summonCooldown > 0) {
      return;
    }

    const ghostTransform = this.activeGhost.getComponent(Transform);
    const playerTransform = this.actor.getComponent(Transform);

    ghostTransform.offsetX = playerTransform.offsetX;
    ghostTransform.offsetY = playerTransform.offsetY;

    this.summonCooldown = SUMMON_COOLDOWN;
  };

  private handleCanResurrect = (event: CollisionEnterEvent): void => {
    const { actor } = event;

    if (actor.getComponent(Resurrectable)) {
      this.canResurrect.push(actor);

      const spellbook = this.actor.getComponent(Spellbook);
      spellbook.canResurrect = true;
    }
  };

  private handleCannotResurrect = (event: CollisionLeaveEvent): void => {
    const { actor } = event;

    if (actor.getComponent(Resurrectable)) {
      this.canResurrect = this.canResurrect.filter((item) => item !== actor);
    }

    if (this.canResurrect.length === 0) {
      const spellbook = this.actor.getComponent(Spellbook);
      spellbook.canResurrect = false;
    }
  };

  private handleResurrect = (): void => {
    if (!this.canResurrect.length) {
      return;
    }

    if (this.activeGhost) {
      this.activeGhost.dispatchEvent(EventType.Kill);
    }

    const corpse = this.canResurrect[0].parent;
    if (!(corpse instanceof Actor) || !corpse.templateId) {
      return;
    }

    const ghostTemplateId = RESURRECT_MAP[corpse.templateId];
    const ghost = this.actorSpawner.spawn(ghostTemplateId);
    this.activeGhost = ghost;

    const corpseTransform = corpse.getComponent(Transform);
    const ghostTransform = ghost.getComponent(Transform);

    ghostTransform.offsetX = corpseTransform.offsetX;
    ghostTransform.offsetY = corpseTransform.offsetY;

    corpse.remove();

    this.scene.appendChild(ghost);

    this.actor.dispatchEvent(EventType.Resurrect);
  };

  update(options: UpdateOptions): void {
    if (this.summonCooldown >= 0) {
      this.summonCooldown -= options.deltaTime;
    }
  }
}

PlayerScript.scriptName = 'PlayerScript';
