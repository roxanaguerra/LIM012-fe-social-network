// CREAR LA COLECCION DE POST
export const posts = () => firebase.firestore().collection('post');

// LEER LA COLECCION DE POST
export const readPostPrueba = () => firebase.firestore().collection('post').get();

export const editPost = (id, newPost) => firebase.firestore().collection('post').doc(id).update({
  post: newPost,
});

export const deletePost = id => firebase.firestore().collection('post').doc(id).delete();

const updateUserNamePost = (id, username) => firebase.firestore().collection('post').doc(id).update({
  username,
});

export const updateAllPostUsername = (userId, username) => {
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
