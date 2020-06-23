// CREAR LA COLECCIÒN DE COMMENT

const comment = () => firebase.firestore().collection('comment');

const createComment = (comment, user, username, photo) => {
  comment().add({
    // comment,
    date: new Date().toLocaleString(),
    idUser: user.uid,
    username,
    photo,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
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
