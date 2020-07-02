export default () => {
  const viewLogin = `
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
                  <div class="inputs-form">
                    
                    <input id="email-login" type="email" placeholder="E-mail"><i class="fa fa-user"></i> 
                    <input id="password-login" type="password" placeholder="Password"><i class="fa fa-key"></i>
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
  divElemt.innerHTML = viewLogin;
  return divElemt;
};
