const aboutButton = document.getElementById("aboutButton");
const aboutDetails = document.getElementById("aboutDetails");
const pageContainer = document.querySelector(".page-container");

let currentSlide = 0;


/* ABOUT ME BUTTON */

aboutButton.addEventListener("click", function (event) {

    event.stopPropagation();

    aboutDetails.classList.toggle("show");

    if (aboutDetails.classList.contains("show")) {

        aboutButton.textContent = "HIDE MY DETAILS ←";

    } else {

        aboutButton.textContent = "SHOW MY DETAILS →";

    }

});


/* CLICK ANYWHERE ON THE SLIDE */

pageContainer.addEventListener("click", function (event) {

    /* Ignore links and buttons */
    if (event.target.closest("a, button, video, input, textarea, select")) {
        return;
    }

    /* Go to next slide */
    if (currentSlide < 3) {

        currentSlide++;

        pageContainer.scrollTo({

            left: currentSlide * window.innerWidth,

            behavior: "smooth"

        });

    }

});


/* UPDATE CURRENT SLIDE */

pageContainer.addEventListener("scroll", function () {

    currentSlide = Math.round(
        pageContainer.scrollLeft / window.innerWidth
    );

});