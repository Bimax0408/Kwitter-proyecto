// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTTH_wBMO-BXjvebemIKUn4Tq0g-Vk6ow",
    authDomain: "kwitter-clase.firebaseapp.com",
    projectId: "kwitter-clase",
    storageBucket: "kwitter-clase.appspot.com",
    messagingSenderId: "927099597587",
    appId: "1:927099597587:web:0b2b63760406d614b920e6"
  };
  

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Hola como estas, "+ user_name;

room_name=localStorage.getItem("room_name");

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}


function getData() 
{firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       if (childKey != "purpose")
      { firebase_message_id = childKey; message_data = childData;
             //Inicia código
             console.log(firebase_message_id);
             console.log(message_data);
             name = message_data['name'];
             message = message_data['message'];
             like = message_data['like'];
             name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
             message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
             like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
             span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
             row = name_with_tag + message_with_tag + like_button + span_with_tag;
             document.getElementById("output").innerHTML += row;
             //termina codigo
      }
      });
});
}
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function redirectToRoomName(name)
{
      console.log(name);
      localStoragen.setItem("room_name",name);
      window.location="kwitter_page.html";
}