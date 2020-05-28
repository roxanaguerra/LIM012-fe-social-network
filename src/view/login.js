export default () => {
    const viewLogin = `
    <div class="ctn-register-login">
    <div class="content flex column">
      <div class="">
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
        </div>
        <p class="txt-register">Or</p>
        <div class="options-register">
          <img class="logo-fb" src="assets/fb.png" alt="">
          <img class="logo-google" src="assets/gg.png" alt="">
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
    // divElemt.classList.add('position')
    divElemt.innerHTML = viewLogin;

    const btnLogin = divElemt.querySelector('#btn-login');
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault(); //cancelar el evento de reinicio de formulario
        const emailLogin = divElemt.querySelector('#email-login').value;
        const passwordLogin = divElemt.querySelector('#password-login').value;
        console.log(emailLogin, passwordLogin)
        firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
        .then( userCredential => {
          console.log('Ingreso, ya esta logeadx')
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

        });
    });

    return divElemt;

    
};