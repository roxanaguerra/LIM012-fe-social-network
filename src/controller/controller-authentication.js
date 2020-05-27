export const SignInGoogle = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAutnProvider())
    .then((response) => {
      // const infoUser = response;
      console.log(response);
      alert('hola');
    })
    .catch((error) => {
      console.log(error);
    });
};
