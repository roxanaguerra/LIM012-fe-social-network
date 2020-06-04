const firestore = firebase.firestore();
const newPublication = (objectReceived) => new Promise((resolve, reject) => {
  firestore.collection('posts')
    .add({
      userId: objectReceived.userId,
      content: objectReceived.content,
      punctuation: objectReceived.punstuation,
      historyPost: firebase.firestore.FieldValue.increment(),
    });
});
