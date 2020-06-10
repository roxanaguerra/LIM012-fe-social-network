export const createUserData = (id, email, name) => {
  firebase.firestore()
    .collection('usersData').doc(id).set({
      userID: id,
      mail: email,
      username: name,
      profileImg: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
      about: 'Drone user',
    });
};

export const allUsers = () => {
  firebase.firestore()
    .collection('usersData').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log('all Data', doc.data());
      });
    });
};

export const userProfile = (id) => {
  const getProfile = firebase.firestore().collection('usersData').doc(id).get();
  return getProfile;
};

export const updateUserName = (id, username) => firebase.firestore().collection('usersData').doc(id).update({
  username,
});

export const updateUserAbout = (id, about) => firebase.firestore().collection('usersData').doc(id).update({
  about,
});
