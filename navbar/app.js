const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links")
});


//classList - shows/gets all classes
//contains - checks clasList for specific class
//add - add class
//remove -  remove class
//toggle - toggle class