/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-cycle
import home from './home.js';
// eslint-disable-next-line import/no-cycle
import register from './register.js';
import login from './login.js';
import errorMessage from './error.js';
// eslint-disable-next-line import/no-cycle
import user from './user.js';
// eslint-disable-next-line import/no-named-as-default
import postView from './post.js';
import comments from './comment.js';


export const componentsView = {
  home,
  register,
  login,
  errorMessage,
  user,
  postView,
  comments,
};
