const icons = document.querySelector(".icons");
const menu = document.querySelector(".menu");

icons.addEventListener("click", () => {
  icons.classList.toggle("active");

  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
    menu.classList.add("hide");
  }
});
