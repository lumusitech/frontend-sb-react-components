/// <reference types="react" />
import './myLabel.css';
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
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
