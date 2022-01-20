import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { argTypesEnhancers } from '@storybook/store/dist/ts3.9/inferControls';

export default {
	title    : 'UI/MyLabel',
	component: MyLabel,
	argTypes : {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: {control: 'color'}
	},
} as ComponentMeta<typeof MyLabel>;

// to set options visibility in select, use: 
// color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: 'normal',
	allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  fontColor: '#5517ac',
  size: 'h1'
}
