'use strict';

(() => {

  const cats = document.querySelectorAll('.categories *');
  let catName;

  const assignStyles = () => {
    for (let i = 0; i < cats.length; i++) {
      catName = cats[i].text.toLowerCase();
      cats[i].classList.add(`${catName}`);
      cats[i].setAttribute('name', 'icons');

      if (catName === 'blogs') {
        cats[i].classList.add(`icono-blogger`);
      } else if(catName === 'videos') {
        cats[i].classList.add(`icono-youtube`);
      } else if (catName === 'news'){
        cats[i].classList.add(`icono-meh`);
      }
    }
  };

  window.onload = () => {
    assignStyles();
  }

})()