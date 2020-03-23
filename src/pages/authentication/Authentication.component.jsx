import React from 'react';

import './Authentication.styles.scss'
import SignIn from '../../components/sign-in/Sing-In.component';
import SignUp from '../../components/sign-up/Sign-Up.component';

const Authentication = () => {
    return (
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Authentication;
