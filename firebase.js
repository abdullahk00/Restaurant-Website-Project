


const firebaseConfig = {
    apiKey: "AIzaSyB0lvjHTN3ezW9-EC-ujnrkbUwRAOERCxs",
    authDomain: "fir-project-edb33.firebaseapp.com",
    databaseURL: "https://fir-project-edb33-default-rtdb.firebaseio.com",
    projectId: "fir-project-edb33",
    storageBucket: "fir-project-edb33.firebasestorage.app",
    messagingSenderId: "791092738195",
    appId: "1:791092738195:web:769d3d10b9a5374a843566",
    measurementId: "G-E083KPZLYM"
  };

  const app = firebase.initializeApp(firebaseConfig);


  function sendMessage(){
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;

    const database = firebase.database();

    const dataRef = database.ref('messages/');
    const newMessage = dataRef.push()



    newMessage.set({
        email,
        name,
        message
    })
    .then(() => {
        console.log("Data written successfully!");
    })
    .catch((error) => {
        console.error("Error writing data: ", error);
    });
  }