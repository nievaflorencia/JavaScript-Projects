//local review data 
const reviews = [
    {
        id:1,
        name:"Juan",
        job:"Boss",
        img:"./img/review-4.jpeg",
        text:"Tus penas son una cajita musical que se oxidó Carnaval de los picaflores maquillaje y bombachitas 💖" 
    },
    {
        id:2,
        name:"Lola",
        job:"Tatto Artist",
        img:"./img/review-2.jpeg",
        text:"Mirame bien, dijo al partir no te sorprenda, volverme a ver. Mirame bien, puedo morir y una y mil veces renacer... 💅" 
        
    },
    {
        id:3,
        name:"Pedro",
        job:"Tatto Artist",
        img:"./img/review-3.jpeg",
        text:"Tanto amor, puede lastimarte, nena nena nena!!❣❣"
        
    },
    {
        id:4,
        name:"Floki",
        job:"Intern",
        img:"./img/flokilardo.jpeg",
        text:"Who let the dogs out? Who, who, who,who? 🐶"
        
    },
];
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

//show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});

