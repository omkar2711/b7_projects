//Change the text of the header
document.getElementById("header").innerText = "JavaScript DOM Manipulation";
document.getElementById("myList").innerHTML += "<li>New List Item</li>"; 

document.getElementById("header").style.color = "blue";


let inputbox = document.getElementById("inputBox").addEventListener("input", function(e){

    let inputText = e.target.value;
    console.log(inputText);
    if(inputText.length < 5){
        document.getElementById("inputError").innerText = "Enter your username";
        e.target.style.border = "2px solid red";
        document.getElementById("inputError").innerText = "Username must be at least 5 characters long";
        document.getElementById("inputError").style.color = "red";

    } else {
        document.getElementById("inputError").innerText = "";
        e.target.style.border = "2px solid green";
        document.getElementById("inputError").innerText = "Valid username";
        document.getElementById("inputError").style.color = "green";
    }
});

let emailBox = document.getElementById("emailBox").addEventListener("input", function(e){
    
    let emailText = e.target.value;
    console.log(emailText);
    if(emailText.includes("@") && emailText.includes(".")){
        document.getElementById("emailError").innerText = "";
        e.target.style.border = "2px solid green";
        document.getElementById("emailError").innerText = "Valid email address";
        document.getElementById("emailError").style.color = "green";
    } else {
         document.getElementById("emailError").innerText = "Invalid email address";
        document.getElementById("emailError").style.color = "red";
    }
});

document.getElementById("changeTextBtn").addEventListener("click", function(){
    let UpdatedText = document.getElementById("para");
    UpdatedText.innerText = "Text has been changed";
})




//setInterval

let cnt = 0;
let hour = 0;
let min = 0;
let sec = 50;
let clockId = document.getElementById("clock");
setInterval(function(){
    sec += 1;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hour++;
        }
    }
    clockId.innerText = hour + "hr :" + min + "min :" + sec + "sec";
}, 1000); //ms