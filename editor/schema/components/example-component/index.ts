import type { WidgetSchema } from 'remiz-editor';

export const exampleComponent: WidgetSchema = {
  title: 'components.exampleComponent.title',
  fields: [
    {
      name: 'field',
      title: 'components.exampleComponent.field.title',
      type: 'string',
    },
  ],
  getInitialState: () => ({
    field: 'test',
  }),
};
