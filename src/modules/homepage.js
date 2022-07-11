import AboutImg from '../assets/about.jpg';
import {createParagraph, createWrapper, createLogo, createButton, createImage, createCard} from './skeleton';

function createHeroSection() {
    const hero = document.createElement('section');
    const logo = createLogo(['logo', 'logo--hero']);
    const heading = document.createElement('h1');
    const button = createButton('MENU', ['btn', 'btn--primary']);

    hero.classList.add('hero');
    heading.textContent = "Traditional Polish Cuisine";

    hero.append(logo, heading, button);

    return hero;
}

function createAboutSection() {
    const about = document.createElement('section');
    const heading = document.createElement('h2');
    const container = createWrapper(['row']);
    const left = createCard('Get to know us', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit')
    const right = createWrapper(['container']);
    const aboutImage = createImage(AboutImg, ['image']);

    about.classList.add('about');
    heading.textContent = "About us";

    right.appendChild(aboutImage);
    container.append(left, right);
    about.append(heading, container);

    return about;
}

const renderHomepage = () => {
    const content = document.querySelector('.content');
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createHeroSection(), createAboutSection());
}

export default renderHomepage;