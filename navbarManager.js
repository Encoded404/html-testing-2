const nonHamburgerNavbar = document.querySelector("#regularNavbar");
const HamburgerNavbar = document.querySelector("#hamburgerNavbar");

function moveAllContent(oldParent, newParent)
{
    while (oldParent.hasChildNodes()) newParent.appendChild(oldParent.firstChild);
}

var mediatest1 = window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (min-resolution: 2dppx), (min-resolution: 192dpi), (max-width: 580px)")
function reportWindowSize() {
  if(mediatest1.matches)
  {
    console.log("test")
  }
}

window.onresize = reportWindowSize;