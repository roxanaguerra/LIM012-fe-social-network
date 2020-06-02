export const users = (uid, email, username, profileImg, coverImg, about) => firebase.firestore().collection('userData').add({
  uid, email, username, profileImg, coverImg, about,
});
