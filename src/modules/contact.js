import {createWrapper, createCard} from './skeleton';
import HeroBg from '../assets/herobg.jpg';

function createContactSection() {
    const contact = document.createElement('section');
    const wrapper = createWrapper(['wrapper']);
    const heading = document.createElement('h1');

    heading.classList.add('heading--contact');
    heading.textContent = 'contact';
    contact.classList.add('contact');

    contact.style.backgroundImage = `url(${HeroBg})`;

    wrapper.append(heading);
    contact.appendChild(wrapper);
    return contact;
}

function createContactContent() {
    const content = document.createElement('section');
    const wrapper = createWrapper(['wrapper', 'wrapper--contact']);
    const cardOne = createCard('Address', '371 7th Ave, New York, NY 10001, United States of America');
    const cardTwo = createCard('Phone', '5567748843332');
    const cardThree = createCard('Email', 'example@gmail.com');

    wrapper.append(cardOne, cardTwo, cardThree);
    content.appendChild(wrapper);
    return content;
}

const renderContact = () => {
    const content = document.querySelector('.content');
    const header = document.querySelector('header');

    if(header.classList.contains('dark'))
        header.classList.remove('dark');

    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createContactSection(), createContactContent());
}

export default renderContact;