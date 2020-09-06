import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = {

  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return firebase.auth().signOut();
  },
  checkUserAuth: (user) => {
    return firebase.auth().onAuthStateChanged(user);
  },
  currentUser: () => {
    return firebase.auth().currentUser;
  },

  // firestore
  editAccount: (data) => {
    //userData should be an object
    const currentUser = firebase.auth().currentUser;
    return firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .set({ ...data});
  },

  getAccountData: () => {
    const currentUser = firebase.auth().currentUser;
    return firebase.firestore().collection("users").doc(currentUser.uid).get();
  },
};

// setTimeout(
//   () =>
//     Firebase.loginWithEmail("test4@test.com", "password").catch((err) => {
//       console.log(err.message);
//     }),
//   2000
// );

export default Firebase;
