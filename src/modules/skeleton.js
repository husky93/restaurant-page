import Logo from '../assets/logo.png';

function createHeader() {
    const header = document.createElement('header');
    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');

    header.appendChild(logo);
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const navBar = document.createElement('nav');
    const list = document.createElement('ul')
    navBar.classList.add('menu');
    
    list.appendChild(createNavLink('Home', '#'));
    list.appendChild(createNavLink('Menu', '#'));
    list.appendChild(createNavLink('Contact', '#'));

    navBar.appendChild(list);
    return navBar;

    function createNavLink(text, link) {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');

        navItem.classList.add('menu-item');
        navLink.classList.add('menu-link');
        
        navLink.textContent = text;
        navLink.setAttribute('href', link);

        navItem.appendChild(navLink);
        return navItem;
    }
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.appendChild(createParagraph('text', ['para','para-small']));
    return footer;
}

const createParagraph = (text, [...classList]) => {
    const para = document.createElement('p');
    para.textContent = text;
    classList.forEach(elem => para.classList.add(elem));
    return para
}

const createWrapper = ([...classList]) => {
    const wrapper = document.createElement('div');
    wrapper.textContent = text;
    classList.forEach(elem => wrapper.classList.add(elem));
    return wrapper
}

const loadPage = () => {
    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    body.insertBefore(createHeader(), content);
    body.appendChild(createFooter());
}

export {loadPage, createParagraph};