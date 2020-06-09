/* eslint-disable import/named */
import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';


export const createPost = (post, user) => {
  console.log(user);

  // return new Promise((resolve, reject) => {
  // const user = firebase.auth().currentUser.uid;
  posts().add({
    post,
    date: new Date(),
    // date: new Date(),
    idUser: user.uid,
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


// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.post);
    });
};
