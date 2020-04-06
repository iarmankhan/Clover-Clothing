import React from 'react';

import SignIn from '../../components/authentication/sign-in/Sing-In.component';
import SignUp from '../../components/authentication/sign-up/Sign-Up.component';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectUserErrors} from "../../redux/user/user.selectors";
import { toast } from 'react-toastify';
import {AuthenticationContainer} from "./Authentication.styles";

const Authentication = ({error}) => {
    if(error){
        toast.error(error.message);
    }
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
        </AuthenticationContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectUserErrors
});

export default connect(mapStateToProps)(Authentication);
