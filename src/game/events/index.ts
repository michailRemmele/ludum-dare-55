import type { ActorEvent } from 'remiz';

export const ExampleControl = 'ExampleControl';
export const MoveLeft = 'MoveLeft';
export const MoveRight = 'MoveRight';
export const MoveJump = 'MoveJump';

declare module 'remiz' {
  export interface ActorEventMap {
    [ExampleControl]: ActorEvent
    [MoveLeft]: ActorEvent
    [MoveRight]: ActorEvent
    [MoveJump]: ActorEvent
  }
}
