import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD4UpSaFg2SuV05ephzR9_2tuUrNdfz3RY",
  authDomain: "disney-333112.firebaseapp.com",
  projectId: "disney-333112",
  storageBucket: "disney-333112.appspot.com",
  messagingSenderId: "701786185985",
  appId: "1:701786185985:web:77dd72745e5001261e3b00",
  measurementId: "G-Z3BJM1RGDH"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;