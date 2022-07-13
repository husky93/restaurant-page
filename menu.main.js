"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/assets/drinks.jpg":
/*!*******************************!*\
  !*** ./src/assets/drinks.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "59abc6392f0ef947ed896e4cfd181275.jpg");

/***/ }),

/***/ "./src/assets/main.jpg":
/*!*****************************!*\
  !*** ./src/assets/main.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "470f3727ef7873600d6867e3607cf057.jpg");

/***/ }),

/***/ "./src/assets/side.jpg":
/*!*****************************!*\
  !*** ./src/assets/side.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d23366c009653ff85e4548864ecc93c9.jpg");

/***/ }),

/***/ "./src/assets/wine.jpg":
/*!*****************************!*\
  !*** ./src/assets/wine.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "02c1fe620a94ed6038c2abd7068a1073.jpg");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_drinks_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/drinks.jpg */ "./src/assets/drinks.jpg");
/* harmony import */ var _assets_main_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/main.jpg */ "./src/assets/main.jpg");
/* harmony import */ var _assets_side_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/side.jpg */ "./src/assets/side.jpg");
/* harmony import */ var _assets_wine_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/wine.jpg */ "./src/assets/wine.jpg");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skeleton */ "./src/modules/skeleton.js");







class Dish {
    constructor(name, desc, price){
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

class Category {
    constructor(name, dishes){
        this.name = name
        this.dishes = dishes
    }
}

const dishListSoups = [new Dish('Red Beetroot Soup', 'with dumplings or lithuanian dumplings ', '6.50$'),
new Dish('Red Beetroot Soup', 'solo cup', '3$'),
new Dish('Chicken Noodle Soup', 'chicken broth soup', '4.50$'),
new Dish('Tomato Soup', 'soup from fresh tomatoes', '5$')
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
new Dish('Rice With Steamed Vegetables', 'horseradish, grilled onion', '11$')
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
new Dish('Red Bull', '', '2.50$')
];
const dishListWhite = [new Dish('Sancerre, Domaine Daulny', 'France', '29$'),
new Dish('Kingklip Bay Sauvignon Blanc', 'Italy', '29$'),
new Dish('Pecorino Noi Cento', 'South Africa', '29$'),
new Dish('Plaimont Sauvignon Blanc', '', '29$'),
new Dish('Freedom Cross Chenin Blanc', '', '29$'),
new Dish('Amori Pinot Grigio', '', '29$'),
new Dish('Ladera Verde Chardonnay', '', '29$'),
new Dish('Sancerre, Domaine Daulny', '', '29$')
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
    const header = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(['tab-header']);
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    header.appendChild(h2);
    header.style.backgroundImage = `url(${bgImg})`;
    tab.classList.add('wrapper');
    tab.classList.add('menu-tab');
    tab.appendChild(header);

    categories.forEach(category => {
        const container = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(['tab-section']);
        const h3 = document.createElement('h3');
        h3.textContent = category.name;
        container.append(h3);
        category.dishes.forEach(dish => {
            const h4 = document.createElement('h4');
            const desc = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createParagraph)(dish.desc, ['menu--desc']);
            const price = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createParagraph)(dish.price, ['menu--price']);
            const cont = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(['menu-container']);
            const wrapper = (0,_skeleton__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(['menu-dish']);
            h4.textContent = dish.name;
            wrapper.append(h4, desc);
            cont.append(wrapper, price);
            container.appendChild(cont);
        })
        tab.append(container);  
    });
    return tab;
}

const renderMenu = () => {
    const content = document.querySelector('.content');
    const header = document.querySelector('header');
    if(!header.classList.contains('dark'))
        header.classList.add('dark');

    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    const tab = createMenuTab('Starters', _assets_side_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], [new Category('soups', dishListSoups), new Category('starters', dishListStarters)]);
    const tabTwo = createMenuTab('Main Courses', _assets_main_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], [new Category('favorites', dishListFavorites), new Category('pierogi', dishListPierogi), new Category('salads', dishListSalads)]);
    const tabThree = createMenuTab('Drinks', _assets_drinks_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], [new Category('drinks', dishListDrinks)]);
    const tabFour = createMenuTab('Wines', _assets_wine_jpg__WEBPACK_IMPORTED_MODULE_3__["default"], [new Category('white', dishListWhite), new Category('red', dishListRed)]);
    tab.style.marginTop = '164px';

    content.append(tab, tabTwo, tabThree, tabFour);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQ0o7QUFDQTtBQUNDOztBQUVtQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHdEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQWU7QUFDeEMsMEJBQTBCLDBEQUFlO0FBQ3pDLHlCQUF5Qix3REFBYTtBQUN0Qyw0QkFBNEIsd0RBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsd0RBQUk7QUFDOUMsaURBQWlELHdEQUFJO0FBQ3JELDZDQUE2QywwREFBTTtBQUNuRCwyQ0FBMkMsd0RBQUs7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9kcmlua3MuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWFpbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9zaWRlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3dpbmUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU5YWJjNjM5MmYwZWY5NDdlZDg5NmU0Y2ZkMTgxMjc1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzBmMzcyN2VmNzg3MzYwMGQ2ODY3ZTM2MDdjZjA1Ny5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDIzMzY2YzAwOTY1M2ZmODVlNDU0ODg2NGVjYzkzYzkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAyYzFmZTYyMGE5NGVkNjAzOGMyYWJkNzA2OGExMDczLmpwZ1wiOyIsImltcG9ydCBEcmlua3MgZnJvbSAnLi4vYXNzZXRzL2RyaW5rcy5qcGcnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vYXNzZXRzL21haW4uanBnJztcbmltcG9ydCBTaWRlIGZyb20gJy4uL2Fzc2V0cy9zaWRlLmpwZyc7XG5pbXBvcnQgV2luZXMgZnJvbSAnLi4vYXNzZXRzL3dpbmUuanBnJztcblxuaW1wb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZVdyYXBwZXJ9IGZyb20gJy4vc2tlbGV0b24nO1xuXG5jbGFzcyBEaXNoIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBwcmljZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG59XG5cbmNsYXNzIENhdGVnb3J5IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkaXNoZXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGlzaGVzID0gZGlzaGVzXG4gICAgfVxufVxuXG5jb25zdCBkaXNoTGlzdFNvdXBzID0gW25ldyBEaXNoKCdSZWQgQmVldHJvb3QgU291cCcsICd3aXRoIGR1bXBsaW5ncyBvciBsaXRodWFuaWFuIGR1bXBsaW5ncyAnLCAnNi41MCQnKSxcbm5ldyBEaXNoKCdSZWQgQmVldHJvb3QgU291cCcsICdzb2xvIGN1cCcsICczJCcpLFxubmV3IERpc2goJ0NoaWNrZW4gTm9vZGxlIFNvdXAnLCAnY2hpY2tlbiBicm90aCBzb3VwJywgJzQuNTAkJyksXG5uZXcgRGlzaCgnVG9tYXRvIFNvdXAnLCAnc291cCBmcm9tIGZyZXNoIHRvbWF0b2VzJywgJzUkJylcbl07XG5jb25zdCBkaXNoTGlzdFN0YXJ0ZXJzID0gW25ldyBEaXNoKCdIZXJyaW5nIEluIE9pbCBTb3VyIENyZWFtJywgJ2hlcnJpbmcgc2xlZHogdyBvbGl3aWUnLCAnOSQnKSxcbm5ldyBEaXNoKCdBcHBldGl6ZXJzIFBsYXRlJywgJ3NhbGFtaSwgcHJvc3N1dHRvLCBjYW1lbWJlcnQgY2hlZXNlLCBjaGVlc2UsIHBpY2tsZXMsIG9saXZlcywga2FiYW5vcycsICcxNSQnKSxcbm5ldyBEaXNoKCdTdGVhayBUYXJ0YXInLCAnVXQgZW5pbSBhZCBtaW5pbWEgdmVuaWFtLCBxdWlzIG5vc3RydW0gZXhlcmNpdGF0aW9uZW0nLCAnNC41MCQnKSxcbl07XG5jb25zdCBkaXNoTGlzdEZhdm9yaXRlcyA9IFtuZXcgRGlzaCgnT3VyIFNwZWNpYWwgRm9yIDIgUGVvcGxlJywgJzIgcGFuY2FrZXMsIGJlZWYgc3RldywgcG9saXNoIHNhdXNhZ2UsIGRldm9sYXksIHN0ZWFtZWQgdmVnZXRhYmxlcywgcG90YXRvIGR1bXBsaW5ncywgcGllcm9naSAmIHBsdW0gcm9sbGVkIGluIGJhY29uLicsICczNCQnKSxcbm5ldyBEaXNoKCdWZWdldGFyaWFuIFBsYXRlJywgJ2NhYmJhZ2Ugc3R1ZmZlZCB3aXRoIG11c2hyb29tcywgcGllcm9nZXMgd2l0aCBzcGluYWNoIGFuZCBwb3RhdG8gYW5kIGNoZWVzZSwgenVjY2hpbmkgcGFuY2FrZXMgd2l0aCBnb2F0IGNoZWVzZSwgcG90YXRvIGR1bXBsaW5ncywgYnJvY2NvbGknLCAnMTUkJyksXG5uZXcgRGlzaCgnRHVjayBCcmVhc3QgaW4gUGx1bSAmIFJlZCBXaW5lJywgJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtJywgJzIzJCcpLFxubmV3IERpc2goJ1N0dWZmZWQgQ2FiYmFnZSBXaXRoIE1lYXQgJiBSaWNlJywgJ3NlcnZlZCB3aXRoIG1hc2hlZCBwb3RhdG9lcycsICcxMiQnKSxcbm5ldyBEaXNoKCdWZWdldGVyaWFuIFN0dWZmZWQgQ2FiYmFnZScsICd3aXRoIG11c2hyb29tcyAmIHJpY2UsIG1hc2hlZCBwb3RhdG9lcycsICcyMyQnKSxcbm5ldyBEaXNoKCdHcmlsbGVkIFBvbGlzaCBTYXVzYWdlJywgJ2hvcnNlcmFkaXNoLCBncmlsbGVkIG9uaW9uJywgJzExJCcpLFxubmV3IERpc2goJ1JpY2UgV2l0aCBTdGVhbWVkIFZlZ2V0YWJsZXMnLCAnaG9yc2VyYWRpc2gsIGdyaWxsZWQgb25pb24nLCAnMTEkJylcbl07XG5jb25zdCBkaXNoTGlzdFBpZXJvZ2kgPSBbbmV3IERpc2goJ1BvdGF0byBBbmQgQ2hlZXNlJywgJ3J1c2tpZScsICcxMSQnKSxcbm5ldyBEaXNoKCdNZWF0JywgJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtJywgJzExJCcpLFxubmV3IERpc2goJ1NhdWVya3JhdXQgYW5kIE11c2hyb29tcycsICdVdCBlbmltIGFkIG1pbmltYSB2ZW5pYW0sIHF1aXMgbm9zdHJ1bSBleGVyY2l0YXRpb25lbScsICcxMSQnKSxcbl07XG5jb25zdCBkaXNoTGlzdFNhbGFkcyA9IFtuZXcgRGlzaCgnQ2Flc2FyIFNhbGFkJywgJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtJywgJzEzJCcpLFxubmV3IERpc2goJ0dyZWVrIFNhbGFkJywgJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtJywgJzE1JCcpLFxubmV3IERpc2goJ1N0YXJvcG9sc2thIFNhbGFkJywgJ1V0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtJywgJzExLjUwJCcpLFxuXTtcbmNvbnN0IGRpc2hMaXN0RHJpbmtzID0gW25ldyBEaXNoKCdDb2NvLWNvbGEnLCAnJywgJzIuNTAkJyksXG5uZXcgRGlzaCgnVGVhJywgJycsICcyLjUwJCcpLFxubmV3IERpc2goJ0FwcGxlIEp1aWNlJywgJycsICcyLjUwJCcpLFxubmV3IERpc2goJ09yYW5nZSBKdWljZScsICcnLCAnMi41MCQnKSxcbm5ldyBEaXNoKCdHcmFwZWZydWl0IEp1aWNlJywgJycsICcyLjUwJCcpLFxubmV3IERpc2goJ0NyYW5iZXJyeSBKdWljZScsICcnLCAnMi41MCQnKSxcbm5ldyBEaXNoKCdTcHJpdGUnLCAnJywgJzIuNTAkJyksXG5uZXcgRGlzaCgnUmVkIEJ1bGwnLCAnJywgJzIuNTAkJylcbl07XG5jb25zdCBkaXNoTGlzdFdoaXRlID0gW25ldyBEaXNoKCdTYW5jZXJyZSwgRG9tYWluZSBEYXVsbnknLCAnRnJhbmNlJywgJzI5JCcpLFxubmV3IERpc2goJ0tpbmdrbGlwIEJheSBTYXV2aWdub24gQmxhbmMnLCAnSXRhbHknLCAnMjkkJyksXG5uZXcgRGlzaCgnUGVjb3Jpbm8gTm9pIENlbnRvJywgJ1NvdXRoIEFmcmljYScsICcyOSQnKSxcbm5ldyBEaXNoKCdQbGFpbW9udCBTYXV2aWdub24gQmxhbmMnLCAnJywgJzI5JCcpLFxubmV3IERpc2goJ0ZyZWVkb20gQ3Jvc3MgQ2hlbmluIEJsYW5jJywgJycsICcyOSQnKSxcbm5ldyBEaXNoKCdBbW9yaSBQaW5vdCBHcmlnaW8nLCAnJywgJzI5JCcpLFxubmV3IERpc2goJ0xhZGVyYSBWZXJkZSBDaGFyZG9ubmF5JywgJycsICcyOSQnKSxcbm5ldyBEaXNoKCdTYW5jZXJyZSwgRG9tYWluZSBEYXVsbnknLCAnJywgJzI5JCcpXG5dO1xuY29uc3QgZGlzaExpc3RSZWQgPSBbbmV3IERpc2goJ0ZsZXVyaWUsIFByZXNpZGVudCBNYXJndWVyaXRlIENhdmUgZGUgRmxldXJpZScsICcnLCAnMjkkJyksXG5uZXcgRGlzaCgnU2FuY2VycmUsIERvbWFpbmUgRGF1bG55JywgJycsICcyOSQnKSxcbm5ldyBEaXNoKCdBbWFudGkgUHJpbWl0aXZvICcsICcnLCAnMjkkJyksXG5uZXcgRGlzaCgnUmlvamEgVmVnYSBUaW50bycsICcnLCAnMjkkJyksXG5uZXcgRGlzaCgnU21hcnQgRG9nIFN5cmFoL1NoaXJheicsICcnLCAnMjkkJyksXG5uZXcgRGlzaCgnTGF1dGFydWwgUGlub3QgTm9pcicsICcnLCAnMjkkJyksXG5uZXcgRGlzaCgnQ290ZXMgZHUgUmhvbmUgTGVzIENvdGVhdXggVmllbGxlcyBWaWduZXMnLCAnJywgJzI5JCcpLFxubmV3IERpc2goJ0xhZGVyYSBWZXJkZSBNZXJsb3QnLCAnJywgJzI5JCcpLFxuXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudVRhYihoZWFkaW5nLCBiZ0ltZywgY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVXcmFwcGVyKFsndGFiLWhlYWRlciddKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMik7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltZ30pYDtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYicpO1xuICAgIHRhYi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlV3JhcHBlcihbJ3RhYi1zZWN0aW9uJ10pO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChoMyk7XG4gICAgICAgIGNhdGVnb3J5LmRpc2hlcy5mb3JFYWNoKGRpc2ggPT4ge1xuICAgICAgICAgICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGNyZWF0ZVBhcmFncmFwaChkaXNoLmRlc2MsIFsnbWVudS0tZGVzYyddKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gY3JlYXRlUGFyYWdyYXBoKGRpc2gucHJpY2UsIFsnbWVudS0tcHJpY2UnXSk7XG4gICAgICAgICAgICBjb25zdCBjb250ID0gY3JlYXRlV3JhcHBlcihbJ21lbnUtY29udGFpbmVyJ10pO1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoWydtZW51LWRpc2gnXSk7XG4gICAgICAgICAgICBoNC50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kKGg0LCBkZXNjKTtcbiAgICAgICAgICAgIGNvbnQuYXBwZW5kKHdyYXBwZXIsIHByaWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFiLmFwcGVuZChjb250YWluZXIpOyAgXG4gICAgfSk7XG4gICAgcmV0dXJuIHRhYjtcbn1cblxuY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBpZighaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuXG4gICAgd2hpbGUgKGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFiID0gY3JlYXRlTWVudVRhYignU3RhcnRlcnMnLCBTaWRlLCBbbmV3IENhdGVnb3J5KCdzb3VwcycsIGRpc2hMaXN0U291cHMpLCBuZXcgQ2F0ZWdvcnkoJ3N0YXJ0ZXJzJywgZGlzaExpc3RTdGFydGVycyldKTtcbiAgICBjb25zdCB0YWJUd28gPSBjcmVhdGVNZW51VGFiKCdNYWluIENvdXJzZXMnLCBNYWluLCBbbmV3IENhdGVnb3J5KCdmYXZvcml0ZXMnLCBkaXNoTGlzdEZhdm9yaXRlcyksIG5ldyBDYXRlZ29yeSgncGllcm9naScsIGRpc2hMaXN0UGllcm9naSksIG5ldyBDYXRlZ29yeSgnc2FsYWRzJywgZGlzaExpc3RTYWxhZHMpXSk7XG4gICAgY29uc3QgdGFiVGhyZWUgPSBjcmVhdGVNZW51VGFiKCdEcmlua3MnLCBEcmlua3MsIFtuZXcgQ2F0ZWdvcnkoJ2RyaW5rcycsIGRpc2hMaXN0RHJpbmtzKV0pO1xuICAgIGNvbnN0IHRhYkZvdXIgPSBjcmVhdGVNZW51VGFiKCdXaW5lcycsIFdpbmVzLCBbbmV3IENhdGVnb3J5KCd3aGl0ZScsIGRpc2hMaXN0V2hpdGUpLCBuZXcgQ2F0ZWdvcnkoJ3JlZCcsIGRpc2hMaXN0UmVkKV0pO1xuICAgIHRhYi5zdHlsZS5tYXJnaW5Ub3AgPSAnMTY0cHgnO1xuXG4gICAgY29udGVudC5hcHBlbmQodGFiLCB0YWJUd28sIHRhYlRocmVlLCB0YWJGb3VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=