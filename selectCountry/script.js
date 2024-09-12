const selectField = document.getElementById("selectField");
const selectText = document.getElementById("select-text");
const options = document.getElementsByClassName("options");
const arrow = document.getElementById("arrow");
const list = document.getElementById("list");

arrow.addEventListener("click", function () {
    if (arrow.getAttribute("src") === "/SelectMenu/img/chevron-down-solid.svg") {
        arrow.setAttribute("src", "/SelectMenu/img/chevron-up-solid.svg");
        list.style.display = "block";


    }
    else if (arrow.getAttribute("src") === "/SelectMenu/img/chevron-up-solid.svg") {
        arrow.setAttribute("src", "/SelectMenu/img/chevron-down-solid.svg");
        list.style.display = "none";

    }
});
for(option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
    }
}
