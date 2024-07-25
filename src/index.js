import { HomeController } from './home';
import { MenuController } from './menu';
import { AboutController } from './about';
import './style.css';

const contentDiv = document.querySelector('#content');
HomeController.renderHomePage(contentDiv);

const nav = document.querySelector('nav');

nav.addEventListener('click', togglePage);

function togglePage(e) {
  switch (e.target.id) {
    case 'home':
      console.log('home');
      HomeController.renderHomePage(contentDiv);
      return;
    case 'menu':
      console.log('menu');
      MenuController.renderHomePage(contentDiv);
      return;
    case 'about':
      console.log('about');
      AboutController.renderHomePage(contentDiv);
      return;
  }
}
