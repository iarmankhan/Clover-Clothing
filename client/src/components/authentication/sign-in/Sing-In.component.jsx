import React, {useState} from 'react';
import {connect} from 'react-redux'
import FormInput from '../../form-input/FormInput.component';
import CustomButton from '../../custom-button/CustomButton.component';
import {googleSignInStart, emailSignInStart} from "../../../redux/user/user.actions";

import {AuthenticationFormContainer} from "../SignInUp.styles";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password)
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    };

    return (
        <AuthenticationFormContainer>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className='button-container'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isSecondary>Sign in with
                        Google</CustomButton>
                </div>
            </form>
        </AuthenticationFormContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
