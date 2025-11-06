let userpassword = prompt("Enter your password:");
let correctpassword = "admin123";
if(userpassword === correctpassword){
    console.log("Access granted.");
}else{
    console.log("Access denied.");
}