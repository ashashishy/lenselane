import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
        apiKey: "AIzaSyDvmQ5hg8MYdESJa5SrNVZaOvRpoJ_oXt0",
        authDomain: "lenselane-e08ec.firebaseapp.com",
        databaseURL: "https://lenselane-e08ec.firebaseio.com",
        projectId: "lenselane-e08ec",
        storageBucket: "lenselane-e08ec.appspot.com",
        messagingSenderId: "106220753630",
        appId: "1:106220753630:web:695ab9d84bf9b7dd7c284f",
        measurementId: "G-HW03121EYX"
      };

      firebase.initializeApp(config);
      export const auth=firebase.auth();
      export const firestore=firebase.firestore();

      const provider=new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle=()=>auth.signInWithPopup(provider);
      export default firebase;