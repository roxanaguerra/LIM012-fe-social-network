import { readUserProfile } from '../controller/controller-user.js';
import { currentUser } from '../model/model-authentication.js';
import { updateUserName, updateUserAbout } from '../model/model-user.js';
import { signOutUser } from '../controller/controller-autentication.js';

export default () => {
  const userNow = currentUser();
  readUserProfile(userNow.uid);
  const viewProfile = `
<div class="mobile-container">
    <!-- Top Navigation Menu -->
    <div class="topnav">
        <a href="#home" class="active"><h1>DL</h1></a>
        <div id="nav-links">
            <a href="#/home">Home</a>
            <a href="#/profile">Profile</a>
            <a class="" id="btn-cerrar" href="#logout">Log out</a>
        </div>
            <a href="javascript:void(0);" class="icon" id="navbar-mobile">
            <img class="menu-bars" src="assets/nav-menu.png" alt="">
            </a>
    </div>
    <!------------------------------ Profile    ------------------------------>
    <!-- Cover photo -->
    <div class="ctn-cover-photo usercover flex">
      <!-- Aqui debajo se crea el cover photo -->

        <!-- Profile image -->
    <div class="img-photo-post ctn-profile-photo"></div>
    </div>
        
    <!-- Description -->
    <div class="flex">
    <div class="description ctn flex column">
        <div class="flex">
        <p class="username" id="username"></p>
        <div class="option-edit" id="edit-name"> <img src="assets/edit.png" alt=""></div>
        <div class="option-save hide" id="save-name"> <img src="assets/save.png" alt=""></div>
        </div>
        <div class="ctn-description-text flex">
        <p class="userabout" id="userabout"></p>
        <div class="option-edit" id="edit-about"> <img src="assets/edit.png" alt=""></div>
        <div class="option-save hide" id="save-about"> <img src="assets/save.png" alt=""></div>
        </div>
    </div>
    </div>

    <!-- Post -->
    <div class="ctn-post flex column margin-top">
    <div class="ctn-create-post ctn flex">
        <div class="ctn-img-post">
        <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-txt-post flex">
        <textarea name="" id="" cols="38" rows="3.5" placeholder="What's on your mind?"></textarea>
        </div>  
    </div>
    <div class="ctn-post-status ctn flex">
        <div class="config-post flex">
        <img src="assets/camera.png" alt="">
        <p>Photo +</p>
        </div>
        <div class="config-post flex">
        <img src="assets/private.png" alt="">
        <p>Privacy</p>
        <span class="config-privacy flex">
            <img src="assets/option.png" alt="">
        </span>
        </div>
        <button class="btn-post">POST</button>
    </div>
    </div>
        
    <!-- Past photo posts -->
    <div class="ctn-photo-posted flex column margin-top">
    <div class="ctn start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="">
            <a class="username" href="">Ana Wong</a>
            <div class="ctn-post-status flex">
            <span>23/05/2020</span>
            <span>18:00</span>
            </div>
        </div>
        <div class="config-post">
            <img src="assets/public.png" alt="">
            <span class="config-privacy">
            <img src="assets/option.png" alt="">
            </span>
        </div>
        </div>
    </div>
    <div class="flex">
        <img class="photo" src="assets/past-photo.jpg" alt="">
    </div>
    <div class="ctn-likes-comments ctn flex">
        <div class="likes flex">
        <img src="assets/like.png" alt="">
        <span>15 Likes</span>
        </div>
        <div class="comments flex">
        <img src="assets/comment.png" alt="">
        <span>5 comments</span>
        </div>
    </div>
    <div class="ctn flex ctn-create-comment  start">
        <div class="flex">
        <div class="ctn-img-post">
            <img src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-comment-txa">
            <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
        </div>
        </div> 
    </div>
    <div class="ctn ctn-last-comment start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img src="assets/comment-photo.jpg" alt="">
        </div>
        <div class="ctn-comment">
            <a class="username-comment" href="">Eva Alva</a>
            <div class="comment">
            <p class="">Increible vista me encantan los drones</p>                            
            </div>
        </div>
        </div>
    </div>  
    </div>

    <!-- Past text posts -->
    <div class="ctn-text-posted flex column margin-top">
    <div class="ctn start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="">
            <a class="username" href="">Ana Wong</a>
            <div class="ctn-post-status flex">
            <span>23/05/2020</span>
            <span>18:00</span>
            </div>
        </div>
        <div class="config-post">
            <img src="assets/public.png" alt="">
            <span class="config-privacy">
            <img src="assets/option.png" alt="">
            </span>
        </div>
        </div>
    </div>
    <div class="txt-posted flex">
        <p>eatae illum, architecto commodi expedita eos velit voluptatem iusto vel.</p>
    </div>
    <div class="ctn-likes-comments ctn flex">
        <div class="likes flex">
        <img src="assets/like.png" alt="">
        <span>15 Likes</span>
        </div>
        <div class="comments flex">
        <img src="assets/comment.png" alt="">
        <span>5 comments</span>
        </div>
    </div>
    <div class="ctn flex ctn-create-comment  start">
        <div class="flex">
        <div class="ctn-img-post">
            <img src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-comment-txa">
            <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
        </div>
        </div> 
    </div>
    <div class="ctn ctn-last-comment start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img src="assets/comment-photo.jpg" alt="">
        </div>
        <div class="ctn-comment">
            <a class="username-comment" href="">Eva Alva</a>
            <div class="comment">
                <p class="">Increible vista me encantan los drones</p>                            
            </div>
        </div>
        </div>
    </div>            
    </div>
</div>
`;
  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewProfile;

  const navbMobile = divElemt.querySelector('#navbar-mobile');
  navbMobile.addEventListener('click', () => {
    const navLinks = divElemt.querySelector('#nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
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
