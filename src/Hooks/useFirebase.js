import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut,createUserWithEmailAndPassword ,updateProfile ,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialization';
import { useDispatch, useSelector } from 'react-redux';
import { userLoading } from './../redux/actions/actions';


initializeAuthentication();
const useFirebase = () => {
    const use =useSelector(state=>state.user);
    const dispatch =useDispatch();
    console.log(use)
    // dispatch(userLoading())

    const [user, setUser] = useState({});
    const auth = getAuth();
    // const [dName,setDName]=useState('')
    const [isloading,setIsloading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const joinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
                // setDName(user.displayName);
            }else{
                setUser({})
            }
            setIsloading(false);
        });
    }, [auth])
    
    return {
        auth,
        user,
        setUser,
        updateProfile,
        joinWithGoogle,
        logOut,
        isloading,
        setIsloading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword 
    }
};

export default useFirebase;