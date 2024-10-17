let imageBord = document.getElementById("image_bord");

function colorBord() {
  if (imageBord.style.border === "2px solid red") {
    imageBord.style.border = "none";
  } else {
    imageBord.style.border = "2px solid red";
  }
}

imageBord.addEventListener("click", colorBord)