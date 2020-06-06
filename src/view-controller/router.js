import { componentsView } from '../view/view-index.js';

const container = document.getElementById('general-container');

const authenticate = (view) => {
  let html = '';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      html = container.appendChild(view());
    } else {
      window.location.hash = '#/';
    }
  });
  return html;
};

const changeView = (route) => {
  // console.log(route);
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/': { return container.appendChild(componentsView.login()); }
    case '#/register': { return container.appendChild(componentsView.register()); }
    case '#/home':
      // eslint-disable-next-line max-len
      return authenticate(componentsView.home);
    case '#/profile':
      return authenticate(componentsView.profile);
    default:
      return container.appendChild(componentsView.error());
  }
};

export { changeView };
