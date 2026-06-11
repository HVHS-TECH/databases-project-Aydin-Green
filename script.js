// Import the functions you need frin the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#availble-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdgYYt_2atKFvwO0U9pIHQwOp1rTIfmlU",
    authDomain: "aydin-green-12comp.firebaseapp.com",
    databaseURL: "https://aydin-green-12comp-default-rtdb.firebaseio.com",
    projectId: "aydin-green-12comp",
    storageBucket: "aydin-green-12comp.firebasestorage.app",
    messagingSenderId: "114190641424",
    appId: "1:114190641424;web;6ee090179cb85b80535d95"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialize finished:");
  console.log(firebase);