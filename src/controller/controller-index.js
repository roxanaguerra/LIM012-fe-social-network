// eslint-disable-next-line import/no-cycle
import posts from './controller-posts.js';
import user from './controller-user.js';
// eslint-disable-next-line import/no-cycle
import login from './controller-login.js';
// eslint-disable-next-line import/no-cycle
import register from './controller-register.js';
// eslint-disable-next-line import/no-cycle
import home from './controller-home.js';
import comment from './controller-comments.js';
import likes from './controller-likes.js';

export const controllers = {
  posts,
  user,
  login,
  register,
  home,
  comment,
  likes,
};
