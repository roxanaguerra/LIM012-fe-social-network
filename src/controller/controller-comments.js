import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

export default (viewPost, userNow, idPost) => {
  const userPhoto = localStorage.getItem('profileImg');
  const userName = localStorage.getItem('username');
  const viewComment = componentsView.writeComment(userPhoto);
  
  const toDoComment = () => {
    const btnComment = viewPost.querySelector('.btn-comment');
    const toComment = viewPost.querySelector('#comment-write');
    btnComment.addEventListener('click', () => {
      toComment.appendChild(viewComment);
      const btnPost = viewComment.querySelector('#btn-postComment');
      btnPost.addEventListener('click', () => {
        const inputComment = viewComment.querySelector('#input-comment').value;
        if (!inputComment.trim()) {
          // console.log('comentario vacìo');
        } else {
          models.comment.createComment(inputComment, userNow, userName, userPhoto, idPost);
          viewComment.querySelector('#input-comment').value = '';
        }
      });
    });

    models.comment.readComment(idPost, (getComment) => {
      const newComment = viewPost.querySelector('#comment-space');
      let idComment;
      newComment.innerHTML = '';
      getComment.forEach((commentUser) => {
        // const commentUser = doc.data();
        idComment = commentUser.id;
        const viewComments = componentsView.readComment(idComment, commentUser);
        newComment.appendChild(viewComments);
      });
    });
  };

  return toDoComment();
};
