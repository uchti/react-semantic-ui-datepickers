import React from 'react';
import { Input, FormInputProps } from 'semantic-ui-react';
import { SemanticDatepickerProps } from '../types';
declare type InputProps = FormInputProps & {
    clearIcon: SemanticDatepickerProps['clearIcon'];
    icon: SemanticDatepickerProps['icon'];
    isClearIconVisible: boolean;
};
declare const CustomInput: React.ForwardRefExoticComponent<Pick<InputProps, React.ReactText> & React.RefAttributes<Input>>;
export default CustomInput;
