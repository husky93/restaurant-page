import Logo from '../assets/logo.png';

const createParagraph = (text, [...classList]) => {
  const para = document.createElement('p');
  para.textContent = text;
  classList.forEach((elem) => para.classList.add(elem));
  return para;
};

const createWrapper = ([...classList]) => {
  const wrapper = document.createElement('div');
  classList.forEach((elem) => wrapper.classList.add(elem));
  return wrapper;
};

const createButton = (text, [...classList]) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  classList.forEach((elem) => btn.classList.add(elem));
  return btn;
};

const createLogo = ([...classList]) => {
  const logo = new Image();
  logo.src = Logo;
  classList.forEach((elem) => logo.classList.add(elem));
  return logo;
};

const lazyLoadImage = (imageName, img) => {
  const image = img;
  import(`../assets/${imageName}.jpg`)
    .then((src) => {
      image.src = src.default;
    })
    .catch((err) => console.error(err));
};

const createImage = (imageName, [...classList]) => {
  const img = new Image();
  classList.forEach((elem) => img.classList.add(elem));
  lazyLoadImage(imageName, img);
  return img;
};

function createNavLink(text, [...classes]) {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  navLink.classList.add('menu-link');

  classes.forEach((elem) => navItem.classList.add(elem));

  navLink.textContent = text;

  navItem.appendChild(navLink);
  return navItem;
}

function createNav() {
  const navBar = document.createElement('nav');
  const list = document.createElement('ul');
  navBar.classList.add('menu');

  list.append(
    createNavLink('Home', ['menu-item', 'active', 'link--homepage']),
    createNavLink('Menu', ['menu-item', 'link--menu']),
    createNavLink('Contact', ['menu-item', 'link--contact'])
  );

  navBar.appendChild(list);
  return navBar;
}

function createHeader() {
  const header = document.createElement('header');
  const logo = createLogo(['logo', 'logo--header']);
  const wrapper = createWrapper(['wrapper', 'header--wrapper']);
  const hamburger = document.createElement('a');
  const menuIcon = document.createElement('span');

  hamburger.addEventListener('click', () => {
    wrapper.classList.toggle('expanded');
  });

  menuIcon.classList.add('material-symbols-outlined');
  menuIcon.classList.add('hamburger-icon');
  menuIcon.textContent = 'menu';
  hamburger.classList.add('hamburger');
  hamburger.appendChild(menuIcon);

  wrapper.append(logo, createNav());

  header.append(wrapper, hamburger);
  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerContainer = createWrapper(['wrapper']);
  const containerOne = createWrapper(['container']);
  const containerTwo = createWrapper(['container']);
  const containerThree = createWrapper(['container']);
  const containerFour = createWrapper(['container']);
  const logoFooter = createLogo(['logo', 'logo-footer']);

  containerOne.appendChild(logoFooter);

  containerTwo.append(
    createParagraph('Nature restaurant', ['text-footer']),
    createParagraph('371 7th Ave, New York, NY 10001', ['text-footer']),
    createParagraph('United States of America', ['text-footer'])
  );

  containerThree.append(
    createParagraph('Open:', ['text-footer']),
    createParagraph('Monday till Sunday', ['text-footer']),
    createParagraph('10:00am - 10:00pm', ['text-footer'])
  );

  containerFour.append(
    createParagraph('Phone: 5567748843332', ['bold', 'text-footer']),
    createParagraph('Email:', ['text-footer']),
    createParagraph('example@gmail.com', ['bold', 'text-footer'])
  );

  footerContainer.append(
    containerOne,
    containerTwo,
    containerThree,
    containerFour
  );
  footer.appendChild(footerContainer);

  return footer;
}

const createCard = (heading, text) => {
  const card = createWrapper(['card']);
  const cardHeading = document.createElement('h3');
  const cardPara = createParagraph(text, ['card_content']);

  cardHeading.textContent = heading;
  cardHeading.classList.add('card_heading');

  card.append(cardHeading, cardPara);

  return card;
};

const loadPage = () => {
  const body = document.querySelector('body');
  const content = document.querySelector('.content');
  const header = createHeader();
  body.insertBefore(header, content);
  body.appendChild(createFooter());

  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    if (doc.scrollTop === 0) {
      header.classList.remove('scrolled');
    } else if (doc.scrollTop > 0 && !header.classList.contains('scrolled')) {
      header.classList.add('scrolled');
    }
  });
};

export {
  loadPage,
  createParagraph,
  createWrapper,
  createLogo,
  createButton,
  createImage,
  createCard,
  lazyLoadImage,
};
