import {createParagraph, createWrapper, createLogo, createButton, createImage, createCard} from './skeleton';

const renderContact = () => {
    const content = document.querySelector('.content');
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createParagraph('yo'['yo']));
}

export default renderContact;