import './style.css';

function createHeader() {
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.textContent = "Bouver";
    h3.classList.add("logo");
    header.appendChild(h3);
    const ul = document.createElement("ul");
    const navItems = ["HOME", "MENU", "ABOUT"];

    navItems.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item;
        ul.appendChild(li);
    });

    header.appendChild(ul)

    return header;
}

export default createHeader;