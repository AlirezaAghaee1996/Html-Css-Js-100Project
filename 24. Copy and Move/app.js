const copyText = document.querySelector("textarea[name='copyTxt']");
const finalText = document.querySelector("textarea[name='finalTxt']");
const moveBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => copyText.select());
finalText.addEventListener("click", () => finalText.select());

function copyToClipBoard(str) {
  const textarea = document.createElement("textarea");
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  output.innerHTML = `<h3>Content Copied!</h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.remove("added");
    output.textContent = "";
  }, 2000);
}