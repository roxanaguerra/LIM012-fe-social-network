// eslint-disable-next-line import/no-cycle
import authentication from './model-authentication.js';
import post from './model-posts.js';
import storage from './model-storage.js';
import user from './model-user.js';

export const models = {
  authentication,
  post,
  storage,
  user,
};
