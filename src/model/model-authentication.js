// REGISTRO DE USUARIO
// eslint-disable-next-line max-len
const signUp = (emailRegister, passwordRegister) => firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister);

// INICIO DE SESIÓN
// eslint-disable-next-line max-len
const signIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin);

// CERRAR SESIÓN
const signOut = () => firebase.auth().signOut()
  .then(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('profileImg');
  // console.log('Saliendo...!');
  })
  .catch(() => {
  // console.log(error);
  });

// INICIO DE SESIÓN CON GOOGLE
const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// INICIO DE SESIÓN CON FACEBOOK
const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// DATA DEL USUARIO
const currentUser = () => firebase.auth().currentUser;

export default {
  signUp,
  signIn,
  signOut,
  signInGoogle,
  signInFacebook,
  currentUser,

};
