// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';
// eslint-disable-next-line import/no-cycle
import { controllers } from './controller-index.js';

export default () => {
  const view = componentsView.home();
  console.log('view home: ', view);

  const userNow = models.authentication.currentUser();
  console.log('userNow home: ', userNow);
  controllers.user.readUserProfile(userNow.uid);
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
    console.log(inputPost);
    divImg.classList.add('hide');
    if (!inputPost.trim()) {
      console.log('input vacío');
      return;
    }
    if (publicMode.classList.contains('hide')) {
      models.post.createPost(inputPost, userNow, privateMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'));
      view.querySelector('#input-post').value = '';
      const pic = view.querySelector('.picPost');
      pic.classList.add('hide');
    } else {
      models.post.createPost(inputPost, userNow, publicMode.value, localStorage.getItem('username'), localStorage.getItem('profileImg'));
      view.querySelector('#input-post').value = '';
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
  return view;
};
