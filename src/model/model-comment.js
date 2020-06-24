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

const readComment = postUid => comment().where('idPost', '==', postUid).orderBy('date', 'desc');

const editComment = (id, newComment) => comment().doc(id).update({
  comments: newComment,
});

const deleteComment = id => comment().doc(id).delete();

const updateUserNameComment = (id, username) => comment().doc(id).update({
  username,
});

const updateAllCommentsUsername = (userId, username) => {
  comment().get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().idUser === userId) {
          updateUserNameComment(doc.id, username);
        }
      });
    });
};

export default {
  createComment,
  readComment,
  editComment,
  deleteComment,
  updateAllCommentsUsername,
};
