const tabSwitcher = function(){
    document.getElementById("home-item").addEventListener("click", loadHomepage);
    document.getElementById("menu-item").addEventListener("click", loadMenu);
    document.getElementById("contact-item").addEventListener("click", loadContact);
}

export { tabSwitcher }