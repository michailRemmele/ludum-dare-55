import type { Reference } from 'remiz-editor';

import { MoveLeft, MoveRight, MoveJump } from '../../src/game/events';

export const controlEventsReference: Reference = {
  items: [
    MoveLeft, MoveRight, MoveJump,
  ].map((value) => ({ title: value, value })),
};
