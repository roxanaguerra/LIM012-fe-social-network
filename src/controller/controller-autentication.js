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

const validateEmail = (email) => {
  // para validar que ingrese un email de acuerdo a su sintáxis
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// REGISTRAR USUARIO
export const registerNewUser = (emailRegister, passwordRegister) => {
  // const view = componentsView.login();
  const span = document.querySelector('#span');
  signUp(emailRegister, passwordRegister)
    .then((userCredential) => {
      console.log('registradx', userCredential);
      window.location.hash = '#/';
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        span.innerHTML = 'Email incorrecto';
      } else if (error.code === 'auth/weak-password') {
        span.innerHTML = 'contraseña insegura Ingrese mínimo 6 caracteres';
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
  signIn(emailLogin, passwordLogin)
    .then((userCredential) => {
      console.log('Bienvenido otra vez', userCredential);
      window.location.hash = '#/home';
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        span.innerHTML = 'Contraseña inválida';
      } else if (error.code === 'auth/invalid-email') {
        // span.innerHTML = '';
        span.innerHTML = 'Correo electrónico incorrecto. Intente otra vez';
      } else if (error.code === 'auth/user-not-found') {
        // span.innerHTML = '';
        span.innerHTML = 'Usario no registrado';
      } else if (error.code === 'auth/too-many-requests') {
        span.innerHTML = 'Refresque la página';
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
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/home';
      console.log('google Sign In');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('Error Google Prueba');
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};

// AUTENTICACIÓN CON FACEBOOK
export const authSignInFacebook = () => {
  signInFacebook()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/home';
      console.log('Facebook Sign In');
    })
    .catch((error) => {
      console.log(error);
      firebase.auth().fetchProvidersForEmail(error.email)
  .then(providers => {
    //providers returns this array -> ["google.com"]
    // You need to sign in the user to that google account
    // with the same email.
    // In a browser you can call:
    // var provider = new firebase.auth.GoogleAuthProvider();
    // provider.setCustomParameters({login_hint: error.email});
    // firebase.auth().signInWithPopup(provider)
    // If you have your own mechanism to get that token, you get it
    // for that Google email user and sign in
    firebase.auth().signInWithCredential(googleCred)
      .then(user => {
        // You can now link the pending credential from the first
        // error.
        user.linkWithCredential(error.credential)
      })
      .catch(error => log(error))
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
