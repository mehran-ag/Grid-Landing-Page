function myFunction() {
  var hMenu = document.getElementById("menuItems");
  const containerElement = document.querySelector('.body-container');
  if (hMenu.style.display === "block") {
    hMenu.style.display = "none";
    containerElement.classList.remove('blue-bg');
  } else {
    hMenu.style.display = "block";
    containerElement.classList.add('blue-bg');
  }

}