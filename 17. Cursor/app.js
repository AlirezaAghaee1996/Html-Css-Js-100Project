const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Add hover effect for interactive elements
const hoverElements = document.querySelectorAll("button, a");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});