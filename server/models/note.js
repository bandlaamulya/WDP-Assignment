const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllnotes() {
  const sql = `SELECT * FROM notes;`;
  let users = await con.query(sql);
  console.log(users)
}

// Create  note content
async function noteCreation(note) {
  // let cUser = await getUser(user);
  // if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO notes (userID, noteContent)
    VALUES ("${note.userID}", "${note.noteContent}");
  `
  await con.query(sql);
  // return await login(user);
}


async function editNote(note) {
  let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE userID = ${note.userID}
  `;

  await con.query(sql);
  let updatedUser = await getNote(note);
  return updatedUser[0];
}

async function getNote(note) {
  let sql;

  if(note.userID) {
    sql = `
      SELECT * FROM notes
       WHERE userID = ${note.userID}
    `
  } else {
    sql = `
    SELECT * FROM notes 
      WHERE userID = "${note.userID}"
  `;
  }
  return await con.query(sql);  
}

// Delete User function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE userID = ${note.userID}
  `
  await con.query(sql);
}



module.exports = { getAllnotes, noteCreation, editNote, deleteNote};
