function myFunction() {
  const hMenu = document.getElementById("menu-items-container");
  const containerElement = document.querySelector('.main-body-container');
  if (hMenu.style.display === "flex") {
    hMenu.style.display = "none";
    containerElement.classList.remove('blue-bg');
  } else {
    hMenu.style.display = "flex";
    containerElement.classList.add('blue-bg');
  }
}