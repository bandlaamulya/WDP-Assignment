let detailDoc = document.getElementById("enterDetails");
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
}