// Fungsi untuk computer
function getPilComp() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

// Fungsi untuk player
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "gunting") return comp == "batu" ? "KALAH!" : "MENANG!";
  if (player == "kertas") return comp == "gunting" ? "KALAH!" : "MENANG!";
}

// mengambil pilihan player
const pilPlayer = document.querySelectorAll("li img");
pilPlayer.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilComp = getPilComp();
    const pilPlay = pil.classList;
    const hasil = getHasil(pilComp, pilPlay);

    const imgComp = document.querySelector(".img-comp");
    imgComp.setAttribute("src", "assets/" + pilComp + ".png");

    const result = document.querySelector(".text-result");
    result.innerHTML = hasil;
  });
});
