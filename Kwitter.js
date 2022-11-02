function addUser()
{
    user_name=document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("username",user_name);
    window.location="Kwitter_room.html";
}