import { loadFooter } from "./footer";
import { loadHeader } from "./header";

const homepage = function(){
    console.log('home loaded');

    let contentContainer = document.getElementById("content");
    contentContainer.replaceChildren();

    loadHeader();

    let mainContainer = document.createElement('div') 
    mainContainer.id = 'main-container'

    mainContainer.replaceChildren();

    let home_text = document.createElement('h1')
    home_text.id = 'home-text'
    home_text.textContent = 'Come eat the best lettuce in your country! Tasty and Affordable!'

    let home_img = document.createElement('div')
    home_img.id = 'home-img'

    let home_subtext = document.createElement('h2')
    home_subtext.id = 'home-subtext'
    home_subtext.textContent = 'Order online or visit us!'

    mainContainer.appendChild(home_text)
    mainContainer.appendChild(home_img)
    mainContainer.appendChild(home_subtext)
    contentContainer.appendChild(mainContainer)

    
    loadFooter()
}

export { homepage }