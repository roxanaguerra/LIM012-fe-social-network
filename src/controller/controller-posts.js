/* eslint-disable import/named */
import {
  posts,
  readPostPrueba,
  increment,
} from '../model/model-posts.js';


export const createPost = (post, user, mode) => {
  console.log(user);

  // return new Promise((resolve, reject) => {
  // const user = firebase.auth().currentUser.uid;
  posts().add({
    post,
    date: new Date().toLocaleString(),
    idUser: user.uid,
    username: user.displayName,
    photo: user.photoURL,
    privacy: mode,
    // likes: userObject.like,
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

export const addLike = (id) => {
  const publicationRef = posts.doc(id);
  publicationRef.update({ likes: increment });
};
// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.post);
    });
};
