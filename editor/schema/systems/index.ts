import type { WidgetSchema } from 'remiz-editor';

import { ExampleSystem } from '../../../src/game/systems';

import { exampleSystem } from './example-system';

export const systemsSchema: Record<string, WidgetSchema> = {
  [ExampleSystem.systemName]: exampleSystem,
};
