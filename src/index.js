import { initialPageLoad } from "./initial-page-load";
import { homepage } from "./home";

initialPageLoad();
// homepage();

document.getElementById('home-item').addEventListener('click', homepage);