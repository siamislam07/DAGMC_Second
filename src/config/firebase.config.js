
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDlHwoBz1056ezGCBoutt_1-aBnKEHUUmo",
    authDomain: "dagmcclub.firebaseapp.com",
    projectId: "dagmcclub",
    storageBucket: "dagmcclub.appspot.com",
    messagingSenderId: "930122041958",
    appId: "1:930122041958:web:5f88fcb66fbdabbf9cfba7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)