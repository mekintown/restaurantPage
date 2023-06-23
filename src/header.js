import './style.css';
import createHome from './home';
import createMenu from './menu';


function createHeader() {
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    h3.textContent = "Bouver";
    h3.classList.add("logo");
    header.appendChild(h3);
    const ul = document.createElement("ul");

    const homeLi = document.createElement("li")
    homeLi.textContent = "HOME";
    homeLi.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild(createHome());
    });
    ul.appendChild(homeLi);

    const menuLi = document.createElement("li")
    menuLi.textContent = "MENU";
    menuLi.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.lastChild.remove();
        body.appendChild(createMenu());
    });
    ul.appendChild(menuLi);

    header.appendChild(ul)

    return header;
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
export default createHeader;