import React from 'react';

import './Authentication.styles.scss'
import SignIn from '../../components/sign-in/Sing-In.component';
import SignUp from '../../components/sign-up/Sign-Up.component';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectUserErrors} from "../../redux/user/user.selectors";
import { toast } from 'react-toastify';

const Authentication = ({error}) => {
    if(error){
        toast.error(error.message);
    }
    return (
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectUserErrors
});

export default connect(mapStateToProps)(Authentication);
