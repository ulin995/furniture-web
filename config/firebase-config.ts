// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics, isSupported} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNQt0DAB87nHcXneUkCNimsHzr0x82WjI",
    authDomain: "gmeetalk-2024.firebaseapp.com",
    projectId: "gmeetalk-2024",
    storageBucket: "gmeetalk-2024.appspot.com",
    messagingSenderId: "185169246079",
    appId: "1:185169246079:web:4e34c8649dde772c4dcc4a",
    measurementId: "G-ZKBYR0X8VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
    getAnalytics(app);
}

export const initAnalytics = async () => {
    if (typeof window !== 'undefined' && await isSupported()) {
        return getAnalytics(app);
    } else {
        return null;
    }
}


