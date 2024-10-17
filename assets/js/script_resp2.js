let verify=document.querySelector('#verify');

function stiker() {
    let resultElement = document.getElementById("textresult");
    let sticker1Count = parseInt(document.getElementById("sticker1").value);
    let sticker2Count = parseInt(document.getElementById("sticker2").value);
    let sticker3Count = parseInt(document.getElementById("sticker3").value);
    let totalStickers = sticker1Count + sticker2Count + sticker3Count;
    if (totalStickers <= 10) {
      resultElement.innerHTML = "Llevas " + totalStickers + " stickers.";
    } else {
      resultElement.innerHTML = "Llevas demasiados stickers.";
    }
  }
  
  verify.addEventListener("click", stiker); 
  