const btn = document.getElementById("btn");
const hexCode = document.getElementById("hexCode");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  hexCode.textContent = newColor;
  hexCode.style.color = newColor; // Optional: Change text color to match the background
});