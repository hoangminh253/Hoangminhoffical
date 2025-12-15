<script>
const firebaseConfig = {
apiKey: "AIzaSyCiroMCXbxEt3_kZ_AcV5nmRW88b7P3R4Y",
authDomain: "hoangminhofficial.firebaseapp.com",
projectId: "hoangminhofficial",
storageBucket: "hoangminhofficial.appspot.com",
messagingSenderId: "SENDER_ID",
appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
</script>
