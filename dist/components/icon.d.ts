/// <reference types="react" />
import { SemanticDatepickerProps } from '../types';
declare type CustomIconProps = {
    clearIcon: SemanticDatepickerProps['clearIcon'];
    icon: SemanticDatepickerProps['icon'];
    isClearIconVisible: boolean;
    onClear: () => void;
};
declare const CustomIcon: ({ clearIcon, icon, isClearIconVisible, onClear, }: CustomIconProps) => JSX.Element;
export default CustomIcon;
