import './style.css'

function createHome() {
    const section = document.createElement("section");
    section.classList.add("home");

    const div = document.createElement("div");
    div.classList.add("hero");

    const h3 = document.createElement("h3");
    h3.classList.add("restaurant-name");
    h3.textContent = "Bouver";

    const button = document.createElement("button");
    button.classList.add("menus-btn");
    button.textContent = "LE MENU";

    div.appendChild(h3);
    div.appendChild(button);

    section.appendChild(div);

    return section;
}

export default createHome;