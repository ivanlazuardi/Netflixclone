import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzcTAvjD-IP15mNoW9meuRuWNMHOZ4Uos",
    authDomain: "netflix-clone-322e7.firebaseapp.com",
    projectId: "netflix-clone-322e7",
    storageBucket: "netflix-clone-322e7.appspot.com",
    messagingSenderId: "113751583838",
    appId: "1:113751583838:web:a339ab7316727a076d18cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;



