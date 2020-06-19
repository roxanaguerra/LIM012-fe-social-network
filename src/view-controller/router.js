import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

const container = document.getElementById('general-container');

// OBSERVADOR
const authenticate = (view) => {
  let html = '';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      html = container.appendChild(view());
    } else {
      models.signOutUser();
      window.location.hash = '#/';
    }
  });
  return html;
};

const changeView = (route) => {
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/': {
      models.authentication.signOutUser();
      return container.appendChild(componentsView.login());
    }
    case '#/register': {
      models.authentication.signOutUser();
      return container.appendChild(componentsView.register()); }
    case '#/home':
      // eslint-disable-next-line max-len
      return authenticate(componentsView.home);
    case '#/profile':
      return authenticate(componentsView.profile);
    default:
      return container.appendChild(componentsView.errorMessage());
  }
};

export { changeView };
