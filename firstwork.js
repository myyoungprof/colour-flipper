const colors = ["red", "green", "brown", "rgba(133,122,200)","#f15025"]
const btn= document.getElementById("btn")
const color= document.querySelector(".color")

btn.addEventListener("click", function () {

const randomNumber= fish();
  document.body.style.background= colors[randomNumber];
 color.textContent= colors[randomNumber];

 console.log(randomNumber);
})

function fish() {
    return Math.floor(Math.random()*colors.length);
}