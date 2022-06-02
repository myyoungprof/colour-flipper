const hex = ["1", "2", "3", "4","5","6", "7", "8","9",
"A","B","C","D","E","F","G","H"]
const btn= document.getElementById("btn")
const color= document.querySelector(".color")

btn.addEventListener("click", function (){
let hexcolors= "#"
for(i=0; i<6; i++){
hexcolors +=hex[fish()];
}

document.body.style.background= hexcolors;
 color.textContent= hexcolors;
})

function fish() {
    return Math.floor(Math.random()*hex.length);
}
