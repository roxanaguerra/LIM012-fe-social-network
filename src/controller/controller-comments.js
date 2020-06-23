import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

export default (viewPost, userNow, idPost) => {
  // const userNow = models.authentication.currentUser();
  // const allComments = models.comment.orderComment();
  const allComments = models.comment.readComment(idPost);
  const userPhoto = localStorage.getItem('profileImg');
  const userName = localStorage.getItem('username');
  const viewComment = componentsView.writeComment(userPhoto);
  const toDoComment = () => {
    const btnComment = viewPost.querySelector('.btn-comment');
    btnComment.addEventListener('click', () => {
      viewPost.appendChild(viewComment);
      //   console.log('userNow', userNow);
      //   console.log('postUser: ', postUser);
      const btnPost = viewComment.querySelector('#btn-postComment');
      btnPost.addEventListener('click', () => {
        // alert('hola');
        const inputComment = viewComment.querySelector('#input-comment').value;
        if (!inputComment.trim()) {
          console.log('comentario vacìo');
        } else {
          models.comment.createComment(inputComment, userNow, userName, userPhoto, idPost);
          viewComment.querySelector('#input-comment').value = '';
        }
      });
    });
    allComments.onSnapshot((query) => {
      const newComment = viewComment.querySelector('#new-comment');
      let idComment;
      newComment.innerHTML = '';
      query.forEach((doc) => {
        const commentUser = doc.data();
        idComment = doc.id;
        const viewComment = componentsView.readComment(idComment, commentUser);
        newComment.appendChild(viewComment);
      });
    });
  };

  return toDoComment();
};
