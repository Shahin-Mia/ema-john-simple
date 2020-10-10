import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } }


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const user = { displayName, email };
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Please Login for Checkout</h2>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;