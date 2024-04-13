import type {
  ActorSpawner,
  ScriptOptions,
  Scene,
} from 'remiz';
import { Actor, Script, Transform } from 'remiz';
import { CollisionEnter, CollisionLeave } from 'remiz/events';
import type { CollisionEnterEvent, CollisionLeaveEvent } from 'remiz/events';

import * as EventType from '../../events';
import { LIGHT_FIGHTER_GHOST_ID } from '../../../consts/templates';
import { Resurrectable } from '../../components';

export class PlayerScript extends Script {
  private scene: Scene;
  private actor: Actor;
  private actorSpawner: ActorSpawner;
  private canResurrect: Array<Actor>;

  constructor(options: ScriptOptions) {
    super();

    this.scene = options.scene;
    this.actor = options.actor;
    this.actorSpawner = options.actorSpawner;
    this.canResurrect = [];

    this.actor.addEventListener(CollisionEnter, this.handleCanResurrect);
    this.actor.addEventListener(CollisionLeave, this.handleCannotResurrect);
    this.actor.addEventListener(EventType.ResurrectInput, this.handleResurrect);
  }

  destroy(): void {
    this.actor.removeEventListener(CollisionEnter, this.handleCanResurrect);
    this.actor.removeEventListener(CollisionLeave, this.handleCannotResurrect);
    this.actor.removeEventListener(EventType.ResurrectInput, this.handleResurrect);
  }

  private handleCanResurrect = (event: CollisionEnterEvent): void => {
    const { actor } = event;

    if (actor.getComponent(Resurrectable)) {
      this.canResurrect.push(actor);
    }
  };

  private handleCannotResurrect = (event: CollisionLeaveEvent): void => {
    const { actor } = event;

    if (actor.getComponent(Resurrectable)) {
      this.canResurrect = this.canResurrect.filter((item) => item !== actor);
    }
  };

  private handleResurrect = (): void => {
    if (!this.canResurrect.length) {
      return;
    }

    const corpse = this.canResurrect[0].parent;
    if (!(corpse instanceof Actor)) {
      return;
    }

    const ghost = this.actorSpawner.spawn(LIGHT_FIGHTER_GHOST_ID);

    const corpseTransform = corpse.getComponent(Transform);
    const ghostTransform = ghost.getComponent(Transform);

    ghostTransform.offsetX = corpseTransform.offsetX;
    ghostTransform.offsetY = corpseTransform.offsetY;

    corpse.remove();

    this.scene.appendChild(ghost);
  };
}

PlayerScript.scriptName = 'PlayerScript';
