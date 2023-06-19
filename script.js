let items = document.getElementsByClassName("header-title text-uppercase");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", passage);
  items[i].addEventListener("mouseleave", sortir);
}

function passage() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontSize = "34px";
  }
}

function sortir() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontSize = "";
  }
}