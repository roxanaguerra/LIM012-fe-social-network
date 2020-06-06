// REGISTRO DE USUARIO
// eslint-disable-next-line max-len
export const signUp = (emailRegister, passwordRegister) => firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister);

// INICIO DE SESIÓN
// eslint-disable-next-line max-len
export const signIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin);

// CERRAR SESIÓN
export const signOut = () => firebase.auth().signOut();

// INICIO DE SESIÓN CON GOOGLE
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// INICIO DE SESIÓN CON FACEBOOK
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const currentUser = () => firebase.auth().currentUser;

// VERIFICACION DE EMAIL
// eslint-disable-next-line max-len
export const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();
// export const verificationEmail = (config) => firebase.auth().currentUser.sendEmailVerification(config);

// OBSERVADOR
export const observerUser = (user) => firebase.auth().onAuthStateChanged((user));

