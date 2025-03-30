let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Auto change every 2 seconds
    }
    function changeSlide(n) {
        slideIndex += n - 1;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }
showSlides();