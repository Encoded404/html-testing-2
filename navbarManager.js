const alwaysUseBurgerNavbar = true;


const nonHamburgerNavbar = document.querySelector("#regularNavbar");
const HamburgerNavbar = document.querySelector("#hamburgerNavbar");

const stylesheetContainer = document.querySelector("head")

var hamburgerLink

function moveAllContent(oldParent, newParent)
{
    while (oldParent.hasChildNodes()) newParent.appendChild(oldParent.firstChild);
}

function moveToHamburgerNavbar()
{
  const exist = Array.from(
    stylesheetContainer.querySelectorAll('link[rel="stylesheet"]')
  ).some(link => link.id == "detectOnRezise")
  if(!exist)
  {
    hamburgerLink = document.createElement("link")
    hamburgerLink.rel = "stylesheet"
    hamburgerLink.type = 'text/css';
    hamburgerLink.href = "./hamburgerNavbar.css"
    hamburgerLink.id = "detectOnRezise"
    stylesheetContainer.appendChild(hamburgerLink)
  }
}

function moveToRegularNavbar()
{
  const exist = Array.from(
    stylesheetContainer.querySelectorAll('link[rel="stylesheet"]')
  ).some(link => link.id == "detectOnRezise")
  if(exist)
  {
    stylesheetContainer.removeChild(hamburgerLink)
  }
}

var mediatest1 = window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (min-resolution: 2dppx), (min-resolution: 192dpi), (max-width: 580px)")
function reportWindowSize() {
  if(mediatest1.matches || alwaysUseBurgerNavbar)
  {
    moveToHamburgerNavbar()
  }
  else
  {
    moveToRegularNavbar()
  }
}

var timeout = false, // holder for timeout id
    delay = 50, // delay after event is "complete" to run callback
    calls = 0;

// window.resize event listener
window.addEventListener('resize', function() {
  // clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(reportWindowSize, delay);
});

window.addEventListener('load', reportWindowSize)