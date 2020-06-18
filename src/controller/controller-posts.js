/* eslint-disable import/named */
import {
  posts,
  readPostPrueba,
} from '../model/model-posts.js';
import { storageRef, storage } from '../model/model-storage.js';

// SUBIR LA IMAGEN AL STORAGE, PARA OBTENER LA URL DE LA IMG
export const subirImagenFirebase = () => new Promise((resolve, reject) => {
  const imagenASubir = document.querySelector('#uploadImg').files[0];
  const nameImg = `${+new Date()}- ${imagenASubir.name}`;
  const metadata = { tipoFile: imagenASubir.type };
  const uploadTask = storage.ref().child(nameImg).put(imagenASubir, metadata);
  uploadTask.then((snapshot) => {
    snapshot.ref.getDownloadURL().then((url) => {
      resolve(url);
      console.log('url: ', url);
    }).catch((err) => {
      reject(err);
    });
  });
});

export const createPost = (post, user, mode, username, photo) => {
  console.log(user);
  const imagenASubir = document.querySelector('#uploadImg');
  if (imagenASubir.files[0] === undefined) {
    posts().add({
      post,
      date: new Date().toLocaleString(),
      idUser: user.uid,
      username,
      photo,
      privacy: mode,
      urlImg: '',
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
  } else {
    subirImagenFirebase()
      .then((url) => {
        posts().add({
          post,
          date: new Date().toLocaleString(),
          idUser: user.uid,
          username,
          photo,
          privacy: mode,
          urlImg: url,
          likes: [],
          // likes: userObject.like,
        })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
            // sessionStorage.removeItem('imgNewPost');
            imagenASubir.value = '';
            imagenASubir.dispatchEvent(new Event('change'));
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      });
  }
};

// EL ORDEN COMO QUE SE PINTARAN LOS POST
export const postsMain = () => posts().orderBy('date', 'desc');

// LEER DOCUMENTOS
export const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.post);
    });
};
