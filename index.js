function codeGen() {
  const hexStyle = "abcdef1234567890";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code = code + hexStyle[Math.floor(Math.random() * 16)];
  }
  return code;
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let color1 = "rgb(92,145,229)";
let color2 = "rgb(152,63,198)";
let copyCode = document.querySelector(".copy");
copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerHTML);
    console.log(copyCode.innerHTML);
});

btn1.addEventListener("click", () => {
   color1 = codeGen();
  btn1.innerText = color1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
});

btn2.addEventListener("click", () => {
   color2 = codeGen();
  btn2.innerText = color2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
});
