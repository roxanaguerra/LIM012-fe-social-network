import { readUserProfile } from '../controller/controller-user.js';
import { currentUser } from '../model/model-authentication.js';
import { updateUserName, updateUserAbout } from '../model/model-user.js';
import { signOutUser } from '../controller/controller-autentication.js';

export default () => {
  const userNow = currentUser();
  readUserProfile(userNow.uid);
  const viewProfile = `
    
            <!-- Navbar -->
            <div class="top">
              <div class="bar theme-d2 left-align large">
                <a class="bar-item button hide-medium hide-large right padding-large hover-white large theme-d2" href="javascript:void(0);"><i class="fa fa-bars" id="navbar-mobile"></i></a>
                <a href="#/home" class="bar-item button padding-large theme-d4"><i class="fa fa-home margin-right"></i>DL</a>
                <a href="#/profile" class="bar-item button hide-small padding-large hover-white" title="Profile">
                  <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" class="circle" style="height:23px;width:23px" alt="Avatar">
                </a>
                <a href="#/" class="bar-item button hide-small right padding-large hover-white" id="btn-cerrar" title="Log Out"><i class="fa fa-sign-out"></i></a>
              </div>
            </div>

            <!-- Navbar on small screens -->
            <div id="nav-links" class="bar-block theme-d2 hide hide-large hide-medium large">
              <a href="#/home" class="bar-item button padding-large">Home</a>
              <a href="#/profile" class="bar-item button padding-large">Profile</a>
              <a href="#" id="btn-cerrar" class="bar-item button padding-large">Log Out</a>
            </div>

              <!-- Page Container -->
              <div class="container content" style="max-width:1400px;margin-top:80px">
                <!-- The Grid -->
                <div class="row max-width">
          
                  <!-- Left Column -->
                  <div class="col m4">
                    
                    <!-- Profile -->
                    <div class="card round white">
                      <!-- Profile photo -->     
                      <div class="container theme-d5 background-photo flex">
                        <p class="img-photo-post photo-medium center"></p>
                      </div>

                      <!-- Description -->     
                      <div class="container">
                        <div class="flex">
                          <h4 class="center username" id="username"></h4>
                          <span class="right opacity option-edit" id="edit-name"><i class="fa fa-edit"></i></span>
                          <span class="right opacity option-save hide" id="save-name"><i class="fa fa-save"></i></span>
                        </div>
                        <div class="flex">
                          <p class="theme-d3 userabout" id="userabout"></p>
                          <span class="right opacity option-edit" id="edit-about"> <i class="fa fa-edit"></i></span>
                          <span class="right opacity option-save hide" id="save-about"> <i class="fa fa-save"></i></span>
                        </div>
                      </div>
                    <!-- End Profile -->  
                    </div>
                    <br>

                  <!-- End Left Column -->
                  </div>

                  <!-- Right Column -->
                  <div class="col m8">
                    
                    <!-- Post -->
                    <div class="row-padding">
                      <div class="col m12">
                        <div class="card round white">
                          <div class="container padding flex">
                            <p class="img-photo-post center"></p>
                            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
                            <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px" placeholder="What's on your mind?"></textarea>
                            </div>                                          
                          <div class="container padding theme-d5">
                              <button type="button" class="button theme-d5"><i class="fa fa-image"></i>  Photo</button> 
                              <button type="button" class="button theme-d5"><i class="fa fa-lock"></i>  Private</button> 
                              <button type="button" id="btn-post" class="button theme-d1 right button-medium">  Post</button> 
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="container card white round margin"><br>
                      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
                      <span class="right opacity"><i class="fa fa-edit"></i></span>
                      <h4>John Doe</h4>
                      <span class="opacity">23/05/2020 13:53</span>
                      <span class="opacity"><i class="fa fa-globe"></i></span>
                      <br>
                      <hr class="clear">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <img src="https://www.w3schools.com/w3images/nature.jpg" style="width:100%" alt="Nature" class="margin-bottom">
                      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
                      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
                    </div>
      
                    <div class="container card white round margin"><br>
                      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
                      <span class="right opacity"><i class="fa fa-edit"></i></span>
                      <h4>Jane Doe</h4>
                      <span class="opacity">23/05/2020 13:53</span>
                      <span class="opacity"><i class="fa fa-globe"></i></span>
                      <br>
                      <hr class="clear">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
                      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
                    </div>

                  <!-- End Right Column -->
                  </div>

                <!-- End Grid -->
                </div>
    
              <!-- End Page Container -->
              </div>  
`;
  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewProfile;

  const navbMobile = divElemt.querySelector('#navbar-mobile');
  navbMobile.addEventListener('click', () => {
    const navLinks = divElemt.querySelector('#nav-links');
    if (navLinks.className.indexOf('show') === -1) {
      navLinks.className += ' show';
    } else {
      navLinks.style.display = 'block';
      navLinks.className = navLinks.className.replace(' show', '');
    }
  });

  const bntEditName = divElemt.querySelector('#edit-name');
  const bntSaveName = divElemt.querySelector('#save-name');
  const userName = divElemt.querySelector('#username');
  bntEditName.addEventListener('click', () => {
    userName.setAttribute('contenteditable', 'true');
    userName.focus();
    bntEditName.classList.add('hide');
    bntSaveName.classList.remove('hide');
  });

  bntSaveName.addEventListener('click', () => {
    userName.setAttribute('contenteditable', 'false');
    bntEditName.classList.remove('hide');
    bntSaveName.classList.add('hide');
    const newName = userName.innerText;
    updateUserName(userNow.uid, newName);
    readUserProfile(userNow.uid);
  });

  const bntEditAbout = divElemt.querySelector('#edit-about');
  const bntSaveAbout = divElemt.querySelector('#save-about');
  const userAbout = divElemt.querySelector('#userabout');
  bntEditAbout.addEventListener('click', () => {
    userAbout.setAttribute('contenteditable', 'true');
    userAbout.focus();
    bntEditAbout.classList.add('hide');
    bntSaveAbout.classList.remove('hide');
  });

  bntSaveAbout.addEventListener('click', () => {
    userAbout.setAttribute('contenteditable', 'false');
    bntEditAbout.classList.remove('hide');
    bntSaveAbout.classList.add('hide');
    const newAbout = userAbout.innerText;
    updateUserAbout(userNow.uid, newAbout);
    readUserProfile(userNow.uid);
  });

  // CERRAR SESIÓN 'funcion para boton singOut'
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  return divElemt;
};
