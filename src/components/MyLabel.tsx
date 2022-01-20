import './myLabel.css';
import { ComponentMeta } from '@storybook/react';

export interface MyLabelProps {
	/**
	 * This is the Label name
	 */
	label: string;
	/**
	 * This is the Label size
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * This set label to uppercase
	 */
	allCaps?: boolean;
	/**
	 * this is the label color
	 */
	color?: 'primary' | 'secondary' | 'tertiary';

	/**
	 * Set the custom color to the label
	 */
	fontColor?: string;
}

export const MyLabel = ({
	allCaps = false,
	color   = 'primary',
	label   = 'no label',
	size = 'normal',
	fontColor = ''
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ color: fontColor}}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
