import { auth, db, storage } from "./firebase.js";
import {
  collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const ADMIN_EMAIL = "minhminh2532013@gmail.com";

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, snap => {
  messages.innerHTML = "";
  snap.forEach(d => {
    const m = d.data();
    messages.innerHTML += `
      <div class="msg">
        <b>${m.email}</b>: 
        ${m.text || `<img src="${m.image}" width="150">`}
        ${auth.currentUser.email === ADMIN_EMAIL
          ? `<button onclick="deleteMsg('${d.id}')">❌</button>` : ""}
      </div>`;
  });
});

send.onclick = async () => {
  await addDoc(collection(db, "messages"), {
    text: msg.value,
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    time: Date.now()
  });
  msg.value = "";
};

upload.onchange = async e => {
  const file = e.target.files[0];
  const r = ref(storage, `images/${Date.now()}_${file.name}`);
  await uploadBytes(r, file);
  const url = await getDownloadURL(r);

  await addDoc(collection(db, "messages"), {
    image: url,
    email: auth.currentUser.email,
    time: Date.now()
  });
};

window.deleteMsg = async id => {
  await deleteDoc(doc(db, "messages", id));
};
