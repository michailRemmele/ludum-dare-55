import type { WidgetSchema } from 'remiz-editor';

import {
  AI,
  Health,
  Movement,
  Resurrectable,
  EnemyDetector,
  Weapon,
  HitBox,
  Ghost,
} from '../../../src/game/components';

import { ai } from './ai';
import { health } from './health';
import { movement } from './movement';
import { resurrectable } from './resurrectable';
import { enemyDetector } from './enemy-detector';
import { weapon } from './weapon';
import { hitBox } from './hit-box';
import { ghost } from './ghost';

export const componentsSchema: Record<string, WidgetSchema> = {
  [AI.componentName]: ai,
  [Health.componentName]: health,
  [Movement.componentName]: movement,
  [Resurrectable.componentName]: resurrectable,
  [EnemyDetector.componentName]: enemyDetector,
  [Weapon.componentName]: weapon,
  [HitBox.componentName]: hitBox,
  [Ghost.componentName]: ghost,
};
