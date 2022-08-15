import MenuBg from '../assets/menu-bg.jpg';
import {
  createParagraph,
  createWrapper,
  createLogo,
  createButton,
  createImage,
  createCard,
} from './skeleton';

const HeroBg = import(/* webpackPreload: true */ '../assets/herobg.jpg');
const HeroBgTwo = import(/* webpackPreload: true */ '../assets/herobgtwo.jpg');
const HeroBgThree = import(
  /* webpackPreload: true */ '../assets/herobgthree.jpg'
);

const slider = (() => {
  const slides = [HeroBg, HeroBgTwo, HeroBgThree];
  const sliderContainer = document.createElement('div');
  let autoplayInterval = null;
  let slideIndex = 0;

  const animateSlide = (container) => {
    const i = Math.floor(Math.random() * 2 + 1);
    if (i === 1) {
      container.classList.add('fadein');
    } else {
      container.classList.add('fadeout');
    }
  };

  const createSlider = () => {
    sliderContainer.classList.add('slider');
    const slideNodes = [];
    slides.forEach(() => {
      const slide = document.createElement('div');
      animateSlide(slide);
      slide.classList.add('hero_slide');
      sliderContainer.appendChild(slide);
      slideNodes.push(slide);
    });
    Promise.all(slides).then((images) => {
      const image = new Image();
      images.forEach((img, index) => {
        image.src = img.default;
        const slide = slideNodes[index];
        slide.style.backgroundImage = `url(${img.default})`;
      });
    });
  };

  const appendSlider = (parent) => {
    parent.insertBefore(sliderContainer, parent.firstChild);
  };

  const stopSlider = () => {
    clearInterval(autoplayInterval);
  };

  const playSlide = () => {
    let i;
    const slidesArray = Array.from(document.querySelectorAll('.hero_slide'));
    for (i = 0; i < slidesArray.length; i += 1) {
      slidesArray[i].style.display = 'none';
    }
    slideIndex += 1;
    if (slideIndex > slidesArray.length) slideIndex = 1;
    slidesArray[slideIndex - 1].style.display = 'block';
  };

  const startSlider = () => {
    playSlide();
    autoplayInterval = setInterval(playSlide, 3500);
  };

  return {
    createSlider,
    appendSlider,
    startSlider,
    stopSlider,
  };
})();

function createHeroSection() {
  const hero = document.createElement('section');
  const logo = createLogo(['logo', 'logo--hero']);
  const heading = document.createElement('h1');
  const button = createButton('MENU', ['btn', 'btn--primary']);

  slider.appendSlider(hero);

  hero.classList.add('hero');
  heading.textContent = 'Traditional Polish Cuisine';

  hero.append(logo, heading, button);

  return hero;
}

function createAboutSection() {
  const about = document.createElement('section');
  const heading = document.createElement('h2');
  const container = createWrapper(['row']);
  const left = createCard(
    'Get to know us',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
      'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' +
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
  );
  const right = createWrapper(['container']);
  const aboutImage = createImage('about', ['image']);

  about.classList.add('about');
  about.classList.add('wrapper');
  heading.textContent = 'About us';

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

  menu.style.backgroundImage = `url(${MenuBg})`;
  menu.classList.add('menu-section');
  icon.classList.add('material-symbols-outlined');
  icon.textContent = 'restaurant';
  heading.textContent = 'Menu';

  menu.append(icon, heading, button);

  return menu;
}

function createInfoSection() {
  const info = document.createElement('section');
  const heading = document.createElement('h2');
  const para = createParagraph(
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    ['text--info']
  );

  const rowOne = createWrapper(['row']);
  const rowTwo = createWrapper(['row']);
  const rowThree = createWrapper(['row']);
  const rowFour = createWrapper(['row']);
  info.classList.add('wrapper');
  info.classList.add('info');
  heading.textContent = 'Climatic restaurant - New York';

  rowOne.append(
    createCard(
      'Elegance',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,' +
        'nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,' +
        'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    ),
    createImage('infoone', ['image', 'image--info'])
  );

  rowTwo.append(
    createImage('infotwo', ['image', 'image--info']),
    createCard(
      'Nature',
      'At vero eos et accusamus et iusto odio dignissimos' +
        'ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate' +
        'non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    )
  );

  rowThree.append(
    createCard(
      'Space outside',
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis' +
        'est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est'
    ),
    createImage('infofour', ['image', 'image--info'])
  );

  rowFour.append(
    createImage('infothree', ['image', 'image--info']),
    createCard(
      "You're Invited!",
      'Itaque earum rerum hic tenetur a sapiente delectus, ' +
        'ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    )
  );

  info.append(heading, para, rowOne, rowTwo, rowThree, rowFour);

  return info;
}

const renderHomepage = () => {
  const content = document.querySelector('.content');
  const header = document.querySelector('header');
  if (header.classList.contains('dark')) {
    header.classList.remove('dark');
  }

  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }

  // eslint-disable-next-line max-len
  content.append(
    createHeroSection(),
    createAboutSection(),
    createMenuSection(),
    createInfoSection()
  );
};

export { renderHomepage, slider };
