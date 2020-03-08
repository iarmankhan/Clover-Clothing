import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9Cue4FbhtxAyqcbBoWtG9h4BarqYgwVw",
    authDomain: "clover-clothing-db.firebaseapp.com",
    databaseURL: "https://clover-clothing-db.firebaseio.com",
    projectId: "clover-clothing-db",
    storageBucket: "clover-clothing-db.appspot.com",
    messagingSenderId: "70399917816",
    appId: "1:70399917816:web:10885756409f8c56f7850d",
    measurementId: "G-9ETYC74R5P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account', 
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;