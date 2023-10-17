import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    showInCard: {
      description: 'Wraps the component inside a bootstrap Card style.',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Show In Card',
        icon: 'box',
        // Array of plain string values or MenuItem shape (see below)
        items: ['Yes', 'No'],
      },
    },
  },
};

export default preview;
