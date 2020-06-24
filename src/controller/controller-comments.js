import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

export default (viewPost, userNow, idPost) => {
  const allComments = models.comment.readComment(idPost);
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
    allComments.onSnapshot((query) => {
      const newComment = viewPost.querySelector('#comment-space');
      let idComment;
      newComment.innerHTML = '';
      query.forEach((doc) => {
        const commentUser = doc.data();
        idComment = doc.id;
        const viewComments = componentsView.readComment(idComment, commentUser);
        newComment.appendChild(viewComments);
      });
    });
  };

  return toDoComment();
};
