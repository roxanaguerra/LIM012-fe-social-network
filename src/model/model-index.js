// eslint-disable-next-line import/no-cycle
import authentication from './model-authentication.js';
import posts from './model-posts.js';
import user from './model-user.js';
import comment from './model-comment.js';

export const models = {
  authentication,
  posts,
  user,
  comment,
};
