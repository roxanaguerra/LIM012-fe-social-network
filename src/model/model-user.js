const createUserData = (id, email, name, photo) => {
  const addUserCollection = firebase.firestore()
    .collection('usersData').doc(id).set({
      userID: id,
      mail: email,
      username: name,
      profileImg: photo,
      about: 'Drone user',
    });
  return addUserCollection;
};

const userProfile = (id) => {
  const getProfile = firebase.firestore().collection('usersData').doc(id).get();
  return getProfile;
};

const updateUserName = (id, username) => firebase.firestore().collection('usersData').doc(id).update({
  username,
});

const updateUserAbout = (id, about) => firebase.firestore().collection('usersData').doc(id).update({
  about,
});

export default {
  createUserData,
  userProfile,
  updateUserName,
  updateUserAbout,
};
