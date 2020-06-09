import {
  createPost,
  postsMain,
} from '../controller/controller-posts.js';
import { readUserProfile } from '../controller/controller-user.js';
import { currentUser, observerUser } from '../model/model-authentication.js';
import { signOutUser } from '../controller/controller-autentication.js';
import { readPostPrueba } from '../model/model-posts.js';
// import { storageRef, imagenHref } from '../model/model-storage.js';
// import Header from './header.js';

export default () => {
  const userNow = currentUser();
  readUserProfile(userNow.uid);
  const viewHome = `
  <div class="mobile-container" id="mobile-container">
  <!------------------------------- Home ---------------------------------->
  <!-- Top Navigation Menu -->
    <div class="topnav">
        <a href="#home" class="active"><h1>DL</h1></a>
        <div id="nav-links">
            <a href="#/home">Home</a>
            <a href="#/profile">Profile</a>
            <a id="btn-cerrar" href="#">Log out</a>
        </div>
            <a href="javascript:void(0);" class="icon" id="navbar-mobile">
            <img class="menu-bars" src="assets/nav-menu.png" alt="">
            </a>
    </div>
    <!-- Post -->
    <div class="ctn-post flex column margin-top">
            <div class="ctn column ">
              <div class="start">
                <div class="ctn-img-post-home flex">
                    <div class="img-photo-post"></div>
                    <a id="userName" class="username" href="#/profile"></a>                
                </div>
              </div>
              <div class="ctn-txt-post flex">
                <textarea id="input-post" cols="45" rows="4" placeholder="What's on your mind?"></textarea>
              </div>  
            </div>
            <div class="ctn-post-status ctn flex">
              <div class="config-post flex" id="icon-photo">
                <form action="">
                  <label for="">
                    <input type="file" id="uploadImg">
                    <img src="assets/camera.png" alt="">
                    <p>Photo +</p>
                  </label>
                </form>                
              </div>
              <div class="config-post flex">
                <img src="assets/private.png" alt="">
                <p>Privacy</p>
                <span class="config-privacy flex">
                  <img src="assets/option.png" alt="">
                </span>
              </div>
              <button class="btn-post" id="btn-post">POST</button>
            </div>
    </div>
    <div id="new-post" class="">

    </div>
              
          <!-- Past photo posts -->
          <div class="ctn-photo-posted flex column margin-top">
            <div class="ctn start">
              <div class="ctn-post-details flex">
                <div class="ctn-img-post">
                  <img class="border" src="assets/user.jpg" alt="">
                </div>
                <div class="">
                  <a class="username" href=""></a>
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
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;

  const navbMobile = divElemt.querySelector('#navbar-mobile');
  navbMobile.addEventListener('click', () => {
    const navLinks = divElemt.querySelector('#nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  });

  const btnPost = divElemt.querySelector('#btn-post');

  btnPost.addEventListener('click', () => {
    const inputPost = divElemt.querySelector('#input-post').value;
    // const userName = divElemt.querySelector('#userName').value;
    console.log(inputPost);
    if (!inputPost.trim()) { // si manda el formulario vacío el trim hace que no se envié nada
      // si manda algo que no seatexto o manda vacío, sucede esto...
      console.log('input vacío');
      return;
    }
    divElemt.querySelector('#input-post').value = '';

    createPost(inputPost, userNow.uid);
  });

  observerUser((user) => {
    console.log(user);

    postsMain().onSnapshot((query) => {
      const newPost = divElemt.querySelector('#new-post');
      newPost.innerHTML = '';
      query.forEach((doc) => {
        // console.log(doc.data());
        if (doc.data().uid === user.uid) {
          newPost.innerHTML += `
          <div class="ctn-text-posted flex column margin-top">
          <div class="ctn start">
              <div class="ctn-post-details flex">
                  <div class="ctn-img-post">
                      <div class="img-photo-post">${user.photoURL}</div>
                  </div>
                  <div class="">
                      <a class="username" href=""></a>
                      <div class="ctn-post-status flex">
                          <span>${user.displayName}</span>
                          <span>${doc.data().date.toDate()}</span>
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
              <p>${doc.data().post} </p>
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
                      <!-- <img src="assets/profile-photo.jpg" alt=""> -->
                  </div>
                  <div class="ctn-comment-txa">
                      <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
                  </div>
              </div>
          </div>
      </div>
    `;
        } else {
          newPost.innerHTML += `
          <div class="ctn-text-posted flex column margin-top">
          <div class="ctn start">
              <div class="ctn-post-details flex">
                  <div class="ctn-img-post">
                      <div class="img-photo-post"></div>
                  </div>
                  <div class="">
                      <a class="username" href=""></a>
                      <div class="ctn-post-status flex">
                          <span>
                          <img class="border ctn-post-details flex ctn-img-post" src="${user.photoURL}" alt="">
                          </span>  
                          <span>${user.displayName}</span>
                          <span>${doc.data().date.toDate()}</span>

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
              <p>${doc.data().post} </p>
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
                      <!-- <img src="assets/profile-photo.jpg" alt=""> -->
                  </div>
                  <div class="ctn-comment-txa">
                      <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
                  </div>
              </div>
          </div>
      </div>`;
        }
      });
    });
  });

  // CERRAR SESIÓN 'funcion para boton singOut'
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });
  return divElemt;
};
