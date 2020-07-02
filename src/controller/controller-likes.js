import { models } from '../model/model-index.js';

export default (viewPost, likes, user, idDoc) => {
  // console.log(viewPost);
  const toDoLike = () => {
    const btnLike = viewPost.querySelector('.btn-like');
    btnLike.addEventListener('click', () => {
      const userLike = likes.indexOf(user);
      if (userLike === -1) {
        likes.push(user);
        models.posts.updateLikes(idDoc, likes);
        // console.log('con like');
      } else {
        likes.splice(user, 1);
        models.posts.updateLikes(idDoc, likes);
        // console.log('sin like');
      }
    });
  };
  return toDoLike();
};
