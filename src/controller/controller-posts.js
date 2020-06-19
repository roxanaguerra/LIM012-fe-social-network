// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';
// eslint-disable-next-line import/no-cycle
// import { controllers } from './controller-index.js';

export default () => {
  const view = componentsView.postView();
  console.log('view: ', view);

  const userNow = models.authentication.currentUser();

  const bntOptPost = view.querySelectorAll('.options-post');
  const bntEditPost = view.querySelectorAll('.edit-post');
  const bntSavePost = view.querySelectorAll('.save-post');
  const bntDeletePost = view.querySelectorAll('.delete-post');

  // ASIGNA EL EVENTO DE DESPLEGAR LAS OPCIONES DE EDITAR Y ELIMINAR A TODOS LOS POSTS
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

  // ASIGNA EL EVENTO DE EDITAR POST A TODOS LOS POSTS
  if (bntEditPost.length) {
    bntEditPost.forEach((btnEdit) => {
      btnEdit.addEventListener('click', () => {
        const idPost = btnEdit.getAttribute('idPost');
        const textPost = view.querySelector(`#post-${idPost}`);
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

  // ASIGNA EL EVENTO DE GUARDAR POST EDITADO A TODOS LOS POSTS
  if (bntSavePost.length) {
    bntSavePost.forEach((btnSave) => {
      btnSave.addEventListener('click', () => {
        const idPost = btnSave.getAttribute('idpost');
        const textPost = view.querySelector(`#post-${idPost}`);
        textPost.setAttribute('contenteditable', 'false');
        btnSave.classList.add('hide');
        const lastPost = textPost.innerText;
        models.editPost(idPost, lastPost);
      });
    });
  }

  // ASIGNA EL EVENTO DE ELIMINAR POST A TODOS LOS POSTS
  if (bntDeletePost.length) {
    bntDeletePost.forEach((btnDelete) => {
      btnDelete.addEventListener('click', () => {
        const idPost = btnDelete.getAttribute('idpost');
        models.deletePost(idPost);
      });
    });
  }

  // PINTAR LOS DOCUMENTOS DE LA COLECCION POST
  models.post.postsMain().onSnapshot((query) => {
    const newPost = view.querySelector('#new-post');
    let idDoc;
    newPost.innerHTML = '';
    query.forEach((doc) => {
      const postUser = doc.data();
      idDoc = doc.id;
      const viewPost = componentsView.postView(postUser, userNow, idDoc);
      newPost.appendChild(viewPost);
    });
  });
  return view;
};
