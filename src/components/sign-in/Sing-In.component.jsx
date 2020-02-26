import React, { Component } from 'react';

import './Sign-In.styles.scss'
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
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
                        value={this.state.email}
                    />
                    <FormInput 
                        type="password" 
                        required 
                        name="password" 
                        label='Password'
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                    />
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;