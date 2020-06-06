import {
  authSignIn,
  authSignInGoogle,
  authSignInFacebook,
  signOutUser,
  observador,
} from '../controller/controller-autentication.js';

export default () => {
  const viewLogin = `
    <div class="ctn-register-login">
    <div class="content flex column">
      <div class="ctn-titles">
        <h1 class="delivery-drone">Delivery Drone</h1>
        <h6 class="safetyHome"> STAY HOME, STAY SAFE</h6>
      </div>
      <div class="container-form flex column">
        <div class="data-register flex column">
          <div class="inputs-form">
            <input class="email" id="email-login" type="email" placeholder="E-mail">
            <input class="password" id="password-login" type="password" placeholder="Password">
          </div>
          
          <button class="btn-form" id="btn-login">Log In</button>
          <button class="btn-form" id="btn-cerrar">Prueba-cerrar</button>
          <span id="span">Happy deliver!</span>
        </div>
        <p class="txt-register">Or</p>
        <div class="options-register">
          <img class="logo-fb" src="assets/fb.png" alt="" id="facebook-login">
          <img class="logo-google" src="assets/gg.png" alt="" id="google-login">
        </div>
        <div class="ask-option flex">
          <p class="question" id="comment-register">Don’t have an account?</p>
          <a class="option" id="comment-signin" href="#/register">Sign Up</a>
        </div>
      </div>

      <h4 class="find-delivers">FIND DELIVERIES TO <br> YOU SAFELY</h4>
    </div>
    
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;

  const btnLogin = divElemt.querySelector('#btn-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogin = divElemt.querySelector('#email-login').value;
    const passwordLogin = divElemt.querySelector('#password-login').value;
    authSignIn(emailLogin, passwordLogin);
  });

  // Se llama a este observador cada vez que cambia el estado de acceso del usuario.
  observador();

  // CERRAR SESIÓN 'funcion para boton singOut'
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  // INICIO DE SESIÓN CON GOOGLE
  const btnGoogle = divElemt.querySelector('#google-login');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Google Prueba');
    authSignInGoogle();
  });

  // INICIO DE SESIÓN CON FACEBOOK
  const btnFacebook = divElemt.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Facebook Prueba');
    authSignInFacebook();
  });

  return divElemt;
};
