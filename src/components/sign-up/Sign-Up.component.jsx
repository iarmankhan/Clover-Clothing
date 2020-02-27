import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './Sign-Up.styles.scss'

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
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }

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

export default SignUp