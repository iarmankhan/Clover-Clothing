import React, { Component } from 'react';
import {connect} from 'react-redux'

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

    import './Sign-Up.styles.scss'
import {signUpStart} from "../../redux/user/user.actions";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return
        }

        signUpStart({email, password, displayName});
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Name'
                        name='displayName'
                        required
                        type='text'
                        value={displayName}
                    />
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
                    <FormInput
                        type="password"
                        required
                        name="confirmPassword"
                        label='Password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                    />
                    <div className='button-container'>
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp)
