import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

export default (viewPost, userNow, idPost) => {
  const userPhoto = localStorage.getItem('profileImg');
  const userName = localStorage.getItem('username');
  const viewComment = componentsView.writeComment(userPhoto);

  const toDoComment = () => {
    const btnComment = viewPost.querySelector('.btn-comment');
    const toComment = viewPost.querySelector('#comment-write');
    const btnPost = viewComment.querySelector('#btn-postComment');

    // EVENTO PARA ACTIVAR BOTON DE POSTEAR UN COMENTARIO
    const inputComment2 = viewComment.querySelector('#input-comment');
    inputComment2.addEventListener('keyup', () => {
      if (inputComment2.value.length >= 1) {
        btnPost.disabled = false;
      }
    });

    btnComment.addEventListener('click', () => {
      toComment.appendChild(viewComment);
      btnPost.addEventListener('click', () => {
        const inputComment = viewComment.querySelector('#input-comment').value;
        if (!inputComment.trim()) {
          // console.log('comentario vacìo');
        } else {
          models.comment.createComment(inputComment, userNow, userName, userPhoto, idPost);
          viewComment.querySelector('#input-comment').value = '';
          btnPost.disabled = true;
        }
      });
    });

    const eventsUpdateDeleteComment = (view) => {
      const btnOptComment = view.querySelector('.options-comment');
      if (btnOptComment) {
        btnOptComment.addEventListener('click', () => {
          const ctnOpt = btnOptComment.parentNode.querySelector('.tooltip-c');
          if (ctnOpt.classList.contains('hide')) {
            ctnOpt.classList.remove('hide');
          } else {
            ctnOpt.classList.add('hide');
          }
        });
      }

      const btnEditComment = view.querySelector('.edit-comment');
      if (btnEditComment) {
        btnEditComment.addEventListener('click', () => {
          const idComment = btnEditComment.getAttribute('idComment');
          const textPost = view.querySelector(`#comment-${idComment}`);
          textPost.setAttribute('contenteditable', 'true');
          textPost.setAttribute('style', 'width: 90%');
          textPost.focus();
          const ctnOpt = btnEditComment.parentNode.parentNode.querySelector('.tooltip-c');
          const btnSave = btnEditComment.parentNode.parentNode.querySelector('.save-comment');
          if (ctnOpt.classList.contains('hide') === false) {
            ctnOpt.classList.add('hide');
          }
          if (btnSave.classList.contains('hide')) {
            btnSave.classList.remove('hide');
          }
        });
      }

      const btnSaveComment = view.querySelector('.save-comment');
      if (btnSaveComment) {
        btnSaveComment.addEventListener('click', () => {
          const idComment = btnSaveComment.getAttribute('idComment');
          const textComment = view.querySelector(`#comment-${idComment}`);
          textComment.setAttribute('contenteditable', 'false');
          btnSaveComment.classList.add('hide');
          const lastPost = textComment.innerText;
          if (!lastPost.trim()) {
            // console.log('input vacío');
            return;
          }
          models.comment.editComment(idComment, lastPost);
        });
      }

      const btnDeleteComment = view.querySelector('.delete-comment');
      if (btnDeleteComment) {
        btnDeleteComment.addEventListener('click', () => {
          const idComment = btnDeleteComment.getAttribute('idComment');
          models.comment.deleteComment(idComment);
        });
      }
    };

    models.comment.readComment(idPost, (getComment) => {
      const newComment = viewPost.querySelector('#comment-space');
      let idComment;
      newComment.innerHTML = '';
      getComment.forEach((commentUser) => {
        idComment = commentUser.id;
        const viewComments = componentsView.readComment(idComment, commentUser, userNow);
        newComment.appendChild(viewComments);
        eventsUpdateDeleteComment(viewComments);
      });
    });
  };

  return toDoComment();
};
