import type { ActorEvent } from 'remiz';

export const MoveLeft = 'MoveLeft';
export const MoveRight = 'MoveRight';
export const MoveJump = 'MoveJump';
export const ResurrectInput = 'ResurrectInput';
export const Kill = 'Kill';

declare module 'remiz' {
  export interface ActorEventMap {
    [MoveLeft]: ActorEvent
    [MoveRight]: ActorEvent
    [MoveJump]: ActorEvent
    [ResurrectInput]: ActorEvent
    [Kill]: ActorEvent
  }
}
