
// CREAR LA COLECCION DE POST
export const posts = () => firebase.firestore().collection('post');

// LEER LA COLECCION DE POST
export const readPostPrueba = () => firebase.firestore().collection('post').get();

export const editPost = (id, newPost) => firebase.firestore().collection('post').doc(id).update({
  first: newPost,
});

export const increment = firebase.firestore.FielValue.increment(1);

export const deletePost = id => firebase.firestore().collection('post').doc(id).delete();
