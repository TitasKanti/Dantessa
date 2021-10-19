
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

//Initializing the auth
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInByGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })


    }

    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error:', errorCode, errorMessage);
            });
    }
    const signInByEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error:', errorCode, errorMessage);
            });
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
        createNewUser,
        logOut
    }
};

export default useFirebase;