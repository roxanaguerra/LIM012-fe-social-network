export const createUserData = (id, email, name, photo) => {
  firebase.firestore()
    .collection('usersData').doc(id).set({
      userID: id,
      mail: email,
      username: name,
      profileImg: photo,
      coverImg: '',
      about: '',
    });
};

export const allUsers = () => {
  firebase.firestore()
    .collection('usersData').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
      });
    });
};
