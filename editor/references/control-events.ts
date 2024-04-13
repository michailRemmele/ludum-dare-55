import type { Reference } from 'remiz-editor';

import {
  MoveLeft,
  MoveRight,
  MoveJump,
  ResurrectInput,
} from '../../src/game/events';

export const controlEventsReference: Reference = {
  items: [
    MoveLeft,
    MoveRight,
    MoveJump,
    ResurrectInput,
  ].map((value) => ({ title: value, value })),
};
