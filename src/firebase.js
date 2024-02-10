// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyALOaq9KdHTIzxofc3XAloATipHQKHrF60",
//     authDomain: "disney-clone-b21a3.firebaseapp.com",
//     projectId: "disney-clone-b21a3",
//     storageBucket: "disney-clone-b21a3.appspot.com",
//     messagingSenderId: "48983303712",
//     appId: "1:48983303712:web:19e5f54f4882096dd57e45",
//     measurementId: "G-Y2YPQL3H05"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

// export {
//     app,
//     db,
//     auth,
//     provider
// } 

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyALOaq9KdHTIzxofc3XAloATipHQKHrF60",
    authDomain: "disney-clone-b21a3.firebaseapp.com",
    projectId: "disney-clone-b21a3",
    storageBucket: "disney-clone-b21a3.appspot.com",
    messagingSenderId: "48983303712",
    appId: "1:48983303712:web:19e5f54f4882096dd57e45",
    measurementId: "G-Y2YPQL3H05"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);