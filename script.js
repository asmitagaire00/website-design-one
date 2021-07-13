function openNav() {
  document.getElementsByClassName("hamburger")[0].style.height = "100%";
  document.getElementsByClassName("openbtn")[0].style.opacity = "0";
}

function closeNav() {
  document.getElementsByClassName("hamburger")[0].style.height = "0%";
  document.getElementsByClassName("openbtn")[0].style.opacity = "1";
  document.getElementsByClassName("openbtn")[0].style.transition = "all 0.5s";
}

function openNavLink() {
  document.getElementsByClassName("hamburger")[0].style.height = "0%";
  document.getElementsByClassName("openbtn")[0].style.opacity = "1";
}
