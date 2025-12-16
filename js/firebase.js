import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCiroMCXbxEt3_kZ_AcV5nmRW88b7P3R4Y",
  authDomain: "hoangminhofficial.firebaseapp.com",
  projectId: "hoangminhofficial",
  storageBucket: "hoangminhofficial.appspot.com"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
