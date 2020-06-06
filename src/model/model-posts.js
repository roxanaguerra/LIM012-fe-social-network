// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: 'AIzaSyD6lhOl_AzVcrqQ6zx-aqPOhsZ2sp4dLck',
//   authDomain: 'drone-delivery-d84b0.firebaseapp.com',
//   projectId: 'drone-delivery-d84b0',
// });

// const db = firebase.firestore();

export const allPostPrueba = () => firebase.firestore().collection('post');

export const readPostPrueba = () => firebase.firestore().collection('post').get();

export const editPost = (id, newPost) => firebase.firestore().collection('post').doc(id).update({
  first: newPost,
});

export const deletePost = id => firebase.firestore().collection('post').doc(id).delete();
