import { ScriptSystem } from 'remiz';

import { ExampleScript } from '../../../src/game/scripts';

import { exampleScript } from './script-system';

export const resourcesSchema = {
  [ScriptSystem.systemName]: {
    [ExampleScript.scriptName]: exampleScript,
  },
};
