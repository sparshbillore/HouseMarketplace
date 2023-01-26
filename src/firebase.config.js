import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8chekhpCcAjMXR_AqiLGIgA2_lkud3oA",
  authDomain: "house-marketplace-app-ffaab.firebaseapp.com",
  projectId: "house-marketplace-app-ffaab",
  storageBucket: "house-marketplace-app-ffaab.appspot.com",
  messagingSenderId: "320585128562",
  appId: "1:320585128562:web:902894c21224e361e6c0eb"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const db = getFirestore();
