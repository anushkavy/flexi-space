import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore/lite";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
console.log("apikey", apiKey);
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "flexispace-e9f90.firebaseapp.com",
  projectId: "flexispace-e9f90",
  storageBucket: "flexispace-e9f90.appspot.com",
  messagingSenderId: "33311448493",
  appId: "1:33311448493:web:6c17944af6bf751f611524",
  measurementId: "G-HWX5Q4KKSP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const spacesCollectionRef = collection(db, "spaces");

// const analytics = getAnalytics(app);
