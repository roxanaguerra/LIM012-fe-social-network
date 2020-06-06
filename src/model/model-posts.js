// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: 'AIzaSyD6lhOl_AzVcrqQ6zx-aqPOhsZ2sp4dLck',
//   authDomain: 'drone-delivery-d84b0.firebaseapp.com',
//   projectId: 'drone-delivery-d84b0',
// });

// const db = firebase.firestore();

// CREAR LA COLECCION DE POST
export const allPostPrueba = (uid, names, post) => firebase.firestore().collection('post').add({
  uid,
  names,
//   profilePicture,
  post,
//   photo: imgPost,
//   privacy,
  // date: datePostDB(),
  // orderDate: orderDate(),
  // likes: [],
});

// LEER LA COLECCION DE POST
export const readPostPrueba = () => firebase.firestore().collection('post').get();
