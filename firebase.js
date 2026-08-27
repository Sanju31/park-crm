import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRt1cjbvGe2bkes4VWBPx2QCStUKGWyUs",
    authDomain: "park-crm-bb00a.firebaseapp.com",
    projectId: "park-crm-bb00a",
    storageBucket: "park-crm-bb00a.firebasestorage.app",
    messagingSenderId: "667776961583",
    appId: "1:667776961583:web:295fb1083dacc869a88ada"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs };
