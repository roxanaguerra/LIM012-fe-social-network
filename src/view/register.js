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
            <input class="email" id="email" type="mail" placeholder="E-mail">
            <input class="password" id="password" type="text" placeholder="Password">
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
    // divElemt.classList.add('position')
    divElemt.innerHTML = viewRegister;
    return divElemt;

    // const btnRegister = document.getElementById('btn-register');
    // btnRegister.addEventListener('click', () => {
    //   console.log('registrado')
    // });
};
