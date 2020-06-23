import { componentsView } from '../view/view-index.js';
import { models } from '../model/model-index.js';

export default (viewPost, userNow, idPost) => {
  // const userNow = models.authentication.currentUser();
  // const allComments = models.comment.orderComment();

  const toDoComment = () => {
    const btnComment = viewPost.querySelector('.btn-comment');
    btnComment.addEventListener('click', () => {
      const userPhoto = localStorage.getItem('profileImg');
      const userName = localStorage.getItem('username');
      const viewComment = componentsView.writeComment(userPhoto);
      console.log(viewComment);
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

  };

  return toDoComment();
};
