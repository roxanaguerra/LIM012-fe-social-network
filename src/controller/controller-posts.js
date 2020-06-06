import {
  allPostPrueba,
  readPostPrueba,
} from '../model/model-posts.js';

export const postCreado = (inputPost, id, name, mode, like) => {
  allPostPrueba().add({
    post: inputPost,
    date: new Date(),
    idUser: id,
    username: name,
    privacy: mode,
    likes: like,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // eslint-disable-next-line no-param-reassign
      //   inputPost.value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        return doc.first;
        // console.log(`${doc.id} => ${doc.data().first}`);
      });
    });
};
