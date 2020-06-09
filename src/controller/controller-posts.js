import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';


export const createPost = (user) => {
  // return new Promise((resolve, reject) => {
  // const user = firebase.auth().currentUser.uid;
  posts().add({
    post: user.inputPost,
    // date: new Timestamp(),
    // date: new Date(),
    idUser: user.id,
    username: user.displayName,
    photo: user.photoURL,
    // privacy: userObject.mode,
    // likes: userObject.like,
    // registrationDate: firebase.firestore.FieldValue.Timestamp(),
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  // });
};

export const postsMain = () => posts().orderBy('date', 'desc');


export const getPublications = () => posts.collection('post').orderBy('date', 'desc');
// export default { createPost, getPublications };


// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.post);
    });
};
