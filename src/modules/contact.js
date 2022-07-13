import {createParagraph, createWrapper, createLogo, createButton, createImage, createCard} from './skeleton';
import HeroBg from '../assets/herobg.jpg';

function createContactSection() {
    const contact = document.createElement('section');
    const wrapper = createWrapper(['wrapper', 'wrapper--contact']);
    const heading = document.createElement('h1');

    heading.classList.add('heading--contact');
    heading.textContent = 'contact';
    contact.classList.add('contact');

    contact.style.backgroundImage = `url(${HeroBg})`;

    wrapper.append(heading);
    contact.appendChild(wrapper);
    return contact;
}

const renderContact = () => {
    const content = document.querySelector('.content');
    const header = document.querySelector('header');

    if(!header.classList.contains('dark'))
    header.classList.remove('dark');

    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createContactSection());
}

export default renderContact;