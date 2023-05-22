import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOf-7ZJg-aU6lv6xzWi5vAAFcpYwLAILY",
    authDomain: "photo-gallery-d68f0.firebaseapp.com",
    projectId: "photo-gallery-d68f0",
    storageBucket: "photo-gallery-d68f0.appspot.com",
    messagingSenderId: "80229723838",
    appId: "1:80229723838:web:a631f9448f851247e4f8ef"
};

const app = initializeApp(firebaseConfig);

const Db = getFirestore(app);
const Storage = getStorage(app);

export { Db , Storage };