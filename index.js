var menu = document.getElementById("menu")
var menu_on = false
var links = document.getElementById("links")

console.log(menu)

menu.addEventListener("click", function() {
    menu_on = !menu_on;
    if (menu_on) {
        links.classList.add("hide");
    }
    if (!menu_on) {
        links.classList.remove("hide");
    }
});
