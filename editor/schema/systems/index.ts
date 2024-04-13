import type { WidgetSchema } from 'remiz-editor';

import { ExampleSystem, MovementSystem } from '../../../src/game/systems';

import { exampleSystem } from './example-system';
import { movementSystem } from './movement-system';

export const systemsSchema: Record<string, WidgetSchema> = {
  [ExampleSystem.systemName]: exampleSystem,
  [MovementSystem.systemName]: movementSystem,
};
