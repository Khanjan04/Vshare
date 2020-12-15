/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCM5oNRYvIIgrIt3ynLpSM0gPp40yob1Jg",
    authDomain: "vshare-4dc02.firebaseapp.com",
    projectId: "vshare-4dc02",
    storageBucket: "vshare-4dc02.appspot.com",
    messagingSenderId: "783570912002",
    appId: "1:783570912002:web:1623a7fee3618723a5b81b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCM5oNRYvIIgrIt3ynLpSM0gPp40yob1Jg",
    authDomain: "vshare-4dc02.firebaseapp.com",
    projectId: "vshare-4dc02",
    storageBucket: "vshare-4dc02.appspot.com",
    messagingSenderId: "783570912002",
    appId: "1:783570912002:web:1623a7fee3618723a5b81b"
  };
firebase.initializeApp(firebaseConfig);
  
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore,timestamp };


