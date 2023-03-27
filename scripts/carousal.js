const images = document.getElementById("images");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#images img");
const carousel = document.querySelector(".carousel");

//iniate index
let idx = 0;
//func interval to automate slides moving
let interval = setInterval(run, 2000);

//func changeImage work by checking if the idx bigger
// ..or less than the images array from the dom



function control() {

    if (window.matchMedia("(max-width: 562px)").matches) {

        for (var i = 1; i < img.length; i++) {

            img[i].classList.add(".img-sm");
            img[i].setAttribute("id", "box");
            img[i].style.width = `${carousel.getBoundingClientRect().width}px`;
        }

        function changeImage() {
            if (idx > img.length - 1) {
                idx = 0;
            } else if (idx < 0) {
                idx = img.length - 1;
            }
            images.style.transform = `translateX(${
              -idx * carousel.getBoundingClientRect().width
            }px)`;
        }
        changeImage();
    } else {
        for (var i = 1; i < img.length; i++) {
            img[i].classList.remove(".img-sm");
            img[i].removeAttribute('id');
            img[i].style.width = `${carousel.getBoundingClientRect().width}px`

        }

        function changeImage() {
            if (idx > img.length - 1) {
                idx = 0;
            } else if (idx < 0) {
                idx = img.length - 1;
            }
            images.style.transform = `translateX(${
              -idx * carousel.getBoundingClientRect().width
            }px)`;
        }
        changeImage()
    }

}

// function changeImage() {
//     if (idx > img.length - 1) {
//         idx = 0;
//     } else if (idx < 0) {
//         idx = img.length - 1;
//     }
//     images.style.transform = `translateX(${-idx * 500}px)`;
// }

//func run increment the indx, call changeImage func



function run() {
    idx++;
    control();
}

//to avoid issues with auto sliding
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
    idx++;
    control();
    resetInterval();
});

leftBtn.addEventListener("click", () => {
    idx--;
    control();
    resetInterval();
});
// images Silder end