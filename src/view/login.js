import {
  authSignIn,
  authSignInGoogle,
  authSignInFacebook,
} from '../controller/controller-autentication.js';

export default () => {
  const viewLogin = `
   
    <div class="content1 flex column">
      <div>
        <h1 class="delivery-drone">Delivery Drone</h1>
        <h6 class="safetyHome">
            STAY HOME, STAY SAFE</h6>
    </div>
    <div class="container-form flex column">
        <div class="data-register flex column">
          <div class="inputs-form">
            <input id="email-login" type="email" placeholder="E-mail"> 
            <input id="password-login" type="password" placeholder="Password">
          </div>
          
          <button class="btn-form" id="btn-login">Log In</button>
          <span class="error-msg" id="span"></span>
        </div>
        <p class="txt-register">Or</p>
        <div>
          <img class="logo-fb" src="assets/fb.png" alt="facebook" id="facebook-login">
          <img class="logo-google" src="assets/gg.png" alt="google" id="google-login">
        </div>
        <div class="ask-option flex">
          <p class="question">Don’t have an account?</p>
          <a class="option" id="comment-signin" href="#/register">Sign Up</a>
        </div>
      </div>

                <button class="btn-form" id="btn-login">Log In</button>
                
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
                <h4 class="find-delivers">FIND DELIVERIES TO<br>YOU SAFELY</h4>
    </div>
    
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;

  const btnLogin = divElemt.querySelector('#btn-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogin = divElemt.querySelector('#email-login').value;
    const passwordLogin = divElemt.querySelector('#password-login').value;
    const span = document.querySelector('#span');
    if (emailLogin === '') {
      span.innerHTML = '*Debe ingresar su correo';
    } else if (passwordLogin === '') {
      span.innerHTML = '*Debe ingresar su contraseña';
    }
    authSignIn(emailLogin, passwordLogin);
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
