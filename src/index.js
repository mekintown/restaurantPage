import './style.css';
import createHeader from './header';
import createHome from './home';


function createPage() {
    const body = document.querySelector("body");
    body.appendChild(createHeader());
    body.appendChild(createHome());
}

createPage();