import type { WidgetSchema } from 'remiz-editor';

import { ExampleComponent } from '../../../src/game/components';

import { exampleComponent } from './example-component';

export const componentsSchema: Record<string, WidgetSchema> = {
  [ExampleComponent.componentName]: exampleComponent,
};
