/* eslint-disable no-console */
import {
  createPost,
  postsMain,
} from '../controller/controller-posts.js';
import { readUserProfile } from '../controller/controller-user.js';
import { currentUser } from '../model/model-authentication.js';
import { signOutUser } from '../controller/controller-autentication.js';
import { addLikePost, editPost, deletePost } from '../model/model-posts.js';
// import Header from './header.js';

export default () => {
  // droneImg.classList.add('hide');
  const userNow = currentUser();
  readUserProfile(userNow.uid);
  const viewHome = `
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
      <div class="col m4 row-paddingl">
        
        <!-- Profile -->
        <div class="card round white">
          <!-- Profile photo -->     
          <div class="container theme-d5 background-photo">
            <p class="img-photo-post photo-medium center"></p>
          </div>

          <!-- Description -->     
          <div class="container">
            <div class="flex">
              <h4 class="center username" id="username"></h4>
            </div>
            <div class="flex">
              <p class="theme-d3 userabout" id="userabout"></p>
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
                <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px" placeholder="What's on your mind?"></textarea>
              </div>
              <div class="hide divImg">
                <span class="deleteImg">❌</span>
                <img class="picPost"/>
              </div>
              <div class="containerProgress">
                <div class="progress"></div>
              </div>                               
              <div class="container padding theme-d5 ctn-optpost">               
                  <div class="button theme-d5">
                    <input accept="image/*" type="file" id="uploadImg" class="hide">
                    <label id="icon-photo" for="uploadImg">                    
                      <i class="fa fa-image" ></i>  Photo
                    </laber>                  
                  </div>
                  <div id="ctn-privacy" class="zero-padding inline-grid">
                    <button type="button" id="public-privacy" value="public" class="button theme-d5"><i class="fa fa-globe"></i>  Public</i></button>
                    <button type="button" id="private-privacy" value="private" class="hide button theme-d5"><i class="fa fa-lock"></i>  Private</button>
                  </div>
                  <button type="button" id="privacy" class="button-small theme-d5 zero-padding"><i class="fa fa-caret-down"></i></button>
                  <button type="button" id="btn-post" class="button theme-d1 right button-medium" >Post</button>     
              </div>
            </div>
          </div>
        </div>
        
        <div id="new-post" class=""></div>
        <!-- Post -->

      <!-- End Right Column -->
      </div>

    <!-- End Grid -->
    </div>

  <!-- End Page Container -->
  </div>        
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;

  // evento que despliega el menu en versión mobile
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

  const ctnPrivacy = divElemt.querySelector('#ctn-privacy');
  const privacyOptions = divElemt.querySelector('#privacy');
  const publicMode = divElemt.querySelector('#public-privacy');
  const privateMode = divElemt.querySelector('#private-privacy');

  // evento que muestra las opciones de privacidad
  privacyOptions.addEventListener('click', () => {
    if (publicMode.classList.contains('hide')) {
      publicMode.classList.remove('hide');
    }
    if (privateMode.classList.contains('hide')) {
      privateMode.classList.remove('hide');
    }
  });

  // evento que selecciona el modo público
  publicMode.addEventListener('click', () => {
    publicMode.classList.remove('hide');
    privateMode.classList.add('hide');
    ctnPrivacy.appendChild(privateMode);
  });

  // evento que selecciona el modo privado
  privateMode.addEventListener('click', () => {
    publicMode.classList.add('hide');
    privateMode.classList.remove('hide');
    ctnPrivacy.appendChild(publicMode);
  });

  const btnPost = divElemt.querySelector('#btn-post');
  const divImg = divElemt.querySelector('.divImg');

  // evento del botón post
  btnPost.addEventListener('click', () => {
    const inputPost = divElemt.querySelector('#input-post').value;
    // const pic = divElemt.querySelector('.picPost');
    // pic.classList.add('hide');
    // console.log('photo: ', photo);
    console.log(inputPost);
    divImg.classList.add('hide');
    if (!inputPost.trim()) {
      console.log('input vacío');
      return;
    }
    if (publicMode.classList.contains('hide')) {
      createPost(inputPost, userNow, privateMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'));
      divElemt.querySelector('#input-post').value = '';
      const pic = divElemt.querySelector('.picPost');
      pic.classList.add('hide');
    } else {
      createPost(inputPost, userNow, publicMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'));
      divElemt.querySelector('#input-post').value = '';
    }
  });

  postsMain().onSnapshot((query) => {
    const newPost = divElemt.querySelector('#new-post');
    let idDoc;
    newPost.innerHTML = '';
    query.forEach((doc) => {
      if (doc.data().idUser === userNow.uid && doc.data().privacy !== 'private') {
        // if (doc.data().urlImg === undefined) {
        idDoc = doc.id;
        newPost.innerHTML += `
          <div class="container card white round margin"><br>
            <img src=${doc.data().photo} alt="Avatar" class="avatar left circle margin-right">
            <span class="options-post right opacity"><i class="fa fa-ellipsis-h"></i></span>  
            <div idPost=${idDoc} class="tooltip hide inline-grid theme-d3">
              <span idPost=${idDoc} class="edit-post opacity"><i class="fa fa-edit"> Editar</i></span>
              <span idPost=${idDoc} class="delete-post opacity"><i class="fa fa-trash-o"> Eliminar</i></span>
            </div>
            <h4 class="h4">${doc.data().username}</h4>
            <span class="opacity">${doc.data().date}</span>
            <span class="opacity"><i class="fa fa-globe"></i></span>
            <br>
            <hr class="clear">
            <span idPost=${idDoc} class="right save-post opacity hide"><i class="fa fa-save"></i></span>
            <p id="post-${idDoc}" class="margin-top">${doc.data().post}</p> 
            <img class="${typeof doc.data().urlImg !== 'undefined' && doc.data().urlImg !== 'null' ? '' : 'hide'}" 
            src=${typeof doc.data().urlImg !== 'undefined' && doc.data().urlImg !== 'null' ? doc.data().urlImg : ''} 
            style="width:100%">
            <hr class="clear">
            <br>
            <button type="button" class="button theme-d1 margin-bottom btn-like"><i class="fa fa-thumbs-up"></i>  Like</button> 
            <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
          </div>
          `;
      } else if (doc.data().idUser !== userNow.uid && doc.data().privacy !== 'private') {
        newPost.innerHTML += `
        <div class="container card white round margin"><br>
        <img src=${doc.data().photo} alt="Avatar" class="avatar left circle margin-right">
        <h4 class="h4">${doc.data().username}</h4>
        <span class="opacity">${doc.data().date}</span>
        <span class="opacity"><i class="fa fa-globe"></i></span>
        <br>
        <hr class="clear">
        <p>${doc.data().post}</p>
        <hr class="clear">
        <br>
        <button type="button" class="button theme-d1 margin-bottom btn-like"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div>
        `;
      }
      // LIKE A LOS POST
      const btnLikes = newPost.querySelector('.btn-like');
      if (btnLikes) {
        btnLikes.addEventListener('click', () => {
          console.log('Di Like al Post!');
          console.log('doc.id: ', doc.id);
          console.log('userId: ', userNow.uid);
          addLikePost(doc.id, userNow.uid);
        });
      }
    });

    const bntOptPost = divElemt.querySelectorAll('.options-post');
    const bntEditPost = divElemt.querySelectorAll('.edit-post');
    const bntSavePost = divElemt.querySelectorAll('.save-post');
    const bntDeletePost = divElemt.querySelectorAll('.delete-post');

    // asigna el evento de desplegar las opciones de editar y eliminar a todos los posts
    if (bntOptPost.length) {
      bntOptPost.forEach((btnOptions) => {
        btnOptions.addEventListener('click', () => {
          const ctnOpt = btnOptions.parentNode.querySelector('.tooltip');
          if (ctnOpt.classList.contains('hide')) {
            ctnOpt.classList.remove('hide');
          } else {
            ctnOpt.classList.add('hide');
          }
        });
      });
    }

    // asigna el evento de editar post a todos los posts
    if (bntEditPost.length) {
      bntEditPost.forEach((btnEdit) => {
        btnEdit.addEventListener('click', () => {
          const idPost = btnEdit.getAttribute('idPost');
          const textPost = divElemt.querySelector(`#post-${idPost}`);
          textPost.setAttribute('contenteditable', 'true');
          textPost.focus();
          const ctnOpt = btnEdit.parentNode.parentNode.querySelector('.tooltip');
          const btnSave = btnEdit.parentNode.parentNode.querySelector('.save-post');
          if (ctnOpt.classList.contains('hide') === false) {
            ctnOpt.classList.add('hide');
          }
          if (btnSave.classList.contains('hide')) {
            btnSave.classList.remove('hide');
          }
        });
      });
    }

    // asigna el evento de guardar post editado a todos los posts
    if (bntSavePost.length) {
      bntSavePost.forEach((btnSave) => {
        btnSave.addEventListener('click', () => {
          const idPost = btnSave.getAttribute('idpost');
          const textPost = divElemt.querySelector(`#post-${idPost}`);
          textPost.setAttribute('contenteditable', 'false');
          btnSave.classList.add('hide');
          const lastPost = textPost.innerText;
          editPost(idPost, lastPost);
        });
      });
    }

    // asigna el evento de eliminar post a todos los posts
    if (bntDeletePost.length) {
      bntDeletePost.forEach((btnDelete) => {
        btnDelete.addEventListener('click', () => {
          const idPost = btnDelete.getAttribute('idpost');
          deletePost(idPost);
        });
      });
    }
  });

  // CERRAR SESIÓN 'funcion para boton singOut'
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  // CARGAR LA IMAGEN PARA HACER UN POST
  const btnImg = divElemt.querySelector('#icon-photo');
  btnImg.addEventListener('click', () => {
    console.log('Selecciona la img...!');
    const uploadImg = divElemt.querySelector('#uploadImg');
    uploadImg.addEventListener('change', () => {
      console.log('change');
      if (uploadImg.files && uploadImg.files[0]) {
        const read = new FileReader();
        read.onload = (e) => {
          const pic = divElemt.querySelector('.picPost');
          pic.parentNode.classList.remove('hide');
          pic.setAttribute('src', e.target.result);
          console.log('pic: ', pic);
        };
        read.readAsDataURL(uploadImg.files[0]);
      }
      // subirImagenFirebase()
      //   .then((url) => console.log('url home: ', url))
      //   .catch((error) => {
      //     console.log(error);
      //   });
    });
  });

  return divElemt;
};
