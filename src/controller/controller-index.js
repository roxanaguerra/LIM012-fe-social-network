// import comments from './controller-comments.js';
// eslint-disable-next-line import/no-cycle
import posts from './controller-posts.js';
import user from './controller-user.js';
// eslint-disable-next-line import/no-cycle
import login from './controller-login.js';
// eslint-disable-next-line import/no-cycle
import register from './controller-register.js';
// eslint-disable-next-line import/no-cycle
import home from './controller-home.js';

export const controllers = {
  // comments,
  posts,
  user,
  login,
  register,
  home,
};
