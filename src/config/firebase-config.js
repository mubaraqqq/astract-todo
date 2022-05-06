import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDsHzbN6TXPV-YxWCca-cdS603kyW0jMJk",
  authDomain: "astract-todo-f9be3.firebaseapp.com",
  projectId: "astract-todo-f9be3",
  storageBucket: "astract-todo-f9be3.appspot.com",
  messagingSenderId: "51202824380",
  appId: "1:51202824380:web:ad10ca2674866aead798b9",
  measurementId: "G-P4QQKJL9N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);