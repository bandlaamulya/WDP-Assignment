/*document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}
*/
let nav = document.querySelector('nav');

if(getCurrentUser()) {
  nav.innerHTML = `
    <ul>
      <li><a href="note.html">Note</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a id="logout-btn">Logout</a></li>
    </ul>
  `
} else {
  nav.innerHTML = `
    <ul>
      <li><a href="note.html">Note</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Sign Up</a></li>
    </ul>
  `
}

/*
export async function fetchData(route = '', data = {}, GET) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: GET, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }




/*let detailDoc = document.getElementById("enterDetails");
if(detailDoc) detailDoc.addEventListener("submit", customerObj);

function customerObj(e){
    e.preventDefault();
    let f_name = ((document.getElementById("first_name")||{}).value)||"";
    let l_name = ((document.getElementById("last_name")||{}).value)||"";
    let email_id = ((document.getElementById("email_id")||{}).value)||"";
    let password = ((document.getElementById("password")||{}).value)||"";
    let note = ((document.getElementById("inputtext")||{}).value)||"";
    const newCustomer = new customerFn(f_name,l_name,email_id,password,note);
    console.log(newCustomer); 
}


function customerFn(f_name,l_name,email_id,password,notes){
    this.firstname = f_name;
    this.lastname = l_name; 
    this.email_id = email_id; 
    this.password = password; 
    this.note = notes;
}

customerFn.prototype.getFirstName = function(){
    return this.f_name;
}

customerFn.prototype.getLastName = function(){
    return this.l_name;
}

customerFn.prototype.getemail_id = function(){
    return this.email_id;
}

customerFn.prototype.getpassword = function(){
   return this.password;
}

customerFn.prototype.getnote = function(){
    return this.note;
}


customerFn.prototype.setFirstName = function(firstname){
    this.f_name = firstname;
}

customerFn.prototype.setLastName = function(lastname){
    this.l_name = lastname;
}

customerFn.prototype.setemail_id = function(email_id){
    this.email_id = email_id;
}

customerFn.prototype.setpassword = function(password){
   this.password = password;
}

customerFn.prototype.setnote = function(note){
    this.note = note;
} */
// logout event listener
let logout = document.getElementById("logout-btn");
if(logout) logout.addEventListener('click', removeCurrentUser)

// stateful mechanism for user
// logging in a user
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// getting current user function
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
export function removeCurrentUser() {
  localStorage.removeItem('user');
  window.location.href = "login.html";
}