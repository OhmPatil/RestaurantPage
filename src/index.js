import { initialPageLoad } from "./initial-page-load";
import { loadHomepage } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

initialPageLoad();
loadHomepage();

const tabSwitcher = function(){
    document.getElementById("home-item").addEventListener("click", function(){
        loadHomepage();
        tabSwitcher();
    });
    document.getElementById("menu-item").addEventListener("click", function(){
        loadMenu();
        tabSwitcher();
    });
    document.getElementById("contact-item").addEventListener("click", function(){
        loadContact();
        tabSwitcher();
    });
};

tabSwitcher();

