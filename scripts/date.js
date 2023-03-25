// updating copyrights by year 

let dateContainer = document.getElementById("date");
const date = new Date();
let year = date.getFullYear();
console.log(year)
document.getElementById('date').innerHTML = year