// import { SignInGoogle } from './controller/controller-authentication.js';
import { changeView } from './view-controller/router.js';

const events = () => {
  const btnRegister = document.getElementById('btn-register');
  const btnGoogle = document.getElementById('google');
  btnRegister.addEventListener('click', () => {
    // e.preventDefault();
    console.log('registrado');
  });

  btnGoogle.addEventListener('click', () => {
    // e.preventDefault();
    console.log('registrado');
    // SignInGoogle();
  });
};


const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
    events();
  });
};

window.addEventListener('load', init);
