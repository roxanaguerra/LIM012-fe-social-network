import {
  signUp,
  signIn,
  signOut,
  signInGoogle,
  signInFacebook,
} from '../src/model/model-authentication.js';

// configurando firebase mock
// eslint-disable-next-line import/no-unresolved
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

// TEST: REGISTRAR NUEVO USUARIO
describe('auth-signUp: Crear un usuario', () => {
  it('Deberia de registrarse con email prueba2@gmail.com y password prueba2', (done) => {
    signUp('prueba2@gmail.com', 'prueba2')
      .then((user) => {
        expect(user.email).toBe('prueba2@gmail.com');
        expect(user.password).toBe('prueba2');
        done();
      });
  });
});

// TEST: INICIAR SESION
describe('auth-signIn: Iniciar sesion', () => {
  it('Deberia poder iniciar sesion', (done) => {
    signIn('rguerra@gmail.com', 'guerra123')
      .then((user) => {
        expect(user.email).toBe('rguerra@gmail.com');
        expect(user.isAnonymous).toBe(false);
        done();
      });
  });
});

// TEST: CERRAR SESION
describe('auth-signOut: Cerrar sesion', () => {
  it('Deberia de cerrar sesion', () => {
    signOut()
      .then((user) => {
        expect(user).toBe(null);
      });
  });
});

// TEST: INICIAR SESION CON GOOGLE
describe('auth-signInGoogle: Iniciar sesion con Google', () => {
  it('Deberia de iniciar sesion con Google', () => {
    signInGoogle()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      });
  });
});

// TEST: INICIAR SESION CON FACEBOOK
describe('auth-signInFacebook: Iniciar sesion con Facebook', () => {
  it('Deberia de iniciar sesion con Facebook', () => {
    signInFacebook()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      });
  });
});
