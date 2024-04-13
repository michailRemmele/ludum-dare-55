import type { WidgetSchema } from 'remiz-editor';

import { Health, Movement, Resurrectable } from '../../../src/game/components';

import { health } from './health';
import { movement } from './movement';
import { resurrectable } from './resurrectable';

export const componentsSchema: Record<string, WidgetSchema> = {
  [Health.componentName]: health,
  [Movement.componentName]: movement,
  [Resurrectable.componentName]: resurrectable,
};
