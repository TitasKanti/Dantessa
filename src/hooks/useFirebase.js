
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

//Initializing the auth
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInByGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })


    }

    const signInByEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
    }

    //firebase state observer hook
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            return () => unsubscribed;
        })
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        signInByGoogle,
        signInByEmailPassword,
        logOut,

    }
};

export default useFirebase;