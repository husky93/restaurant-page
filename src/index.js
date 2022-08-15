import './assets/reset.css';
import './assets/style.css';
import { loadPage } from './modules/skeleton';
import { renderHomepage, slider } from './modules/homepage';

loadPage();
renderHomepage();
slider.createSlider();
slider.startSlider();
const links = document.querySelectorAll('.menu-item');
links.forEach((link) => link.addEventListener('click', switchPage));

function switchPage(e) {
  const header = document.querySelector('.header--wrapper');
  if (header.classList.contains('expanded')) {
    header.classList.remove('expanded');
  }
  if (e.target.parentNode.classList.contains('active')) {
    return 0;
  }
  links.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
  e.target.parentNode.classList.add('active');

  if (e.target.parentNode.classList.contains('link--homepage')) {
    renderHomepage();
    slider.startSlider();
  } else if (e.target.parentNode.classList.contains('link--menu')) {
    import(/* webpackChunkName: "menu" */ './modules/menu').then((module) => {
      const renderMenu = module.default;
      slider.stopSlider();
      renderMenu();
    });
  } else if (e.target.parentNode.classList.contains('link--contact')) {
    import(/* webpackChunkName: "contact" */ './modules/contact').then(
      (module) => {
        const renderContact = module.default;
        slider.stopSlider();
        renderContact();
      }
    );
  }
}
