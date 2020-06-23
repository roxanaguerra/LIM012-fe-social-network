import { models } from '../model/model-index.js';
import { componentsView } from '../view/view-index.js';
import comment from '../view/comment.js';
import { controllers } from './controller-index.js';

export default (viewHome) => {
  const userNow = models.authentication.currentUser();
  // const collectionPost = componentsView.postView();


  const eventsUpdateDeletePost = (viewPost) => {
  // ASIGNA EL EVENTO DE DESPLEGAR LAS OPCIONES DE EDITAR Y ELIMINAR A TODOS LOS POSTS
    const btnOptPost = viewPost.querySelector('.options-post');
    if (btnOptPost) {
      btnOptPost.addEventListener('click', () => {
        const ctnOpt = btnOptPost.parentNode.querySelector('.tooltip');
        if (ctnOpt.classList.contains('hide')) {
          ctnOpt.classList.remove('hide');
        } else {
          ctnOpt.classList.add('hide');
        }
      });
    }

    // ASIGNA EL EVENTO DE EDITAR POST A TODOS LOS POSTS
    const bntEditPost = viewPost.querySelector('.edit-post');
    if (bntEditPost) {
      bntEditPost.addEventListener('click', () => {
        const idPost = bntEditPost.getAttribute('idPost');
        const textPost = viewPost.querySelector(`#post-${idPost}`);
        textPost.setAttribute('contenteditable', 'true');
        textPost.focus();
        const ctnOpt = bntEditPost.parentNode.parentNode.querySelector('.tooltip');
        const btnSave = bntEditPost.parentNode.parentNode.querySelector('.save-post');
        if (ctnOpt.classList.contains('hide') === false) {
          ctnOpt.classList.add('hide');
        }
        if (btnSave.classList.contains('hide')) {
          btnSave.classList.remove('hide');
        }
      });
    }

    // ASIGNA EL EVENTO DE GUARDAR POST EDITADO A TODOS LOS POSTS
    const btnSavePost = viewPost.querySelector('.save-post');
    if (btnSavePost) {
      btnSavePost.addEventListener('click', () => {
        const idPost = btnSavePost.getAttribute('idpost');
        const textPost = viewPost.querySelector(`#post-${idPost}`);
        textPost.setAttribute('contenteditable', 'false');
        btnSavePost.classList.add('hide');
        const lastPost = textPost.innerText;
        models.posts.editPost(idPost, lastPost);
      });
    }

    // ASIGNA EL EVENTO DE ELIMINAR POST A TODOS LOS POSTS
    const btnDeletePost = viewPost.querySelector('.delete-post');
    if (btnDeletePost) {
      btnDeletePost.addEventListener('click', () => {
        const idPost = btnDeletePost.getAttribute('idpost');
        models.posts.deletePost(idPost);
      });
    }
  };

  // PINTAR LOS DOCUMENTOS DE LA COLECCION POST
  const ruta = window.location.hash;
  if (ruta === '#/home') {
    models.posts.postsMain((getPost) => {
      const newPost = viewHome.querySelector('#new-post');
      let idDoc;
      newPost.innerHTML = '';
      getPost.forEach((postUser) => {
        // console.log(postUser);
        if (postUser.privacy === 'public') {
          idDoc = postUser.id;
          const viewPost = componentsView.postView(postUser, userNow, idDoc);
          newPost.appendChild(viewPost);
          eventsUpdateDeletePost(viewPost);
          controllers.comment(viewPost, userNow);
          // console.log(controllers.comment(viewPost, userNow));
        }
      });
    });
  } else if (ruta === '#/profile') {
    const user = userNow.uid;
    models.posts.readPostProfile(user, (getpost) => {
      const newPost = viewHome.querySelector('#new-post');
      let idDoc;
      newPost.innerHTML = '';
      getpost.forEach((postUser) => {
        idDoc = postUser.id;
        const viewPost = componentsView.postView(postUser, userNow, idDoc);
        newPost.appendChild(viewPost);
        eventsUpdateDeletePost(viewPost);
        controllers.comment(viewPost, userNow, idDoc);
      });
    });
  }
  return viewHome;
};
