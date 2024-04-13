import type { WidgetSchema } from 'remiz-editor';

import { HealthSystem, MovementSystem } from '../../../src/game/systems';

import { healthSystem } from './health-system';
import { movementSystem } from './movement-system';

export const systemsSchema: Record<string, WidgetSchema> = {
  [HealthSystem.systemName]: healthSystem,
  [MovementSystem.systemName]: movementSystem,
};
