import {
  allPostPrueba,
  readPostPrueba,
} from '../model/model-posts.js';

export const postCreado = (inputPost) => {
  allPostPrueba().add({
    first: inputPost,
    date: '03/05/2020',
    idUser: 'roxana333',
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
