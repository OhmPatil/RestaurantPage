const loadHeader = function(){
    let contentContainer = document.getElementById("content");

    let header = document.createElement("header");
    header.id = "header";

    let title = document.createElement("h1");
    title.id = "title";
    title.textContent = 'Lettuce Eat';

    let nav = document.createElement("nav");
    nav.id = "nav";
    let navList = document.createElement("ul");
    navList.id = "nav-list";
    let navListItem = document.createElement("li");
    navListItem.classList.add("nav-list-item");
    navListItem.id = "home-item";
    navListItem.textContent = "Home";
    let navListItem2 = document.createElement("li");
    navListItem2.classList.add('nav-list-item');
    navListItem2.id = "menu-item";
    navListItem2.textContent = "Menu";
    let navListItem3 = document.createElement("li");
    navListItem3.classList.add('nav-list-item');
    navListItem3.id = "contact-item";
    navListItem3.textContent = "Contact";
    navList.appendChild(navListItem);
    navList.appendChild(navListItem2);
    navList.appendChild(navListItem3);
    nav.appendChild(navList);

    header.appendChild(title);
    header.appendChild(nav);
    contentContainer.appendChild(header);
}

export {loadHeader}