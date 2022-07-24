// references of input
import { getDatabase, get, set, update, remove, child, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
var Name1 = document.querySelectorAll(".inp")[0];
var Email1 = document.querySelectorAll(".inp")[1];
var Message1 = document.querySelectorAll(".inp")[2];
var Name, Email, Message;
const db = getDatabase();
// references of button
function insertData(event) {
    readFromData()
    event.preventDefault();
    console.log("btn clicked");
    //code to send the data to firebase
    if (Name == "") {
        alert("Field can not be blank");
    } else {
        set(ref(db, "data/" + Name), {
            name: Name,
            email: Email,
            message: Message
        }).then(() => {
            alert("data stored successfully");
        }).catch((error) => {
            alert("Unsuccessful", error);
        });
    }
}
// now
// Button.onclick = function(e) {
//     e.preventDefault();
//     console.log(Name.value);

// }
function readFromData() {
    Name = Name1.value;
    Email = Email1.value;
    Message = Message1.value;
    console.log(Name, Email, Message);

}




// references of button

var Button = document.getElementById("btn");
document.getElementById("btn").onclick = insertData;