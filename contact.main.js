"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ "./src/modules/skeleton.js");
/* harmony import */ var _assets_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/herobg.jpg */ "./src/assets/herobg.jpg");



function createContactSection() {
    const contact = document.createElement('section');
    const wrapper = (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(['wrapper']);
    const heading = document.createElement('h1');

    heading.classList.add('heading--contact');
    heading.textContent = 'contact';
    contact.classList.add('contact');

    contact.style.backgroundImage = `url(${_assets_herobg_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]})`;

    wrapper.append(heading);
    contact.appendChild(wrapper);
    return contact;
}

function createContactContent() {
    const content = document.createElement('section');
    const wrapper = (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(['wrapper', 'wrapper--contact']);
    const cardOne = (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__.createCard)('Address', '371 7th Ave, New York, NY 10001, United States of America');
    const cardTwo = (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__.createCard)('Phone', '5567748843332');
    const cardThree = (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__.createCard)('Email', 'example@gmail.com');

    wrapper.append(cardOne, cardTwo, cardThree);
    content.appendChild(wrapper);
    return content;
}

const renderContact = () => {
    const content = document.querySelector('.content');
    const header = document.querySelector('header');

    if(header.classList.contains('dark'))
        header.classList.remove('dark');

    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }

    content.append(createContactSection(), createContactContent());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNYOztBQUUxQztBQUNBO0FBQ0Esb0JBQW9CLHdEQUFhO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsMERBQU0sQ0FBQzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix3REFBYTtBQUNqQyxvQkFBb0IscURBQVU7QUFDOUIsb0JBQW9CLHFEQUFVO0FBQzlCLHNCQUFzQixxREFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVXcmFwcGVyLCBjcmVhdGVDYXJkfSBmcm9tICcuL3NrZWxldG9uJztcbmltcG9ydCBIZXJvQmcgZnJvbSAnLi4vYXNzZXRzL2hlcm9iZy5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKFsnd3JhcHBlciddKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy0tY29udGFjdCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb250YWN0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtIZXJvQmd9KWA7XG5cbiAgICB3cmFwcGVyLmFwcGVuZChoZWFkaW5nKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKFsnd3JhcHBlcicsICd3cmFwcGVyLS1jb250YWN0J10pO1xuICAgIGNvbnN0IGNhcmRPbmUgPSBjcmVhdGVDYXJkKCdBZGRyZXNzJywgJzM3MSA3dGggQXZlLCBOZXcgWW9yaywgTlkgMTAwMDEsIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpO1xuICAgIGNvbnN0IGNhcmRUd28gPSBjcmVhdGVDYXJkKCdQaG9uZScsICc1NTY3NzQ4ODQzMzMyJyk7XG4gICAgY29uc3QgY2FyZFRocmVlID0gY3JlYXRlQ2FyZCgnRW1haWwnLCAnZXhhbXBsZUBnbWFpbC5jb20nKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kKGNhcmRPbmUsIGNhcmRUd28sIGNhcmRUaHJlZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICAgIGlmKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSlcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcblxuICAgIHdoaWxlIChjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCksIGNyZWF0ZUNvbnRhY3RDb250ZW50KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==