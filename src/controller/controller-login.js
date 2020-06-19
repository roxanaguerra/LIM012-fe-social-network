// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';

export default () => {
  const view = componentsView.login();
  console.log('view: ', view);

  const btnLogin = view.querySelector('#btn-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogin = view.querySelector('#email-login').value;
    const passwordLogin = view.querySelector('#password-login').value;
    const span = view.querySelector('#span');
    if (emailLogin === '') {
      span.innerHTML = '*Debe ingresar su correo';
    } else if (passwordLogin === '') {
      span.innerHTML = '*Debe ingresar su contraseña';
    }
    models.authentication.authSignIn(emailLogin, passwordLogin);
  });

  // INICIO DE SESIÓN CON GOOGLE
  const btnGoogle = view.querySelector('#google-login');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Google Prueba');
    models.authentication.authSignInGoogle();
  });

  // INICIO DE SESIÓN CON FACEBOOK
  const btnFacebook = view.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Facebook Prueba');
    models.authentication.authSignInFacebook();
  });
  return view;
};
