import type { WidgetSchema } from 'remiz-editor';

import { ExampleComponent, Movement } from '../../../src/game/components';

import { exampleComponent } from './example-component';
import { movement } from './movement';

export const componentsSchema: Record<string, WidgetSchema> = {
  [ExampleComponent.componentName]: exampleComponent,
  [Movement.componentName]: movement,
};
