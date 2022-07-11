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

const loadPage = () => {
    const content = document.querySelector('.content');

    content.appendChild(createHeader());
}

export default loadPage;