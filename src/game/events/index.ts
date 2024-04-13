import type { ActorEvent } from 'remiz';

export const MoveLeft = 'MoveLeft';
export const MoveRight = 'MoveRight';
export const MoveJump = 'MoveJump';
export const ResurrectInput = 'ResurrectInput';
export const Kill = 'Kill';
export const Attack = 'Attack';
export const Damage = 'Damage';

export type AttackEvent = ActorEvent<{
  x: number
  y: number
}>;

export type DamageEvent = ActorEvent<{
  value: number
}>;

declare module 'remiz' {
  export interface ActorEventMap {
    [MoveLeft]: ActorEvent
    [MoveRight]: ActorEvent
    [MoveJump]: ActorEvent
    [ResurrectInput]: ActorEvent
    [Kill]: ActorEvent
    [Attack]: AttackEvent
    [Damage]: DamageEvent
  }
}
