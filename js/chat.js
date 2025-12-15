let currentRoom='global';
auth.onAuthStateChanged(u=>{ if(!u) location.href='index.html'; setStatus(true); load(); });


function setStatus(on){ db.collection('status').doc(auth.currentUser.uid).set({online:on}); }
window.onbeforeunload=()=>setStatus(false);


function load(){
db.collection('messages').where('room','==',currentRoom)
.orderBy('createdAt').onSnapshot(s=>{
chat.innerHTML='';
s.forEach(d=>{
const m=d.data();
chat.innerHTML+=`<div class="msg"><b>${m.email}</b>: ${m.text}</div>`;
});
});
}


function send(){
db.collection('messages').add({
room:currentRoom,
text:msg.value,
email:auth.currentUser.email,
uid:auth.currentUser.uid,
createdAt:firebase.firestore.FieldValue.serverTimestamp(),
seen:false
}); msg.value='';
}


function typing(){ db.collection('typing').doc(auth.currentUser.uid).set({room:currentRoom}); }
