let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });

});

let currentWordindex = 0;
let maxWordIndex = words.length - 1;
words[currentWordindex].style.opacity = 1;

let changeText = () => {
    let currentWord = words[currentWordindex];
    let nextWord = currentWordindex === maxWordIndex ? words[0] : words[currentWordindex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordindex = currentWordindex === maxWordIndex ? 0 : currentWordindex + 1

};

changeText();
setInterval(changeText, 3000);

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})


// filter method

// const filterButtons = document.querySelectorAll(".filter-buttons button");
// const portfolioGallery = document.querySelectorAll(".portfolio-gallery .portbox");

// const portGallery = e => {
//     document.querySelector(".active").classList.remove("active");
//     e.target.classList.add("active");

//     portfolioGallery.forEach(portbox =>{
//         portbox.classList.add("hide");

//         if(portbox.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
//             portbox.classList.remove("hide");
//         }
//     })
// };


// filterButtons.forEach(button => button.addEventListener("click", portGallery));


//mix it up portfolio section

var mixer = mixitup('.portfolio-gallery');
    
//     , {
//     animation: {
//         duration: 500,
//         effects: 'fade scale(0.5) stagger(30ms)'
//     }
// });

//active menu/////////////////////////////////////////////////
let menuLi= document.querySelectorAll('header ul li a');
let section= document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})


// toggle icon navbar//////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick =()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");
}

window.onscroll =()=>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open");
}


/*parallab */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));