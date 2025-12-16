import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

login.onclick = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
};

signup.onclick = async () => {
  const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
  await setDoc(doc(db, "users", res.user.uid), {
    email: res.user.email,
    online: true
  });
};

onAuthStateChanged(auth, user => {
  if (user) location.href = "chat.html";
});
