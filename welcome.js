const howToPlay = document.querySelector("#howToPlay");

const p = document.querySelector(".container p");
howToPlay.addEventListener("click", function () {
  if (p.style.visibility === "hidden") {
    p.style.visibility = "visible";
  } else {
    p.style.visibility = "hidden";
  }
});
