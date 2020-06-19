// CREAR LA COLECCION DE POST
const posts = () => firebase.firestore().collection('post');

// LEER LA COLECCION DE POST
const readPostPrueba = () => firebase.firestore().collection('post').get();

const editPost = (id, newPost) => firebase.firestore().collection('post').doc(id).update({
  post: newPost,
});

const deletePost = (id) => firebase.firestore().collection('post').doc(id).delete();

const updateUserNamePost = (id, username) => firebase.firestore().collection('post').doc(id).update({
  username,
});

const updateAllPostUsername = (userId, username) => {
  firebase.firestore()
    .collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().idUser === userId) {
          updateUserNamePost(doc.id, username);
        }
      });
    });
};

// Con arrayUnion(), se pueden agregar elementos a un arreglo
const addLikePost = (idPost, idUser) => firebase.firestore().collection('post')
  .doc(idPost)
  .update({
    likes: firebase.firestore.FieldValue.arrayUnion(idUser),
  });

// SUBIR LA IMAGEN AL STORAGE, PARA OBTENER LA URL DE LA IMG
const subirImagenFirebase = () => new Promise((resolve, reject) => {
  const imagenASubir = document.querySelector('#uploadImg').files[0];
  const nameImg = `${+new Date()}- ${imagenASubir.name}`;
  const metadata = { tipoFile: imagenASubir.type };
  const uploadTask = firebase.storage().ref().child(nameImg).put(imagenASubir, metadata);
  uploadTask.then((snapshot) => {
    snapshot.ref.getDownloadURL().then((url) => {
      resolve(url);
      console.log('url: ', url);
    }).catch((err) => {
      reject(err);
    });
  });
});

const createPost = (post, user, mode, username, photo) => {
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
const postsMain = () => posts().orderBy('date', 'desc');

// LEER DOCUMENTOS
const postRead = () => {
  readPostPrueba()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.post);
    });
};
export default {
  editPost,
  deletePost,
  updateAllPostUsername,
  addLikePost,
  createPost,
  postsMain,
  postRead,
};
