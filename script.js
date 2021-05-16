
// toggle nav

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}


// close nav when clicking on a nav item

document.addEventListener("click", verify);

function verify(e) {
    if(e.target.closest(".nav-item")) {
        toggleNav();
    }
}


// sticky header

window.addEventListener("scroll", func);

function func() {
    if(this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky");
    }
}



// background slideshow

const slideshowImages = document.querySelectorAll(".slideshow");
const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slideshowImages[currentImageCounter].style.opacity = 0;
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;

    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
    }, 1000);

    currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

     slideshowImages[currentImageCounter].style.opacity = 1;
     slideshowImages[currentImageCounter].style.zIndex = -1;

}