import Dish from './dish';
import Drinks from '../assets/drinks.jpg';
import Main from '../assets/main.jpg';
import Side from '../assets/side.jpg';
import Wines from '../assets/wine.jpg';

import { createParagraph, createWrapper } from './skeleton';

class Category {
  constructor(name, dishes) {
    this.name = name;
    this.dishes = dishes;
  }
}

const dishListSoups = [new Dish('Red Beetroot Soup', 'with dumplings or lithuanian dumplings ', '6.50$'),
  new Dish('Red Beetroot Soup', 'solo cup', '3$'),
  new Dish('Chicken Noodle Soup', 'chicken broth soup', '4.50$'),
  new Dish('Tomato Soup', 'soup from fresh tomatoes', '5$'),
];
const dishListStarters = [new Dish('Herring In Oil Sour Cream', 'herring sledz w oliwie', '9$'),
  new Dish('Appetizers Plate', 'salami, prossutto, camembert cheese, cheese, pickles, olives, kabanos', '15$'),
  new Dish('Steak Tartar', 'Ut enim ad minima veniam, quis nostrum exercitationem', '4.50$'),
];
const dishListFavorites = [new Dish('Our Special For 2 People', '2 pancakes, beef stew, polish sausage, devolay, steamed vegetables, potato dumplings, pierogi & plum rolled in bacon.', '34$'),
  new Dish('Vegetarian Plate', 'cabbage stuffed with mushrooms, pieroges with spinach and potato and cheese, zucchini pancakes with goat cheese, potato dumplings, broccoli', '15$'),
  new Dish('Duck Breast in Plum & Red Wine', 'Ut enim ad minima veniam, quis nostrum exercitationem', '23$'),
  new Dish('Stuffed Cabbage With Meat & Rice', 'served with mashed potatoes', '12$'),
  new Dish('Vegeterian Stuffed Cabbage', 'with mushrooms & rice, mashed potatoes', '23$'),
  new Dish('Grilled Polish Sausage', 'horseradish, grilled onion', '11$'),
  new Dish('Rice With Steamed Vegetables', 'horseradish, grilled onion', '11$'),
];
const dishListPierogi = [new Dish('Potato And Cheese', 'ruskie', '11$'),
  new Dish('Meat', 'Ut enim ad minima veniam, quis nostrum exercitationem', '11$'),
  new Dish('Sauerkraut and Mushrooms', 'Ut enim ad minima veniam, quis nostrum exercitationem', '11$'),
];
const dishListSalads = [new Dish('Caesar Salad', 'Ut enim ad minima veniam, quis nostrum exercitationem', '13$'),
  new Dish('Greek Salad', 'Ut enim ad minima veniam, quis nostrum exercitationem', '15$'),
  new Dish('Staropolska Salad', 'Ut enim ad minima veniam, quis nostrum exercitationem', '11.50$'),
];
const dishListDrinks = [new Dish('Coco-cola', '', '2.50$'),
  new Dish('Tea', '', '2.50$'),
  new Dish('Apple Juice', '', '2.50$'),
  new Dish('Orange Juice', '', '2.50$'),
  new Dish('Grapefruit Juice', '', '2.50$'),
  new Dish('Cranberry Juice', '', '2.50$'),
  new Dish('Sprite', '', '2.50$'),
  new Dish('Red Bull', '', '2.50$'),
];
const dishListWhite = [new Dish('Sancerre, Domaine Daulny', 'France', '29$'),
  new Dish('Kingklip Bay Sauvignon Blanc', 'Italy', '29$'),
  new Dish('Pecorino Noi Cento', 'South Africa', '29$'),
  new Dish('Plaimont Sauvignon Blanc', '', '29$'),
  new Dish('Freedom Cross Chenin Blanc', '', '29$'),
  new Dish('Amori Pinot Grigio', '', '29$'),
  new Dish('Ladera Verde Chardonnay', '', '29$'),
  new Dish('Sancerre, Domaine Daulny', '', '29$'),
];
const dishListRed = [new Dish('Fleurie, President Marguerite Cave de Fleurie', '', '29$'),
  new Dish('Sancerre, Domaine Daulny', '', '29$'),
  new Dish('Amanti Primitivo ', '', '29$'),
  new Dish('Rioja Vega Tinto', '', '29$'),
  new Dish('Smart Dog Syrah/Shiraz', '', '29$'),
  new Dish('Lautarul Pinot Noir', '', '29$'),
  new Dish('Cotes du Rhone Les Coteaux Vielles Vignes', '', '29$'),
  new Dish('Ladera Verde Merlot', '', '29$'),
];

function createMenuTab(heading, bgImg, categories) {
  const tab = document.createElement('section');
  const header = createWrapper(['tab-header']);
  const h2 = document.createElement('h2');
  h2.textContent = heading;
  header.appendChild(h2);
  header.style.backgroundImage = `url(${bgImg})`;
  tab.classList.add('wrapper');
  tab.classList.add('menu-tab');
  tab.appendChild(header);

  categories.forEach((category) => {
    const container = createWrapper(['tab-section']);
    const h3 = document.createElement('h3');
    h3.textContent = category.name;
    container.append(h3);
    category.dishes.forEach((dish) => {
      const h4 = document.createElement('h4');
      const desc = createParagraph(dish.desc, ['menu--desc']);
      const price = createParagraph(dish.price, ['menu--price']);
      const cont = createWrapper(['menu-container']);
      const wrapper = createWrapper(['menu-dish']);
      h4.textContent = dish.name;
      wrapper.append(h4, desc);
      cont.append(wrapper, price);
      container.appendChild(cont);
    });
    tab.append(container);
  });
  return tab;
}

const renderMenu = () => {
  const content = document.querySelector('.content');
  const header = document.querySelector('header');
  if (!header.classList.contains('dark')) { header.classList.add('dark'); }

  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }

  const tab = createMenuTab('Starters', Side, [new Category('soups', dishListSoups), new Category('starters', dishListStarters)]);
  const tabTwo = createMenuTab('Main Courses', Main, [new Category('favorites', dishListFavorites), new Category('pierogi', dishListPierogi), new Category('salads', dishListSalads)]);
  const tabThree = createMenuTab('Drinks', Drinks, [new Category('drinks', dishListDrinks)]);
  const tabFour = createMenuTab('Wines', Wines, [new Category('white', dishListWhite), new Category('red', dishListRed)]);
  tab.style.marginTop = '164px';

  content.append(tab, tabTwo, tabThree, tabFour);
};

export default renderMenu;
