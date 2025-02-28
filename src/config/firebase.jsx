
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBYdePKNS9Y4EK_2MCrbukFeIMjADPX_PA",
  authDomain: "vybe-1cdcd.firebaseapp.com",
  projectId: "vybe-1cdcd",
  storageBucket: "vybe-1cdcd.firebasestorage.app",
  messagingSenderId: "616762432626",
  appId: "1:616762432626:web:eded358c03c61e725df6eb",
  measurementId: "G-MQ8XE728TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();