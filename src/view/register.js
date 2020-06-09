import {
  registerNewUser,
  authSignInGoogle,
  authSignInFacebook,
} from '../controller/controller-autentication.js';

export default () => {
  const viewRegister = `
    <div class="content1 flex column">
      <div>
        <h1>Delivery Drone</h1>
        <h6> STAY HOME, STAY SAFE</h6>
      </div>
      <div class="container-form flex column">      
        <div class="data-register flex column">
          <div class="inputs-form">
            <input id="name-register" type="text" placeholder="Nombres y Apellidos">
            <input id="email-register" type="email" placeholder="E-mail">
            <input id="password-register" type="password" placeholder="Password">
          </div>
          
          <button class="btn-form" id="btn-register">Register</button>
          <span class="error-msg" id="span"></span>
        </div>
        <p class="txt-register">Or</p>
        <div>
          <img class="logo-fb" src="assets/fb.png" alt="" id="facebook-register">
          <img class="logo-google" src="assets/gg.png" alt="" id="google-register">
        </div>
        <div class="ask-option flex">
          <p class="question">If you have an account</p>
          <a class="option" id="comment-signin" href="#/">Sign In</a>
        </div>
      </div>
      <h4 class="find-delivers">FIND DELIVERIES TO <br> YOU SAFELY</h4>
    </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;

  // REGISTRAR USUARIO
  const btnRegister = divElemt.querySelector('#btn-register');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    const emailRegister = divElemt.querySelector('#email-register').value;
    const passwordRegister = divElemt.querySelector('#password-register').value;
    console.log(emailRegister, passwordRegister);
    registerNewUser(emailRegister, passwordRegister);
  });

  // INICIO DE SESIÓN CON GOOGLE
  const btnGoogle = divElemt.querySelector('#google-register');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Google Prueba - register');
    authSignInGoogle();
  });

  // INICIO DE SESIÓN CON FACEBOOK
  const btnFacebook = divElemt.querySelector('#facebook-register');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    console.log('Facebook Prueba');
    authSignInFacebook();
  });

  return divElemt;
};
