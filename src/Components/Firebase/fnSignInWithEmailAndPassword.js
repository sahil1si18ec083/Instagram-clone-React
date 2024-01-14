import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../Firebase/firebase"
const fnSignInWithEmailAndPassword = (email,password,setIsLoading) => {
    debugger
  // sign in logic
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setIsLoading(false);
      window.location.href="/feed"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsLoading(false);
      toast.error("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export default fnSignInWithEmailAndPassword;
