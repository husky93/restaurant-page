import AboutImg from '../assets/about.jpg';
import InfoOne from '../assets/infoone.jpg';
import InfoTwo from '../assets/infotwo.jpg';
import InfoThree from '../assets/infothree.jpg';
import InfoFour from '../assets/infofour.jpg';
import HeroBg from '../assets/herobg.jpg';

import {createParagraph, createWrapper, createLogo, createButton, createImage, createCard} from './skeleton';

function createHeroSection() {
    const hero = document.createElement('section');
    const logo = createLogo(['logo', 'logo--hero']);
    const heading = document.createElement('h1');
    const button = createButton('MENU', ['btn', 'btn--primary']);

    hero.classList.add('hero');
    hero.style.backgroundImage = `url(${HeroBg})`;
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
    about.classList.add('wrapper');
    heading.textContent = "About us";

    right.appendChild(aboutImage);
    container.append(left, right);
    about.append(heading, container);

    return about;
}

function createMenuSection() {
    const menu = document.createElement('section');
    const icon = document.createElement('span');
    const heading = document.createElement('h2');
    const button = createButton('Open menu', ['btn', 'btn--secondary']);

    menu.classList.add('menu-section');
    menu.classList.add('wrapper');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'restaurant';
    heading.textContent = 'Menu';

    menu.append(icon, heading, button);

    return menu;
}

function createInfoSection() {
    const info = document.createElement('section');
    const heading = document.createElement('h2');
    const para = createParagraph('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',['text--info']);

    const rowOne = createWrapper(['row']);
    const rowTwo = createWrapper(['row']);
    const rowThree = createWrapper(['row']);
    const rowFour = createWrapper(['row']);
    info.classList.add('wrapper');
    info.classList.add('info');
    heading.textContent = 'Climatic restaurant - New York';

    rowOne.append(createCard('Elegance', 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,\
    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,\
    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'),
    createImage(InfoOne, ['image', 'image--info']));

    rowTwo.append(createImage(InfoTwo, ['image', 'image--info']), createCard('Nature', 'At vero eos et accusamus et iusto odio dignissimos \
    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate \
    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'));

    rowThree.append(createCard('Space outside', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis \
    est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est'), createImage(InfoFour, ['image', 'image--info']));

    rowFour.append(createImage(InfoThree, ['image', 'image--info']), createCard('You\'re Invited!', 'Itaque earum rerum hic tenetur a sapiente delectus, \
    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'));

    info.append(heading, para, rowOne, rowTwo, rowThree, rowFour);

    return info;
}

const renderHomepage = () => {
    const content = document.querySelector('.content');
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createHeroSection(), createAboutSection(), createMenuSection(), createInfoSection());
}

export default renderHomepage;