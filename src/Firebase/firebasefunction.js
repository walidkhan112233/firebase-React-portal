import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {doc, setDoc,  getFirestore} from "firebase/firestore";
import app from "./firebaseconfig";

const auth = getAuth(app);
const db = getFirestore(app);

export const signUpUser = (obj) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
};

export const loginUser = (obj) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
};

export const dataGet = (nodeName) => {
    const docRef = doc(nodeName)
};

export const dataset = async (nodeName, obj , id ) => {
    const docRef = doc(db, nodeName , id)
    return await setDoc(docRef,obj);
};

export const dataEdit = (nodeName, id , obj) => {};
export const dataDelete = (nodeName, id) => {};