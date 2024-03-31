import {
  Engine,

  Animator,
  CameraSystem,
  KeyboardInputSystem,
  KeyboardControlSystem,
  MouseInputSystem,
  PhysicsSystem,
  SpriteRenderer,
  ScriptSystem,
  UiBridge,

  Camera,
  KeyboardControl,
  ColliderContainer,
  RigidBody,
  Animatable,
  Sprite,
  Transform,
  MouseControl,
  ScriptBundle,
} from 'remiz';

import * as GameSystems from './game/systems';
import * as GameComponents from './game/components';

import config from '../data/data.json';

const engine = new Engine({
  config,
  systems: [
    Animator,
    CameraSystem,
    KeyboardInputSystem,
    KeyboardControlSystem,
    MouseInputSystem,
    PhysicsSystem,
    SpriteRenderer,
    UiBridge,
    ScriptSystem,
    ...Object.values(GameSystems),
  ],
  components: [
    Camera,
    KeyboardControl,
    ColliderContainer,
    RigidBody,
    Animatable,
    Sprite,
    Transform,
    MouseControl,
    ScriptBundle,
    ...Object.values(GameComponents),
  ],
  resources: {
    [UiBridge.systemName]: {
      // comment: to avoid eslint issues with extensions
      // eslint-disable-next-line import/extensions
      loadUiApp: () => import('./ui/index.tsx'),
    },
  },
});

void engine.play();
