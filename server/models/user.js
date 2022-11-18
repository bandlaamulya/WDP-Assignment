// "database" as object literal
const users = [
  {
    userId: 12345,
    email_id: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    email_id: "fredburger",
    password: "badpassword"
  },
  {
    userId: 23412,
    email_id: "bobbyjones",
    password: "hi"
  }
];

function getAllUsers() {
  return users;
}

function login(user) { // {email_id: "sda", password: "gsdhjsga"}
  let cUser = users.filter( u => u.email_id === user.email_id);
  
  if(!cUser[0]) throw Error("email_id not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

module.exports = {getAllUsers, login};
