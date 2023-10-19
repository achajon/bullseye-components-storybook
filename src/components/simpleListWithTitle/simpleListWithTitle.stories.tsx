import type { Meta, StoryObj } from '@storybook/react';

import { SimpleListWithTitle } from 'components-bullseye';

const meta: Meta<typeof SimpleListWithTitle> = {
    component: SimpleListWithTitle,
    tags: ['autodocs'],
    title: 'SimpleListWithTitle',
    args: {
        title:"List Title",
        items : [
            { id: 1, title: "Industry Report"},
            { id: 2, title: "Home Improvent Guide"},
            { id: 3, title: "Quarantine DYI Guide"},
        ],
        icon : (
            <svg role="img" className="mr-2" width="16" height="16">
                <use xlinkHref="/node_modules/components-bullseye/dist/images/b-icons/bootstrap-icons.svg#file-earmark-text-fill"/>
            </svg>
        ),
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const simpleListWithTitleURLArgs = {
    title:"List Title",
    items : [
        { id: 1, title: "Industry Report", url: "#" },
        { id: 2, title: "Home Improvent Guide", url: "#" },
        { id: 3, title: "Quarantine DYI Guide", url: "#" },
    ],
    icon : (
        <svg role="img" className="mr-2" width="16" height="16">
            <use xlinkHref="/node_modules/components-bullseye/dist/images/b-icons/bootstrap-icons.svg#file-earmark-text-fill"/>
        </svg>
    ),
}

const simpleListWithTitleWithCustomIconArgs = {
    title:"List Title",
    items : [
        { id: 1, title: "Industry Report", url: "#" },
        { id: 2, title: "Home Improvent Guide", url: "#" },
        { id: 3, title: "Quarantine DYI Guide", url: "#" },
    ],
    icon : (
        <svg role="img" className="mr-2" width="16" height="16">
            <use xlinkHref="/node_modules/components-bullseye/dist/images/b-icons/bootstrap-icons.svg#heart-fill"/>
        </svg>
    ),
}

export const simpleListWithTitle: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <SimpleListWithTitle {...args} />
    </div>
}

export const simpleListWithTitleURL: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <SimpleListWithTitle {...simpleListWithTitleURLArgs} />
    </div>
}

export const simpleListWithTitleWithCustomIcon: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <SimpleListWithTitle {...simpleListWithTitleWithCustomIconArgs} />
    </div>
}