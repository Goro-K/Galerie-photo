const img = document.querySelectorAll(".galery img");
let imgActive = 0;
img[imgActive].classList.add("show")

// Masquer les photos 2,3,4

img.forEach((image, i) => {
    if(i < 1) return;
    image.classList.add("hidden");
});

// clic sur bouton suivant


document.querySelector('.next').addEventListener("click", () =>{
    next();
});

// création de la fonction next

const next = function() {
    img[imgActive].classList.remove("show");
    img[imgActive].classList.add("hidden");
    imgActive ++;
    if(imgActive >= img.length) {
        imgActive = 0;
    }
    img[imgActive].classList.remove("hidden");
    setTimeout(() => {
        img[imgActive].classList.add("show");
    },150);
}


//clic sur bouton précedent

document.querySelector('.previous').addEventListener("click", () =>{
    prev();
});

// création de la fonction prev

const prev = function() {
    img[imgActive].classList.remove("show");
    img[imgActive].classList.add("hidden");
    imgActive -- ;
    if(imgActive < 0) {
        imgActive = img.length - 1;
    }
    img[imgActive].classList.remove("hidden")
    setTimeout(() => {
        img[imgActive].classList.add("show");
    },150);
}


// variable globale pour stocker l'interval de temps
let interval;

// clic sur le bouton play

document.querySelector(".fa-play").addEventListener("click", ()=> {
    interval = setInterval(next, 1000);
});

// clic sur le bouton pause

document.querySelector(".fa-pause").addEventListener("click", ()=> {
    clearInterval(interval);
});


// gestion touche clavier

window.addEventListener("keydown", (e)=> {
    if(e.key == "ArrowRight") {
        next()
    }

    if(e.key == "ArrowLeft") {
        prev()
    }
})

