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

var Timer = 0
function GetTimer() {
    console.log(Timer)
    var userName = 0
    while(userName.length != 3){
    userName = prompt("please enter your name")
    if (userName.length != 3) {
        alert ("Name must be 3 characters long (we would give you four but we need to prevent foul language)")
    }
    }
    var userAge = prompt("please enter your age (or don't i'm not your mother)")
    firebase.database().ref('/Clicker/User/'+userName+'/Time').set(Timer);
    firebase.database().ref('/Clicker/User/'+userName+'/Age').set(userAge);
}
var score = 0
function GetScore() {
    console.log(score)
    var PreviousScore = 0
    var userName = 0
    var userAge = 0
    while(userName.length != 3){
    userName = prompt("please enter your name")
    if (userName.length != 3) {
        alert ("Name must be 3 characters long (we would give you four but we need to prevent foul language)")
    }
    }
  while(userAge < 1){
    userAge = Number(prompt("please enter your age (or don't i'm not your mother)"))
      if(userAge < 1){
        alert ("ages bellow 1 are not valid. if you are bellow the age of 1 please lie.")
      }
      if(userAge > 9999){
        alert ("really? just spamming numbers are we?")
      }
    }
    console.log(userName.length)

    firebase.database().ref('/Dasher/User/'+userName).once('value', DasherNameCheck)
function DasherNameCheck(snapshot){
console.log(snapshot)
}
    if (PreviousScore < score){
    firebase.database().ref('/Dasher/User/'+userName+'/Score').set(score);
    }
    firebase.database().ref('/Dasher/User/'+userName+'/Age').set(userAge);
}
