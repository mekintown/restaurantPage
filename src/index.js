import './style.css';
import createHeader from './header';
import createHome from './home';
import createMenu from './menu';


function createPage() {
    const body = document.querySelector("body");
    body.appendChild(createHeader());
    body.appendChild(createHome());
}

createPage();