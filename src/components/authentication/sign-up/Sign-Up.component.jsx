import React, {useState} from 'react';
import {connect} from 'react-redux'

import FormInput from '../../form-input/FormInput.component';
import CustomButton from '../../custom-button/CustomButton.component';

import {signUpStart} from "../../../redux/user/user.actions";
import {AuthenticationFormContainer} from "../SignInUp.styles";

const SignUp = ({signUpStart}) => {
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userInfo;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return
        }

        signUpStart({email, password, displayName});
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    };

    return (
        <AuthenticationFormContainer>
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label='Name'
                    name='displayName'
                    required
                    type='text'
                    value={displayName}
                />
                <FormInput
                    handleChange={handleChange}
                    label='Email'
                    name='email'
                    required
                    type='email'
                    value={email}
                />
                <FormInput
                    type="password"
                    required
                    name="password"
                    label='Password'
                    handleChange={handleChange}
                    value={password}
                />
                <FormInput
                    type="password"
                    required
                    name="confirmPassword"
                    label='Password'
                    handleChange={handleChange}
                    value={confirmPassword}
                />
                <div className='button-container'>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </AuthenticationFormContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp)
