import type { Reference } from 'remiz-editor';

import { ExampleControl } from '../../src/game/events';

export const controlEventsReference: Reference = {
  items: [
    ExampleControl,
  ].map((value) => ({ title: value, value })),
};
