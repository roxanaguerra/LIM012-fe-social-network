// eslint-disable-next-line import/no-cycle
import authentication from './model-authentication.js';
import posts from './model-posts.js';
import storage from './model-storage.js';
import user from './model-user.js';

export const models = {
  authentication,
  posts,
  storage,
  user,
};
