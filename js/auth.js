function login(){ auth.signInWithEmailAndPassword(email.value,pass.value); }
function signup(){ auth.createUserWithEmailAndPassword(email.value,pass.value); }
auth.onAuthStateChanged(u=>{ if(u) console.log('logged'); });
