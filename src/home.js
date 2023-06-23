import './style.css'
import createMenu from './menu';

function createHome() {
    const section = document.createElement("section");
    section.classList.add("home");
    section.classList.add("background");

    const div = document.createElement("div");
    div.classList.add("hero");

    const h3 = document.createElement("h3");
    h3.classList.add("restaurant-name");
    h3.textContent = "Bouver";

    const button = document.createElement("button");
    button.classList.add("menus-btn");
    button.textContent = "LE MENU";
    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild(createMenu());
    });

    div.appendChild(h3);
    div.appendChild(button);

    section.appendChild(div);

    return section;
}

export default createHome;