import { models } from '../model/model-index.js';
import { componentsView } from '../view/view-index.js';

export default (viewHome) => {
  const userNow = models.authentication.currentUser();
  const route = window.location.hash;

  const readUserProfile = (id) => {
    models.user.userProfile(id)
      .then((doc) => {
        if (doc.exists) {
          const username = doc.data().username;
          const profileImg = doc.data().profileImg;
          const about = doc.data().about;
          const userName = viewHome.querySelector('.username');
          const userPhoto = viewHome.querySelector('.img-photo-post');
          const userAbout = viewHome.querySelector('.userabout');
          userName.innerHTML = username;
          userPhoto.innerHTML = `<img class="border circle" alt="Avatar" src="${profileImg}">`;
          userAbout.innerHTML = about;
          localStorage.setItem('username', doc.data().username);
          localStorage.setItem('profileImg', doc.data().profileImg);
        } else {
          console.log('this doc does not exists');
        }
      })
      .catch(() => {

      });
  };

  const eventsUpdateUserDetails = (view) => {
    const userName = view.querySelector('#username');
    const bntEditName = view.querySelector('#edit-name');
    const bntSaveName = view.querySelector('#save-name');
    const userAbout = view.querySelector('#userabout');
    const bntEditAbout = view.querySelector('#edit-about');
    const bntSaveAbout = view.querySelector('#save-about');

    // EVENTO DEL BOTON PARA EDITAR NOMBRE DEL USUARIO
    bntEditName.addEventListener('click', () => {
      userName.setAttribute('contenteditable', 'true');
      userName.focus();
      bntEditName.classList.add('hide');
      bntSaveName.classList.remove('hide');
    });

    // EVENTO DEL BOTON PARA GUARDAR NOMBRE EDITADO DEL USUARIO
    bntSaveName.addEventListener('click', () => {
      userName.setAttribute('contenteditable', 'false');
      bntEditName.classList.remove('hide');
      bntSaveName.classList.add('hide');
      const newName = userName.innerText;
      models.user.updateUserName(userNow.uid, newName);
      models.posts.updateAllPostUsername(userNow.uid, newName);
      readUserProfile(userNow.uid);
    });

    // EVENTO DEL BOTON PARA EDITAR DESCRIPCION DEL USUARIO
    bntEditAbout.addEventListener('click', () => {
      userAbout.setAttribute('contenteditable', 'true');
      userAbout.focus();
      bntEditAbout.classList.add('hide');
      bntSaveAbout.classList.remove('hide');
    });

    // EVENTO DEL BOTON PARA GUARDAR LA DESCRIPCION EDITADA DEL USUARIO
    bntSaveAbout.addEventListener('click', () => {
      userAbout.setAttribute('contenteditable', 'false');
      bntEditAbout.classList.remove('hide');
      bntSaveAbout.classList.add('hide');
      const newAbout = userAbout.innerText;
      models.user.updateUserAbout(userNow.uid, newAbout);
      readUserProfile(userNow.uid);
    });
  };

  readUserProfile(userNow.uid);
  const infoUs = viewHome.querySelector('#userInfo');
  const viewUserInfo = componentsView.user();
  infoUs.appendChild(viewUserInfo);
  if (route === '#/profile') {
    eventsUpdateUserDetails(viewUserInfo);
  }
  return viewHome;
};
