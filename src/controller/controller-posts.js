import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';


export const createPost = (inputPost, id) => {
  // return new Promise((resolve, reject) => {
  // const user = firebase.auth().currentUser.uid;
  posts().add({
    post: inputPost,
    date: new Date(),
    idUser: id,
    // username: userObject.name,
    // privacy: userObject.mode,
    // likes: userObject.like,
    registrationDate: firebase.firestore.FieldValue.Timestamp().fromDate(new Date()),
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
