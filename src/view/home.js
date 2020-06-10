/* eslint-disable no-console */
import {
  createPost,
  postsMain,
} from '../controller/controller-posts.js';
import { readUserProfile } from '../controller/controller-user.js';
import { currentUser } from '../model/model-authentication.js';
import { signOutUser } from '../controller/controller-autentication.js';
// import { readPostPrueba } from '../model/model-posts.js';
import { storageRef, imagenHref } from '../model/model-storage.js';
// import Header from './header.js';

export default () => {
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
      <div class="col m4">
        
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
                <p class="img-photo-post center"></p>
                <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
                <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px" placeholder="What's on your mind?"></textarea>  
              </div>                                          
              <div class="container padding theme-d5">
                  <button type="button" class="button theme-d5"><i class="fa fa-image"></i>  Photo</button> 
                  <button type="button" class="button theme-d5"><i class="fa fa-lock"></i>  Private</button> 
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

  const btnPost = divElemt.querySelector('#btn-post');
  btnPost.addEventListener('click', () => {
    const inputPost = divElemt.querySelector('#input-post').value;
    // const userName = divElemt.querySelector('#userName').value;
    console.log(inputPost);
    if (!inputPost.trim()) {
      console.log('input vacío');
      return;
    }
    divElemt.querySelector('#input-post').value = '';
    createPost(inputPost, userNow);
  });

  postsMain().onSnapshot((query) => {
    const newPost = divElemt.querySelector('#new-post');
    newPost.innerHTML = '';
    query.forEach((doc) => {
      // console.log(doc.data());
      // firebase para acceder a la informaciòn del a
      // rray de mensajes ya generados usar data()
      // Con data se pinta en lenguaje humano los datos en la base de datos,
      // cada console corresponde a cada uno de los documentos
      if (doc.data().uid === userNow.uid) {
        newPost.innerHTML += `
        <div class="container card white round margin"><br>
        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
        <span class="right opacity"><i class="fa fa-edit"></i></span>
        <h4>Ana Wong</h4>
        <span class="opacity">Aquí va fecha Fecha y hora</span>
        <span class="opacity"><i class="fa fa-globe"></i></span>
        <br>
        <hr class="clear">
        <p>${doc.data().post}</p>
        <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div>
        `;
      } else {
        newPost.innerHTML += `
        <div class="container card white round margin"><br>
        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Avatar" class="left circle margin-right" style="width:60px">
        <span class="right opacity"><i class="fa fa-edit"></i></span>
        <h4>${userNow.displayName}</h4>
        <span class="opacity">Aquí va fecha Fecha y hora</span>
        <span class="opacity"><i class="fa fa-globe"></i></span>
        <br>
        <hr class="clear">
        <p>${doc.data().post}</p>
        <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
        <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
      </div>
        `;
      }
    });
  });

  // CERRAR SESIÓN 'funcion para boton singOut'
  const btnCerrar = divElemt.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  // FIREBASE - STORAGE POST IMAGENES
  // AGREGANDO A LA COLECCION IMGPOST, LA NUEVA IMAGEN
  const crearNodoenDBFirebase = ((nombreImg, urlImg) => {
    const userPost = firebase.auth().currentUser;
    imagenHref.add({
      idUser: userPost.uid,
      name: nombreImg,
      url: urlImg,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });

  const subirImagenFirebase = () => {
    const uploadImg = divElemt.querySelector('#uploadImg');
    console.log(uploadImg.files);
    // console.log('Subiendo la Img...!');
    console.log('Imagen Cargada');
    const imagenASubir = uploadImg.files[0];
    console.log(imagenASubir);
    // const name = `${new Date()}-${imagenASubir.name}`;
    // console.log(imagenASubir);
    const uploadTask = storageRef.child(`photoPosts/${imagenASubir.name}`).put(imagenASubir);
    uploadTask.on('state_changed', (snapshot) => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      const progress = document.querySelector('.progress');
      progress.parentNode.classList.add('showProgress');
      progress.innerText = `${percent.toFixed(0)}%`;
      progress.style.width = `${percent}%`;
      console.log(`Upload is ${progress}% done`);
    }, () => {
      // Handle unsuccessful uploads
      const progress = document.querySelector('.progress');
      progress.classList.add('errorMessage');
      progress.innerText = '⚠️ Error al cargar imagen, debe ser menor a 5mb.';
      setTimeout(() => {
        progress.parentNode.classList.remove('showProgress');
        progress.classList.remove('errorMessage');
      }, 3000);
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('Se subio la img con url:', downloadURL);
        crearNodoenDBFirebase(imagenASubir.name, downloadURL);
      });
    });
  };

  // Comente este código porque no tengo en el template #icon-photo y me salia error
  // const btnImg = divElemt.querySelector('#icon-photo');
  // btnImg.addEventListener('click', () => {
  //   console.log('Selecciona la img...!');
  //   const uploadImg = divElemt.querySelector('#uploadImg');
  //   uploadImg.addEventListener('change', subirImagenFirebase, false);
  // });

  return divElemt;
};
