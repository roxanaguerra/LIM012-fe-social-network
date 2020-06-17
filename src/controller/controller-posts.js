/* eslint-disable import/named */
import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';
import { storageRef } from '../model/model-storage.js';

export const createPost = (post, user, mode, username, photo, urlImg) => {
  console.log(user);
  console.log('urlImg: ', urlImg);
  // return new Promise((resolve, reject) => {
  // const user = firebase.auth().currentUser.uid;
  posts().add({
    post,
    date: new Date().toLocaleString(),
    idUser: user.uid,
    username,
    photo,
    privacy: mode,
    urlImg,
    likes: [],
    // likes: userObject.like,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // sessionStorage.removeItem('imgNewPost');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const postsMain = () => posts().orderBy('date', 'desc');

// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach(doc => doc.post);
    });
};

export const upLoadImagePost = (imagenASubir, uid) => {
  storageRef(`photoPosts/${uid}/${imagenASubir.name}`).put(imagenASubir);
};
