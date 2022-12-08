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
  console.log(note)
}

// Create  User - Registering
async function register(note) {
  let cNote = await getnote(note));
  if(cNote.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO notes (noteID, noteCNT,)
    VALUES ("${note.noteID}", "${note.noteCNT}",);
  
  return await con.query(sql);
}


module.exports = { getAllnotes, login, register, editNote, deleteNote };
