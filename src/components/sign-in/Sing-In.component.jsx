import React, { Component } from 'react';
import {connect} from 'react-redux'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './Sign-In.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password)
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    };

    render() {
        const {googleSignInStart} = this.props;
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
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
                        handleChange={this.handleChange}
                        value={password}
                    />
                    <div className='button-container'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isSecondary>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
