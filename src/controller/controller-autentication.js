/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import {
  signUp,
  signIn,
  signOut,
  signInGoogle,
  signInFacebook,
} from '../model/model-authentication.js';
// import { componentsView } from '../view/view-index.js';
import { createUserData } from '../model/model-user.js';
const validateEmail = (email) => {
  // para validar que ingrese un email de acuerdo a su sintaxis
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// REGISTRAR USUARIO
export const registerNewUser = (emailRegister, passwordRegister) => {
  const span = document.querySelector('#span');
  const validateSintaxEmail = validateEmail(emailRegister);
  signUp(emailRegister, passwordRegister)
    .then(() => {
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        span.innerHTML = 'Email incorrecto';
      } else if (error.code === 'auth/weak-password') {
        span.innerHTML = 'contraseña insegura Ingrese mínimo 6 caracteres';
      } else if (!validateSintaxEmail) {
        span.innerHTML = 'error de sintáxis';
      }
      setTimeout(
        () => (span.innerHTML = 'El futuro es hoy...Regístrate'),
        2000,
      );
    });
};

// INICIAR SESIÓN
export const authSignIn = (emailLogin, passwordLogin) => {
  const span = document.querySelector('#span');
  const validateSintaxEmail = validateEmail(emailLogin);
  signIn(emailLogin, passwordLogin)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        span.innerHTML = 'Contraseña inválida';
      } else if (error.code === 'auth/invalid-email') {
        span.innerHTML = 'Correo electrónico incorrecto. Intente otra vez';
      } else if (error.code === 'auth/user-not-found') {
        span.innerHTML = 'Usario no registrado';
      } else if (error.code === 'auth/too-many-requests') {
        span.innerHTML = 'Refresque la página';
      } else if (!validateSintaxEmail) {
        span.innerHTML = 'error de sintáxis';
      }
      setTimeout(
        () => (span.innerHTML = 'Muchos envíos te esperan...'),
        2000,
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
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
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
    .then((resp) => {
      console.log('Saliendo...!', resp);
    })
    .catch((error) => {
      console.log(error);
    });
};
