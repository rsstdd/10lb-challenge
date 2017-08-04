'use strict';

(() => {

  function resizeImage(){
    const image = document.getElementsByTag("img");
    const imageParentElement = document.getElementsByClassName('.image');
    const widthRatio = imageParentElement.offsetWidth / imageRatio.width;
    const heightRatio = imageParentElement.offsetHeight / imageRatio.height;
    const ratio = Math.max(widthRatio, heightRatio);
    
    image.css({
      width: Math.ceil(ratio * imageRatio.width) ,
      height: Math.ceil(ratio * imageRatio.height)
    });
  }
  
  function outerWidth(el) {
    const width = el.offsetWidth;
    const style = getComputedStyle(el);

    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }

  function outerHeight(el, includeMargin){
    var height = el.offsetHeight;

    if(includeMargin){
      var style = el.currentStyle || getComputedStyle(el);
      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    } 
    
    return height;
  }
  
  function forEachElement(selector, fn) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      fn(elements[i], i);
    }
  }
  
  const equalheight = (container) => {
    let currentTallest = 0;
    let currentRowStart = 0;
    let rowDivs = new Array();
    let el;
    let topPosition = 0;

    forEachElement(container, function(el){
      console.log(container);
      console.log(el);
      
      el.style.height = 'auto';
      topPosition = el.offsetTop;

      if (currentRowStart != topPosition) {
        for (let currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].style.height = `${currentTallest}px`;
        }

        rowDivs.length = 0;
        currentRowStart = topPosition;
        currentTallest = outerHeight(el, false);
        rowDivs.push(el);
      } else {
        rowDivs.push(el);
        currentTallest = (currentTallest < outerHeight(el, false)) ? (outerHeight(el, false)) : (currentTallest);      }
      
      for (let currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].style.height = `${currentTallest}px`;
      }
    });
  }
    
  window.onload = () => {
    equalheight('#resize div');
  };


  window.onresize = () => {
    equalheight('#resize div');
    resizeImage('img')
  };

})();