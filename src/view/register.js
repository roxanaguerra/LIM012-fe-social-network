export default () => {
    const viewRegister = `
    <div class="ctn-register-login">
    <div class="content flex column">
      <div class="">
        <h1 class="delivery-drone">Delivery Drone</h1>
        <h6 class="safetyHome"> STAY HOME, STAY SAFE</h6>
      </div>
      <div class="container-form flex column">      
        <div class="data-register flex column">
          <div class="inputs-form">
            <input class="name" id="username" type="text" placeholder="Nombres y Apellidos">
            <input class="email" id="email-register" type="email" placeholder="E-mail">
            <input class="password" id="password-register" type="password" placeholder="Password">
          </div>
          <button class="btn-form" id="btn-register">Register</button>
        </div>
        <p class="txt-register">Or</p>
        <div class="options-register">
          <img class="logo-fb" src="assets/fb.png" alt="">
          <img class="logo-google" src="assets/gg.png" alt="">
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

    const btnRegister = divElemt.querySelector('#btn-register');
    btnRegister.addEventListener('click', (e) => {
        e.preventDefault(); //cancelar el evento de reinicio de formulario
        const emailRegister = divElemt.querySelector('#email-register').value;
        const passwordRegister = divElemt.querySelector('#password-register').value;
        console.log(emailRegister, passwordRegister);
        firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
        .then( userCredential => {
          console.log('registradx');
          
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
