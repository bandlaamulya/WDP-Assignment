import { fetchData, getCurrentUser } from './main.js'

// user class
class User {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID;
  }
}

// login functionality
let noteForm = document.getElementById("notes_form");
if(noteForm) noteForm.addEventListener('submit', saveNote);

let user_ = getCurrentUser();
console.log(user_)


function saveNote(e) {
  e.preventDefault();

  let userID = user_.userID;
  let noteContent = document.getElementById("inputtext").value;
  let note = new User(noteContent, userID);

  fetchData("/notes/register", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "notes.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}