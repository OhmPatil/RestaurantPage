import { initialPageLoad } from "./initial-page-load";
import { loadHomepage } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

initialPageLoad();
// loadHomepage();
// loadMenu();
loadContact();

document.getElementById("home-item").addEventListener("click", loadHomepage);
document.getElementById("menu-item").addEventListener("click", loadMenu);
document.getElementById("contact-item").addEventListener("click", loadContact);
