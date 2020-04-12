import * as firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyDcdVZXyFaxSJz9cqKi0bIl8wUo282ffdE",
    authDomain: "my-first-app-a71dc.firebaseapp.com",
    databaseURL: "https://my-first-app-a71dc.firebaseio.com",
    projectId: "my-first-app-a71dc",
    storageBucket: "my-first-app-a71dc.appspot.com",
    messagingSenderId: "92674234864",
    appId: "1:92674234864:web:64ff4049dc3c933bcf2535",
    measurementId: "G-XJE73401ZN"
};

firebase.initializeApp(firebaseConfig)
console.log(firebase)

const database = firebase.database()

export const highscoreRef = database.ref("score/count")