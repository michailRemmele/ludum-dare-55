import { ActorCollection, System } from 'remiz';
import type { SystemOptions } from 'remiz';

import { ExampleComponent } from '../../components';

export class ExampleSystem extends System {
  private actorCollection: ActorCollection;

  constructor(options: SystemOptions) {
    super();

    this.actorCollection = new ActorCollection(options.scene, {
      components: [ExampleComponent],
    });
  }

  mount(): void {
    this.actorCollection.forEach((actor) => {
      const { field } = actor.getComponent(ExampleComponent);
      console.log(`actor with example comonent: ${actor.id}, field value: ${field}`);
    });
  }

  update(): void {}
}

ExampleSystem.systemName = 'ExampleSystem';
