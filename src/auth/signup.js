import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const firebaseSignup = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user.uid;
        // console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}