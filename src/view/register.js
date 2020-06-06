import {
  registerNewUser,
  authSignInGoogle,
  authSignInFacebook,
  observador,
} from '../controller/controller-autentication.js';

export default () => {
  const viewRegister = `
    <div class="ctn-register-login">
    <div class="content flex column">
      <div class="ctn-titles">
        <h1 class="delivery-drone">Delivery Drone</h1>
        <h6 class="safetyHome"> STAY HOME, STAY SAFE</h6>
      </div>
      <div class="container-form flex column">      
        <div class="data-register flex column">
          <div class="inputs-form">
            <input class="name" id="name-register" type="text" placeholder="Nombres y Apellidos">
            <input class="email" id="email-register" type="email" placeholder="E-mail">
            <input class="password" id="password-register" type="password" placeholder="Password">
          </div>
          
          <button class="btn-form" id="btn-register">Register</button>
          <span id="span">Welcome!</span>
        </div>
        <p class="txt-register">Or</p>
        <div class="options-register">
          <img class="logo-fb" src="assets/fb.png" alt="" id="facebook-register">
          <img class="logo-google" src="assets/gg.png" alt="" id="google-register">
        </div>
        <div class="ask-option flex">
          <p class="question" id="comment-register">If you have an account</p>
          <a class="option" id="comment-signin" href="#/">Sign In</a>
        </div>
      </div>

      <h4 class="find-delivers">FIND DELIVERIES TO <br> YOU SAFELY</h4>
    </div>
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;

  // REGISTRAR USUARIO
  const btnRegister = divElemt.querySelector('#btn-register');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    const nameRegister = divElemt.querySelector('#name-register').value;
    const emailRegister = divElemt.querySelector('#email-register').value;
    const passwordRegister = divElemt.querySelector('#password-register').value;
    console.log(emailRegister, passwordRegister);
    registerNewUser(nameRegister, emailRegister, passwordRegister);
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

  // Se llama a este observador cada vez que cambia el estado de acceso del usuario.
  observador();

  return divElemt;
};
