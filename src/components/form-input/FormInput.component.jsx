import React from 'react';

import {FormGroup, FormInputContainer} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <FormGroup>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            {
                label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                   {label}
                </label>)
                :   null
            }
        </FormGroup>
    );
};

export default FormInput;
