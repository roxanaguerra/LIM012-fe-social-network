export default () => {
  const viewRegister = `

  <!-- Page Container -->
  <div class="container content bg-img" style="max-width:1400px;">
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
                  <div class="inputs-formrg">
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
  return divElemt;
};
