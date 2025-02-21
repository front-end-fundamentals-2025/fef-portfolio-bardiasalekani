const darkButton = document.getElementById("dark-mode");
const lightButton = document.getElementById("light-mode");
const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");

darkButton.addEventListener("click", function (color){
    document.body.classList.add("dark-mode");
});

lightButton.addEventListener("click", function (color){
    document.body.classList.remove("dark-mode");

});