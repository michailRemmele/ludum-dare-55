import { Component } from 'remiz';

interface ExampleComponentConfig {
  field: string
}

export class ExampleComponent extends Component {
  field: string;

  constructor(config: ExampleComponentConfig) {
    super();

    const { field } = config;

    this.field = field;
  }

  clone(): ExampleComponent {
    return new ExampleComponent({ field: this.field });
  }
}

ExampleComponent.componentName = 'ExampleComponent';
