'use strict';

(function() {
  var menu = document.querySelector('.main-menu');
  menu.classList.remove('main-menu--no-js');
  var navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function(){
    if (menu.classList.contains('main-menu--closed')) {
      menu.classList.remove('main-menu--closed');
      menu.classList.add('main-menu--opened');
    } else {
      menu.classList.add('main-menu--closed');
      menu.classList.remove('main-menu--opened');
    }
  });

})();
