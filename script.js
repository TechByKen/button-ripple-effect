const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  const btnX = e.pageX - btn.offsetLeft;
  const btnY = e.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", btnX + "px");
  btn.style.setProperty("--yPos", btnY + "px");
});
