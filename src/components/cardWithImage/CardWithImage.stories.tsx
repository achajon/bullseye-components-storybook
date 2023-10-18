import type { Meta, StoryObj } from '@storybook/react';

import { CardWithImage } from 'components-bullseye';

const meta: Meta<typeof CardWithImage> = {
    component: CardWithImage,
    tags: ['autodocs'],
    title: 'Card with image',
    args: {
      body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      title: "About Location Name",
      image: "http://picsum.photos/400/300",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const CardWithImageArgs = {
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "About Location Name",
    image: "http://picsum.photos/400/300",
  };
export const cardWithImage: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CardWithImage {...CardWithImageArgs} />
    </div>
}