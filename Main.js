
function getname(){
    var username = prompt("what is your name"," ");
    document.getElementById("welcomeMessage").innerHTML = username + " This is Lab 8";
}

function makeBigger(element){
    element.classList.toggle("big-image");
}

function changemysize(myvalue) {
    var div = document.getElementById("column1");
    div.style.fontSize = myvalue + "px";   
}
function changeFont(element){
    element.style.fontFamily="Courier New";
    for(var i=0; i < element.children.length; i++){
        changeFont(element.children[i]);
    }
}
changeFont(document.getElementsByTagName("body")[0]);

var colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function() {
    document.div.style.backgroundColor = colorPicker.value;
});

function myFunctionclick() {
    document.getElementById("navbar").classList.toggle("show"); 
}

var toggleButton = document.getElementById("toggle-high-contrast");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function() {
    // Get the body element
    var body = document.getElementsByTagName("body")[0];
    // Toggle the "high-contrast" class on the body element
    body.classList.toggle("high-contrast");
});

/*
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content"); 
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); 
            }
        }
    }
}
*/

window.onload=function(){
    var user = document.getElementById("username");
    console.log(user.value); // the user input value.
    console.log(user.type); // the type of the form element.
    }

function inputHandler(){
      var myvalue = document.getElementById("myinput").value;
      document.getElementById("emptyParagraph").innerHTML = "Your Input:" + myvalue;
}

localStorage.setItem("username", "marijn"); // store the items 
console.log(localStorage.getItem("username"));// → marijn 
localStorage.removeItem("username"); // remove from the localstorage
