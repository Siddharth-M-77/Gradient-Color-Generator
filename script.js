let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let color = "";
let codeDiv=document.querySelector(".code")
let rgb1=''
let rgb2=''

const hexaValues = () => {
  let myHexaValue = "0123456789abcdef";
  color = "#";
  for (i = 0; i < 6; i++) {
    color += myHexaValue[Math.floor(Math.random() * 16)];
  }
  return color;
};
hexaValues();

const handlebtn1 = () => {
  rgb1 = hexaValues();
  //   console.log(rgb1);
  btn1.textContent = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},  ${rgb2})`;
  codeDiv.textContent=`background-image: linear-gradient(to right top , ${rgb1},${rgb2});`
};
const handlebtn2 = () => {
   rgb2 = hexaValues();
  //   console.log(rgb2);
  btn2.textContent = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1},  ${rgb2})`;
  codeDiv.textContent=`background-image: linear-gradient(to right top , ${rgb1},  ${rgb2});`
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

codeDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(codeDiv.textContent)
    
    alert("code copied")
    
})
