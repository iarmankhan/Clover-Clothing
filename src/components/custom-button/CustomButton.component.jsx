import React from 'react';

import {CustomButtonContainer} from "./CustomButton.styles";

const CustomButton = ({ children, isSecondary, ...otherProps }) => {
    return (
        <CustomButtonContainer isSecondary={isSecondary} {...otherProps}>
            {children}
        </CustomButtonContainer>
    );
};
 
export default CustomButton;