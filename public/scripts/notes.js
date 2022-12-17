import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(userID, noteContent) {
    this.userID = userID;
    this.noteContent = noteContent;
  }
}

// login functionality
let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', saveNote);

function saveNote(e) {
  e.preventDefault();
  let userID = 1
  let noteContent = document.getElementById("inputtext").value;
  let note = new User(userID, noteContent);

  fetchData("/notes/insert", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.replace = "notes.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}