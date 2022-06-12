var firebaseConfig = {
      apiKey: "AIzaSyACrZgQ1fpcSpv5NBVzPsLR8DlesaNRx8M",
      authDomain: "kwitter-2817f.firebaseapp.com",
      databaseURL: "https://kwitter-2817f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2817f",
      storageBucket: "kwitter-2817f.appspot.com",
      messagingSenderId: "473290975150",
      appId: "1:473290975150:web:65effd2266d709413f0a3f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}