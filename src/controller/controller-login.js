// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';

export default () => {
  const view = componentsView.login();

  // INICIAR SESIÓN
  const authSignIn = (emailLogin, passwordLogin) => {
    const span = document.querySelector('#span');
    models.authentication.signIn(emailLogin, passwordLogin)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          window.location.hash = '#/home';
        } else {
          span.innerHTML = '*Debes validar tu correo';
          models.authentication.signOut();
        }
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          span.innerHTML = '*Contraseña inválida';
        } else if (error.code === 'auth/invalid-email') {
          span.innerHTML = '*Correo electrónico incorrecto';
        } else if (error.code === 'auth/user-not-found') {
          span.innerHTML = '*Usario no registrado';
        } else if (error.code === 'auth/too-many-requests') {
          span.innerHTML = '*Refresque la página';
        }
        setTimeout(
        // eslint-disable-next-line no-return-assign
          () => (span.innerHTML = ''),
          7000,
        );
      });
  };

  // AUTENTICACIÓN CON GOOGLE
  const authSignInGoogle = () => {
    models.authentication.signInGoogle()
    // signInGoogle()
      .then((result) => {
        const user = result.user;
        models.user.createUserData(user.uid, user.email, user.displayName, user.photoURL);
        window.location.hash = '#/home';
      })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
      });
  };

  // AUTENTICACIÓN CON FACEBOOK
  const authSignInFacebook = () => {
    models.authentication.signInFacebook()
    // signInFacebook()
      .then((result) => {
        const user = result.user;
        models.user.createUserData(user.uid, user.email, user.displayName, user.photoURL);
        window.location.hash = '#/home';
      })
      .catch(() => {
        // console.log(error);
      });
  };

  const btnLogin = view.querySelector('#btn-login');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailLogin = view.querySelector('#email-login').value;
    const passwordLogin = view.querySelector('#password-login').value;
    const span = view.querySelector('#span');
    if (emailLogin === '') {
      span.innerHTML = '*Debe ingresar su correo';
    } else if (passwordLogin === '') {
      span.innerHTML = '*Debe ingresar su contraseña';
    }
    authSignIn(emailLogin, passwordLogin);
  });

  // INICIO DE SESIÓN CON GOOGLE
  const btnGoogle = view.querySelector('#google-login');
  // console.log('btngoogle: ', btnGoogle);
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    // console.log('Google Prueba');
    authSignInGoogle();
  });

  // INICIO DE SESIÓN CON FACEBOOK
  const btnFacebook = view.querySelector('#facebook-login');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    // console.log('Facebook Prueba');
    authSignInFacebook();
  });

  return view;
};
