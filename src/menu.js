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

    let menuItem1 = createMenuItem('Burger', 'Tomato, lettuce, cheese, olives', 'burger.jpg');
    let menuItem2 = createMenuItem('Pizza', 'Tomato, cheese, pepperoni, olives', 'pasta.jpg');
    let menuItem3 = createMenuItem('Pasta', 'Tomato, cheese, meatballs, olives', 'pasta.jpg');
    let menuItem4 = createMenuItem('Fries', 'Tomato, cheese, meatballs, olives', 'fries.jpg');
    let menuItem5 = createMenuItem('Pizza', 'Tomato, cheese, pepperoni, olives', 'pasta.jpg');
    let menuItem6 = createMenuItem('Pizza', 'Tomato, cheese, pepperoni, olives', 'pasta.jpg');

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);
    menuContainer.appendChild(menuItem5);
    menuContainer.appendChild(menuItem6);
    // End of actual page content

    contentContainer.appendChild(menuContainer);
    loadFooter ();
}

function createMenuItem(title, desc, img){
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    let menuItem_img = document.createElement('img');
    menuItem_img.classList.add('menu-item-img');
    menuItem_img.src = `./images/${img}`;
    let menuItem_title = document.createElement('h3');
    menuItem_title.classList.add('menu-item-title');
    menuItem_title.textContent = title;
    let menuItem_desc = document.createElement('p');
    menuItem_desc.classList.add('menu-item-desc');
    menuItem_desc.textContent = desc;

    menuItem.appendChild(menuItem_img);
    menuItem.appendChild(menuItem_title);
    menuItem.appendChild(menuItem_desc);

    return menuItem;
}

export { loadMenu }