import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase"
const fnCreateUserWithEmailAndPassword = (userName, email, password,setIsLoading) => {
  debugger;
  setIsLoading(true);
  createUserWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: userName.current.value,
       
      })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
        //   dispatch(
        //     addUser({
        //       uid: uid,
        //       email: email,
        //       displayName: displayName,
        //       photoURL: photoURL,
        //     })
        //   );
        setIsLoading(false);
        })
        window.location.href="/feed"
        .catch((error) => {
          
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsLoading(false);
  
    });
};

export default fnCreateUserWithEmailAndPassword;
