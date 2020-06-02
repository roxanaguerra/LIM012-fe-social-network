import { componentsView } from '../view/view-index.js';

const changeView = (route) => {
  // console.log(route);
  const container = document.getElementById('general-container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/': { return container.appendChild(componentsView.login()); }
    case '#/register': { return container.appendChild(componentsView.register()); }
    case '#/home': { return container.appendChild(componentsView.home()); }
    case '#/profile': { return container.appendChild(componentsView.profile()); }
    default:
      return container.appendChild(componentsView.error());
  }
};

export { changeView };
