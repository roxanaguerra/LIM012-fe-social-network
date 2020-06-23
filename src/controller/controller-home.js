import { models } from '../model/model-index.js';
import { componentsView } from '../view/view-index.js';
import { controllers } from './controller-index.js';

export default () => {
  let view = componentsView.home();
  const userNow = models.authentication.currentUser();

  // EVENTO QUE DESPLIEGA EL MENU EN VERSION MOBILE
  const navbMobile = view.querySelector('#navbar-mobile');
  navbMobile.addEventListener('click', () => {
    const navLinks = view.querySelector('#nav-links');
    if (navLinks.className.indexOf('show') === -1) {
      navLinks.className += ' show';
    } else {
      navLinks.style.display = 'block';
      navLinks.className = navLinks.className.replace(' show', '');
    }
  });

  const ctnPrivacy = view.querySelector('#ctn-privacy');
  const privacyOptions = view.querySelector('#privacy');
  const publicMode = view.querySelector('#public-privacy');
  const privateMode = view.querySelector('#private-privacy');

  // EVENTO QUE MUESTRA LAS OPCIONES DE PRIVACIDAD
  privacyOptions.addEventListener('click', () => {
    if (publicMode.classList.contains('hide')) {
      publicMode.classList.remove('hide');
    }
    if (privateMode.classList.contains('hide')) {
      privateMode.classList.remove('hide');
    }
  });

  // EVENTO QUE SELECCIONA EL MODO PUBLICO
  publicMode.addEventListener('click', () => {
    publicMode.classList.remove('hide');
    privateMode.classList.add('hide');
    ctnPrivacy.appendChild(privateMode);
  });

  // EVENTO QUE SELECCIONA EL MODO PRIVADO
  privateMode.addEventListener('click', () => {
    publicMode.classList.add('hide');
    privateMode.classList.remove('hide');
    ctnPrivacy.appendChild(publicMode);
  });

  const btnPost = view.querySelector('#btn-post');
  const divImg = view.querySelector('.divImg');

  // ALMACENAR EL POST EN LA COLECCION
  btnPost.addEventListener('click', () => {
    const inputPost = view.querySelector('#input-post').value;
    const imagenASubir = view.querySelector('#uploadImg');
    console.log(inputPost);
    divImg.classList.add('hide');
    if (!inputPost.trim()) {
      console.log('input vacío');
      return;
    }
    if (publicMode.classList.contains('hide')) {
      models.posts.createPost(inputPost, userNow, privateMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'), imagenASubir);
      view.querySelector('#input-post').value = '';
      document.getElementById('uploadImg').value = '';
    } else {
      models.posts.createPost(inputPost, userNow, publicMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'), imagenASubir);
      view.querySelector('#input-post').value = '';
      document.getElementById('uploadImg').value = '';
    }
  });

  // CERRAR SESIÓN 'función para boton singOut'
  const btnCerrar = view.querySelector('#btn-cerrar');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    models.authentication.signOutUser();
  });

  // CARGAR LA IMAGEN PARA HACER UN POST
  const btnImg = view.querySelector('#icon-photo');
  btnImg.addEventListener('click', () => {
    console.log('Selecciona la img...!');
    const uploadImg = view.querySelector('#uploadImg');
    uploadImg.addEventListener('change', () => {
      console.log('change');
      if (uploadImg.files && uploadImg.files[0]) {
        const read = new FileReader();
        read.onload = (e) => {
          const pic = view.querySelector('.picPost');
          pic.parentNode.classList.remove('hide');
          pic.setAttribute('src', e.target.result);
          console.log('pic: ', pic);
        };
        read.readAsDataURL(uploadImg.files[0]);
      }
    });
  });

  controllers.user(view);
  view = controllers.posts(view);
  return view;
};
