import {
  postCreado,
  postRead,
} from '../controller/controller-posts.js';

export default () => {
  const viewHome = `
  <div class="mobile-container">

  <!-- Top Navigation Menu -->
  <div class="topnav">
    <a href="#home" class="active"><h1>DL</h1></a>
    <div id="nav-links">
      <a href="#home">Home</a>
      <a href="#profile">Profile</a>
      <button class="btn-form" id="btn-cerrar">Prueba-cerrar</button>
    </div>
      <a href="javascript:void(0);" class="icon" id="navbar-mobile">
        <img class="menu-bars" src="assets/nav-menu.png" alt="">
      </a>
  </div>
  <!------------------------------- Home ---------------------------------->
      
    <!-- Post -->
    <div class="ctn-post flex column margin-top">
            <div class="ctn column ">
              <div class="start">
                <div class="ctn-img-post-home flex">
                    <img class="border" src="assets/profile-photo.jpg" alt="">
                    <a class="username" href="">Ana Wong</a>                
                </div>
              </div>
              <div class="ctn-txt-post flex">
                <textarea id="input-post" cols="45" rows="4" placeholder="What's on your mind?"></textarea>
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
                  <a class="username" href="">Rosa Aguilar</a>
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

  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  const btnPost = divElemt.querySelector('#btn-post');
  btnPost.addEventListener('click', () => {
    const inputPost = divElemt.querySelector('#input-post').value;
    console.log('prueba: ', inputPost);
    console.log(inputPost);
    divElemt.querySelector('#input-post').value = '';
    postCreado(inputPost);
    postRead();
    const divPostNew = divElemt.querySelector('#new-post');
    divPostNew.innerHTML += `
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
      <p>${inputPost} </p>
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
  });

  return divElemt;
};
