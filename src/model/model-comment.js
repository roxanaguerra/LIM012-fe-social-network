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
      // sessionStorage.removeItem('imgNewPost');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const orderComment = (uid) => comment().where('uid', '==', 'idUser').orderBy('date', 'desc').onSnapshot((query) => {
  console.log(query);

  //   query.forEach(element => {

// });
});

export default {
  createComment,
  orderComment,
};
