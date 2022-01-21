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

	/**
	 * Set the custom background color to the label
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	allCaps         = false,
	backgroundColor = 'transparent',
	color           = 'primary',
	fontColor       = '',
	label           = 'no label',
	size            = 'normal',
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

export default MyLabel;
