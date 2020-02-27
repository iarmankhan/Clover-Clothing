import React from 'react';

import './CustomButton.styles.scss'

const CustomButton = ({ children, isSecondary, ...otherProps }) => {
    return (
        <button className={`${isSecondary ? 'secondary' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}
 
export default CustomButton;