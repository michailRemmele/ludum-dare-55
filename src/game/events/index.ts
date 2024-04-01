import type { ActorEvent } from 'remiz';

export const ExampleControl = 'ExampleControl';

declare module 'remiz' {
  export interface ActorEventMap {
    [ExampleControl]: ActorEvent
  }
}
