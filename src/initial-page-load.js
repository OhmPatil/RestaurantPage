import { loadFooter } from "./footer";
import { loadHeader } from "./header";

const initialPageLoad = function(){
    console.log('initial page load');
    document.getElementById('content').replaceChildren();
    loadHeader();
    loadFooter();
}

export {
    initialPageLoad
}