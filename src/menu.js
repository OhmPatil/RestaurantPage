import { loadFooter } from "./footer";
import { loadHeader } from "./header";

const loadMenu = function(){
    console.log('menu loaded');

    let contentContainer = document.getElementById("content");
    contentContainer.replaceChildren();

    loadHeader();

    // Actual page content

    let menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    
    // End of actual page content

    contentContainer.appendChild(menuContainer);
    loadFooter ();
}

export { loadMenu }