import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup  } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { collection, addDoc, getDoc, doc ,setDoc} from "firebase/firestore"; 
const provider = new GoogleAuthProvider();
//Register User using EMmail and Password
export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDocRef = doc(db, "users", user.email);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      await addDoc(collection(db, "users"), {
        id: user.uid,
        email: user.email,
        name: name || "",
        role: "user",
        createdAt: new Date(),
      });
    } else {
      console.log("User already exists in Firestore:", userSnapshot.data());
    }

    console.log("User registered successfully:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};


//login user using Email and Password
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}


//Google Login 
export const GoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
   const checkUser = doc(db, "users", result.user.uid);
const snapshot = await getDoc(checkUser);

if (!snapshot.exists()) {
  await setDoc(doc(db, "users", result.user.uid), {
    id: result.user.uid,
    email: result.user.email,
    name: result.user.displayName || "",
    role: "user",
    createdAt: new Date(),
  });
  console.log("New user added to Firestore");
} else {
  console.log("User already exists in Firestore:", snapshot.data());
}

    return snapshot;
  } catch (error) {
    console.error("Error logging in with Google:", error);
    throw error;
  }
};
