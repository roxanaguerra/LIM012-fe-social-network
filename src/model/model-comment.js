//CREAR LA COLECCIÒN DE COMMENT
const comment = () => firebase.firestore().collection('comment');

const createComment = (comment, user, username, photo) => {
    comment().add({
        comment,
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

const orderComment = () => comment().orderBy('date', 'desc');

export default {
    createComment,
    orderComment,
}