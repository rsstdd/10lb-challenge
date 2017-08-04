'use strict';

(() => {

  function outerHeight(el, includeMargin){
    let height = el.offsetHeight;

    if (includeMargin) {
      let style = el.currentStyle || getComputedStyle(el);
      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    } 
    
    return height;
  }
  
  function forEachElement(selector, fn) {
    let elements = document.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {
      fn(elements[i], i);
    }
  }

  const equalheight = (container) => {
    let currentTallest = 0;
    let currentRowStart = 0;
    let rowDivs =[];
    let el;
    let topPosition = 0;

    forEachElement(container, (el, i) => {
      el.style.height = 'auto';
      topPosition = el.offsetTop;

      if (currentRowStart != topPosition) {
        console.log(currentRowStart != topPosition);
        rowDivs.map((div) => {
          div.style.height = currentTallest + 'px';
        });
      
        rowDivs.length = 0;
        currentRowStart = topPosition;
        currentTallest = outerHeight(el, true);
        rowDivs.push(el);
      } else {
        rowDivs.push(el);
        currentTallest = (currentTallest < outerHeight(el, false)) ? (outerHeight(el, false)) : (currentTallest);     
      }
      console.log(rowDivs);

      rowDivs.map((div) => {
        div.style.height = currentTallest + 'px';
        console.log('Div: ', div);
        console.log('height: ', div.style.height);
      });
    })
  }
    
  window.onload = () => {
    equalheight('.resize');
  };

  window.onresize = () => {
    equalheight('.resize');
  };

})();
