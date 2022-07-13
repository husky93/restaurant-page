import './assets/reset.css';
import './assets/style.css';
import {loadPage} from './modules/skeleton';
import {renderHomepage, slider} from './modules/homepage';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

loadPage();
renderHomepage();

const links = document.querySelectorAll('.menu-item');
console.log(links);
links.forEach(link => link.addEventListener('click', switchPage));

function switchPage(e) {
    if(e.target.parentNode.classList.contains('active')){
        return 0;
    }
    links.forEach(link => {
        if(link.classList.contains('active')){
            link.classList.remove('active');
        }
    })
    e.target.parentNode.classList.add('active');

    if(e.target.parentNode.classList.contains('link--homepage'))
        renderHomepage();
    else if(e.target.parentNode.classList.contains('link--menu'))
        {
            renderMenu();
            slider.stopSlider();
        }
    else if(e.target.parentNode.classList.contains('link--contact'))
        {
            renderContact();
            slider.stopSlider();
        }
    
}

console.log('Hello!');