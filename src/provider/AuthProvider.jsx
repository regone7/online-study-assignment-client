import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsers = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }
    const updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentuser => {
            const userEmail = currentuser?.email || user?.email
            const loggedUser = {email:userEmail}
            setUser(currentuser);
            console.log('observarbing ', currentuser)
            setLoading(false);

            if(currentuser){
                
                axios.post('http://localhost:9000/jwt',loggedUser,{ withCredentials:true })
                .then(res =>{
                    console.log('token responce', res.data)
                })
            }
            else{
                axios.post('http://localhost:9000/logout',loggedUser,{ withCredentials:true })
                .then(res =>{
                    console.log(res.data)
                })
            }

        })
        return () => {
            unSubscriber()
        }
    }, [])
    const authinfo = {
        user,
        loading,
        creatUser,
        signInUsers,
        googleLogin,
        signOutUser,
        updateUserProfile,
        setLoading
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;