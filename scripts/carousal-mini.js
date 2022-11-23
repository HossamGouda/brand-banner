const images2 = document.getElementById("images2");
const leftBtn2 = document.getElementById("left2");
const rightBtn2 = document.getElementById("right2");
const img2 = document.querySelectorAll("#images2 img");

//iniate index
let idx2 = 0;
//func interval to automate slides moving
let interval2 = setInterval(run, 3000);

//func changeImage work by checking if the idx bigger
// ..or less than the images2 array from the dom
function changeImage() {
  if (idx2 > img2.length - 1) {
    idx2 = 0;
  } else if (idx2 < 0) {
    idx2 = img2.length - 1;
  }
  images2.style.transform = `translateX(${-idx2 * 300}px)`;
}

//func run increment the indx, call changeImage func
function run() {
  idx2++;
  changeImage();
}

//to avoid issues with auto sliding
function resetInterval() {
  clearInterval(interval);
  interval2 = setInterval(run, 3000);
}

rightBtn2.addEventListener("click", () => {
  idx2++;
  changeImage();
  resetInterval();
});

leftBtn2.addEventListener("click", () => {
  idx2--;
  changeImage();
  resetInterval();
});
// images2 Silder end

/**
 * if screen width > 562px or higher clear this function
 *
 *
 *
 *
 *
 *
 */

let carousalDiv = document.querySelector("projects");
console.log(carousalDiv);
let width = carousalDiv.getBoundingClientRect();
console.log(rect);
