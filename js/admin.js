const ADMIN="minhminh2532013@gmail.com";
auth.onAuthStateChanged(u=>{
if(!u||u.email!==ADMIN) location.href='index.html';
db.collection('messages').onSnapshot(s=>{
msgs.innerHTML='';
s.forEach(d=>{
msgs.innerHTML+=`<div>${d.data().text}
<button onclick="del('${d.id}')">X</button></div>`;
});
});
});
function del(id){ db.collection('messages').doc(id).delete(); }
