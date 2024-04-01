import type { WidgetPartSchema } from 'remiz-editor';

export const exampleScript: WidgetPartSchema = {
  fields: [
    {
      name: 'impulse',
      title: 'resources.scriptSystem.exampleScript.impulse.title',
      type: 'number',
    },
  ],
  getInitialState: () => ({
    impulse: 10,
  }),
};
