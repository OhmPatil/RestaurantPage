const loadFooter = function(){
    let contentContainer = document.getElementById("content");

    let footer = document.createElement("footer");
    footer.id = "footer";

    let footer_text = document.createElement("p");
    footer_text.id = "footer-text";
    footer_text.textContent = "Copyright Ohm Patil © 2022";
    footer.appendChild(footer_text);


    contentContainer.appendChild(footer)

}

export { loadFooter }