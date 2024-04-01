import type { Actor, ScriptOptions } from 'remiz';
import { Script, Vector2 } from 'remiz';
import { AddImpulse } from 'remiz/events';

import { ExampleControl } from '../../events';

interface ExampleScriptOptions extends ScriptOptions {
  impulse: number
}

export class ExampleScript extends Script {
  private actor: Actor;
  private impulse: number;

  constructor(options: ExampleScriptOptions) {
    super();

    this.actor = options.actor;
    this.impulse = options.impulse;

    this.actor.addEventListener(ExampleControl, this.handleExampleEvent);
  }

  destroy(): void {
    this.actor.removeEventListener(ExampleControl, this.handleExampleEvent);
  }

  private handleExampleEvent = (): void => {
    this.actor.dispatchEvent(AddImpulse, {
      value: new Vector2(0, -this.impulse),
    });
  };
}

ExampleScript.scriptName = 'ExampleScript';
