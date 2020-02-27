import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

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
        event.preventDefault()

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        }catch(error){
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
                        <CustomButton onClick={signInWithGoogle} isSecondary>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;