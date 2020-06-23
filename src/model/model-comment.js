// CREAR LA COLECCIÒN DE COMMENT
const comment = () => firebase.firestore().collection('comment');

const createComment = (comments, user, username, photo, idPost) => {
  comment().add({
    comments,
    date: new Date().toLocaleString(),
    idUser: user.uid,
    username,
    photo,
    idPost,
  })
    .then((docRef) => {
      console.log('Document written with ID Comment: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const readComment = (postUid) => comment().where('idPost', '==', postUid).orderBy('date', 'desc');

export default {
  createComment,
  readComment,
};
