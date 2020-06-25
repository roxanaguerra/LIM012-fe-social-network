import { models } from '../model/model-index.js';
import { componentsView } from '../view/view-index.js';
// eslint-disable-next-line import/no-cycle
import { controllers } from './controller-index.js';

export default (viewHome) => {
  const userNow = models.authentication.currentUser();

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
        if (!lastPost.trim()) {
          // console.log('input vacío');
          return;
        }
        models.posts.editPost(idPost, lastPost);
      });
    }

    // ASIGNA EL EVENTO DE ELIMINAR POST A TODOS LOS POSTS
    const btnDeletePost = viewPost.querySelector('.delete-post');
    if (btnDeletePost) {
      btnDeletePost.addEventListener('click', () => {
        const idPost = btnDeletePost.getAttribute('idpost');
        models.posts.deletePost(idPost);
        models.comment.deleteCommentsPost(idPost);
      });
    }
  };

  // PINTAR LOS POST
  const ruta = window.location.hash;
  const user = userNow.uid;
  let idDoc;
  let likes;
  // console.log(user); // no borrar este console.log pls
  if (ruta === '#/home') {
    models.posts.postsMain((getPost) => {
      const newPost = viewHome.querySelector('#new-post');
      newPost.innerHTML = '';
      getPost.forEach((postUser) => {
        if (postUser.privacy === 'public') {
          idDoc = postUser.id;
          likes = postUser.likes;
          // console.log(likes);
          const viewPost = componentsView.postView(postUser, userNow, idDoc, likes);
          newPost.appendChild(viewPost);
          eventsUpdateDeletePost(viewPost);
          controllers.comment(viewPost, userNow, idDoc);
          controllers.likes(viewPost, likes, user, idDoc);
        }
      });
    });
  } else if (ruta === '#/profile') {
    models.posts.readPostProfile(user, (getPost) => {
      const newPost = viewHome.querySelector('#new-post');
      newPost.innerHTML = '';
      getPost.forEach((postUser) => {
        idDoc = postUser.id;
        likes = postUser.likes;
        const viewPost = componentsView.postView(postUser, userNow, idDoc, likes);
        newPost.appendChild(viewPost);
        eventsUpdateDeletePost(viewPost);
        controllers.comment(viewPost, userNow, idDoc);
        controllers.likes(viewPost, likes, user, idDoc);
      });
    });
  }
  return viewHome;
};
