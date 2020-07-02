// eslint-disable-next-line import/no-cycle
import { models } from '../model/model-index.js';
// eslint-disable-next-line import/no-cycle
import { componentsView } from '../view/view-index.js';

export default () => {
  const view = componentsView.register();
  // console.log(view);

  const validateEmail = (email) => {
    // para validar que ingrese un email de acuerdo a su sintaxis
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // REGISTRAR USUARIO
  const registerNewUser = (emailRegister, passwordRegister) => {
    const span = document.querySelector('#span');
    const username = document.querySelector('#name-register').value;
    const profilePhotoDefault = 'https://image.flaticon.com/icons/svg/2919/2919600.svg';
    models.authentication.signUp(emailRegister, passwordRegister)
      .then((result) => {
        const user = result.user;
        const configuration = {
          url: 'https://localhost:5000/#/',
        };
        result.user.sendEmailVerification(configuration)
          .then(() => {
            models.user.createUserData(user.uid, user.email, username, profilePhotoDefault);

            if (user.emailVerified) {
              window.location.hash = '#/home';
            } else {
              span.innerHTML = '*Se envió un correo de verificación';
              models.authentication.signOut();
            }
          }).catch(() => {
            // An error happened.
            // console.log('No se envío correo');
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

  // REGISTRAR USUARIO
  const btnRegister = view.querySelector('#btn-register');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    const username = document.querySelector('#name-register').value;
    const emailRegister = view.querySelector('#email-register').value;
    const passwordRegister = view.querySelector('#password-register').value;
    const validateSintaxEmail = validateEmail(emailRegister);
    const span = document.querySelector('#span');
    // console.log(emailRegister, passwordRegister);
    if (username === '') {
      span.innerHTML = '*Debes ingresar Nombres y Apellidos';
    } else if (emailRegister === '') {
      span.innerHTML = '*Debes ingresar un correo';
    } else if (passwordRegister === '') {
      span.innerHTML = '*Debes ingresar una contraseña';
    } else if (!validateSintaxEmail) {
      span.innerHTML = '*Formato de correo inválido';
    } else {
      registerNewUser(emailRegister, passwordRegister);
    }
    setTimeout(
      // eslint-disable-next-line no-return-assign
      () => (span.innerHTML = ''),
      7000,
    );
  });

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

  // INICIO DE SESIÓN CON GOOGLE
  const btnGoogle = view.querySelector('#google-register');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    // console.log('Google Prueba - register');
    authSignInGoogle();
  });

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

  // INICIO DE SESIÓN CON FACEBOOK
  const btnFacebook = view.querySelector('#facebook-register');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault(); // cancelar el evento de reinicio de formulario
    // console.log('Facebook Prueba');
    authSignInFacebook();
  });

  return view;
};
