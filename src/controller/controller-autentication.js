/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import {
  signUp,
  signIn,
  signOut,
  signInGoogle,
  signInFacebook,
  verificationEmail,
} from '../model/model-authentication.js';
import { createUserData } from '../model/model-user.js';

// REGISTRAR USUARIO
export const registerNewUser = (emailRegister, passwordRegister) => {
  const span = document.querySelector('#span');
  const username = document.querySelector('#name-register').value;
  const profilePhotoDefault = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png';
  signUp(emailRegister, passwordRegister)
    .then((result) => {
      const user = result.user;
      verificationEmail()
        .then(() => {
          createUserData(user.uid, user.email, username, profilePhotoDefault);
          span.innerHTML = '*Se envió un correo de verificación';
        }).catch(() => {
        // An error happened.
          console.log('No se envío correo');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/invalid-email':
          span.innerHTML = '*Ingresa un correo válido';
          break;
        case 'auth/weak-password':
          span.innerHTML = '*Ingresa mínimo 6 caracteres';
          break;
        case 'auth/email-already-in-use':
          span.innerHTML = '*Este correo ya está en uso';
          break;
        case 'auth/operation-not-allowed':
          span.innerHTML = '*Comunícate con el administrador';
          break;
        default:
          span.innerHTML = '*Error inesperado';
          break;
      }
      setTimeout(
        // eslint-disable-next-line no-return-assign
        () => (span.innerHTML = ''),
        7000,
      );
    });
};

// INICIAR SESIÓN
export const authSignIn = (emailLogin, passwordLogin) => {
  const span = document.querySelector('#span');
  signIn(emailLogin, passwordLogin)
    .then((result) => {
      const user = result.user;
      if (user.emailVerified) {
        window.location.hash = '#/home';
      } else {
        span.innerHTML = '*Debes validar tu correo';
        signOut();
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
export const authSignInGoogle = () => {
  signInGoogle()
    .then((result) => {
      const user = result.user;
      createUserData(user.uid, user.email, user.displayName, user.photoURL);
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
export const authSignInFacebook = () => {
  signInFacebook()
    .then((result) => {
      const user = result.user;
      createUserData(user.uid, user.email, user.displayName, user.photoURL);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      console.log(error);
    });
};

// CERRAR SESIÓN
export const signOutUser = () => {
  signOut()
    .then(() => {
      console.log('Saliendo...!');
    })
    .catch((error) => {
      console.log(error);
    });
};
