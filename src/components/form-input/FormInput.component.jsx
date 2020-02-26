import React from 'react';

import './FormInput.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="form-group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-lable`}>
                   {label}
                </label>)
                :   null
            }
        </div>
    );
}

export default FormInput;