import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'h1',
    label:'This is AllCaps Label',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'h2',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}




