const body = document.querySelector("body");
const register = document.getElementById("btn");
const btn = document.getElementById("close-button");

register.addEventListener("click", function(){
    window.alert("Successfully updated !!");
});

btn.addEventListener("click", function(){
    body.innerHTML = null;
});