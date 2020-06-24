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
    .then(() => {
      // console.log('Document written with ID Comment: ', docRef.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);
    });
};

const readComment = (postUid, callback) => comment().where('idPost', '==', postUid).orderBy('date', 'desc')
  .onSnapshot((query) => {
    const getComment = [];
    // eslint-disable-next-line no-shadow
    query.forEach((comment) => {
      getComment.push({
        id: comment.id,
        ...comment.data(),
      });
    });
    callback(getComment);
  });

export default {
  createComment,
  readComment,
};
