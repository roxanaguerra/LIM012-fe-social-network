/* eslint-disable import/named */
import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';


export const createPost = (post, user, mode, username, photo) => {
  posts().add({
    post,
    date: new Date().toLocaleString(),
    idUser: user.uid,
    username,
    photo,
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


// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach(doc => doc.post);
    });
};
