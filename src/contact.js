import { loadFooter } from "./footer";
import { loadHeader } from "./header";

const loadContact = function(){
    console.log('contact loaded');

    let contentContainer = document.getElementById("content");
    contentContainer.replaceChildren();

    loadHeader();

    // Actual page content
    let contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    let contact_text = document.createElement('h1');
    contact_text.id = 'contact-text';
    contact_text.textContent = 'Contact Us';

    let contact_subtext = document.createElement('h2');
    contact_subtext.id = 'contact-subtext';
    contact_subtext.textContent = 'Feel free to contact us!';

    let contact_phone = document.createElement('p');
    contact_phone.id = 'contact-phoneaddress';
    contact_phone.textContent = '📞: +1-555-555-5555';

    let contact_address = document.createElement('p');
    contact_address.id = 'contact-phoneaddress';
    contact_address.textContent = '🏠: 123 Main St, New York, NY 10001';

    let contact_form = document.createElement('form');
    contact_form.id = 'contact-form';

    let contact_form_name = document.createElement('input');
    contact_form_name.id = 'contact-form-name';
    contact_form_name.type = 'text';
    contact_form_name.placeholder = 'Name';

    let contact_form_email = document.createElement('input');
    contact_form_email.id = 'contact-form-email';
    contact_form_email.type = 'email';
    contact_form_email.placeholder = 'Email';

    let contact_form_message = document.createElement('textarea');
    contact_form_message.id = 'contact-form-message';
    contact_form_message.placeholder = 'Message';

    let contact_form_submit = document.createElement('input');
    contact_form_submit.id = 'contact-form-submit';
    contact_form_submit.type = 'submit';
    contact_form_submit.value = 'Submit';

    contact_form.appendChild(contact_form_name);
    contact_form.appendChild(contact_form_email);
    contact_form.appendChild(contact_form_message);
    contact_form.appendChild(contact_form_submit);

    contactContainer.appendChild(contact_text);
    contactContainer.appendChild(contact_subtext);
    contactContainer.appendChild(contact_phone);
    contactContainer.appendChild(contact_address);
    contactContainer.appendChild(contact_form);
    // End of actual page content

    contentContainer.appendChild(contactContainer);
    loadFooter();
}

export { loadContact }