import type { Meta, StoryObj } from '@storybook/react';

import { SimpleListWithTitle } from 'components-bullseye';

const meta: Meta<typeof SimpleListWithTitle> = {
    component: SimpleListWithTitle,
    tags: ['autodocs'],
    title: 'SimpleListWithTitle',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const documents = [
    { id: 1, title: "Industry Report", url: "#" },
    { id: 2, title: "Home Improvent Guide", url: "#" },
    { id: 3, title: "Quarantine DYI Guide", url: "#" },
];

const documentIcon = (
    <svg role="img" className="mr-2" width="16" height="16">
      <use xlinkHref="/images/b-icons/bootstrap-icons.svg#file-earmark-text-fill" />
    </svg>
);

const simpleListWithTitleArgs = {
    title:"List Title",
    items : documents,
    icon : documentIcon,
};

export const PhotoListWithTitleMaxItemsArgs: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <SimpleListWithTitle {...simpleListWithTitleArgs} />
    </div>
}