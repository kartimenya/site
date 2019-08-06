let headerTop  = document.getElementsByClassName('header-top')[0];

let menu = function () {
  let menuToggle = document.getElementById('menuToggle'),
      mainMenu   = document.getElementById('main-menu'),
      menuArea   = document.getElementsByClassName('go_to'),
      logo       = document.getElementsByClassName('logo')[0];

  //show menu
  menuToggle.onclick = () => {
    showMenu();
  };
  mainMenu.onclick = () => {
    showMenu();
  };
  for (let i = 0; i < menuArea.length; i++) {
      menuArea[i].onclick = () => {
          showMenu();
      }
  };
  function showMenu() {
    mainMenu.classList.toggle('menu-show');
    logo.classList.toggle('logo-display');
    menuToggle.classList.toggle('menuToggleAct');
    headerTop.classList.toggle('header-top-display');
  }
}
menu();

//scroll
let scroll = function () {
  let f = document.getElementsByClassName('logo')[0],
      q = document.getElementById('menuToggle');

  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      headerTop.classList.add('header-top-activ');
      f.classList.add('logo-scroll');
      q.classList.add('menuToggle-scroll');
    }else {
      headerTop.classList.remove('header-top-activ');
      f.classList.remove('logo-scroll');
      q.classList.remove('menuToggle-scroll');
    }
  }
}
scroll();
