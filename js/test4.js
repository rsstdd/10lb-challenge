'use strict';

(() => {
  const userChoice = document.getElementById('userChoice');
  const somethingWrongDesc = document.getElementById('somethingWrongDesc');
  const ashmedDetails = document.getElementById('ashmedDetails');
  const firstHidden = [somethingWrongDesc, ashamedBool];
  const secondHidden = [ashmedDetails];
  let text;
  let bool;

  const toggleClass = (arr) => {
    arr.map((div) => {
      const className = div.getAttribute('class');
      if (className == 'hidden') div.classList.remove('hidden');
    })
  }

  const showBool = () => {
    bool = document.querySelector("input[name=ashamedBool]:checked").value;
    if (bool === 'yes') toggleClass(secondHidden) 
  }
  
  const likesBadMovies = () => {
    text = userChoice.value;
    if (text === 'Keeping Up with the Kardashians') toggleClass(firstHidden);
  }
  
  
  
  userChoice.addEventListener('change', likesBadMovies, false);
  ashamedBool.addEventListener('change', showBool, false);  

})()


