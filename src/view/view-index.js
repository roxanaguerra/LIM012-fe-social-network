// eslint-disable-next-line import/no-cycle
import home from './home.js';
// eslint-disable-next-line import/no-cycle
import register from './register.js';
import login from './login.js';
import errorMessage from './error.js';
// eslint-disable-next-line import/no-cycle
import profile from './profile.js';

export const componentsView = {
  home,
  register,
  login,
  errorMessage,
  profile,
};
