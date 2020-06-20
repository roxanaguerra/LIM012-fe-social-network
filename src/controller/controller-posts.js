// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';

export default (viewHome) => {
  const allPosts = models.posts.postsMain();
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
  allPosts.onSnapshot((query) => {
    const newPost = viewHome.querySelector('#new-post');
    let idDoc;
    newPost.innerHTML = '';

    query.forEach((doc) => {
      const postUser = doc.data();
      idDoc = doc.id;
      const viewPost = componentsView.postView(postUser, userNow, idDoc);
      newPost.appendChild(viewPost);
      eventsUpdateDeletePost(viewPost);
    });
  });

  return viewHome;
};
