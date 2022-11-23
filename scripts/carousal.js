const images = document.getElementById("images");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#images img");

//iniate index
let idx = 0;
//func interval to automate slides moving
let interval = setInterval(run, 2000);

//func changeImage work by checking if the idx bigger
// ..or less than the images array from the dom
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  images.style.transform = `translateX(${-idx * 500}px)`;
}

//func run increment the indx, call changeImage func
function run() {
  idx++;
  changeImage();
}

//to avoid issues with auto sliding
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
// images Silder end
