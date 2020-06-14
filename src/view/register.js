import {
  registerNewUser,
  authSignInGoogle,
  authSignInFacebook,
} from '../controller/controller-autentication.js';

export default () => {
  const viewRegister = `

  <!-- Page Container -->
  <div class="container content" style="max-width:1400px;margin-top:20px">
    <!-- The Grid -->
    <div class="row max-width ">
    
    <!-- Left Column -->
      <div class="col m7">
        <div class="round center">
          <h1 class="delivery-drone">Delivery Drone</h1>
        </div>
        </div>

  <!-- Right Column -->
  <div class="col m5">
    <div class="row-padding">
      <div class="col m12">
        <div class="round">

            <div class="content1 flex column">
              <div class="container-form card flex column">      
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

        </div>
      </div>
    </div>
    <!-- End Right Column -->
      </div>

    <!-- End Grid -->
    </div>

  <!-- End Page Container -->
  </div> 
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;

  const validateEmail = (email) => {
    // para validar que ingrese un email de acuerdo a su sintaxis
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // REGISTRAR USUARIO
  const btnRegister = divElemt.querySelector('#btn-register');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    const username = document.querySelector('#name-register').value;
    const emailRegister = divElemt.querySelector('#email-register').value;
    const passwordRegister = divElemt.querySelector('#password-register').value;
    const validateSintaxEmail = validateEmail(emailRegister);
    const span = document.querySelector('#span');
    console.log(emailRegister, passwordRegister);
    if (username === '') {
      span.innerHTML = '*Debes ingresar Nombres y Apellidos';
    } else if (emailRegister === '') {
      span.innerHTML = '*Debes ingresar un correo';
    } else if (passwordRegister === '') {
      span.innerHTML = '*Debes ingresar una contraseña';
    } else if (!validateSintaxEmail) {
      span.innerHTML = '*Formato de correo inválido';
    } else {
      registerNewUser(emailRegister, passwordRegister);
    }
    setTimeout(
      // eslint-disable-next-line no-return-assign
      () => (span.innerHTML = ''),
      7000,
    );
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
