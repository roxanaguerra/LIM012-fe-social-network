import { userProfile } from '../model/model-user.js';

export const readUserProfile = (id) => {
  userProfile(id)
    .then((doc) => {
      if (doc.exists) {
        const userName = document.querySelector('.username');
        const userPhoto = document.querySelector('.img-photo-post');
        const userAbout = document.querySelector('.userabout');
        // const userCover = document.querySelector('.usercover');
        userName.innerHTML = doc.data().username;
        userPhoto.innerHTML = `<img class="border circle" alt="Avatar" src="${doc.data().profileImg}">`;
        userAbout.innerHTML = doc.data().about;
        // userCover.innerHTML += `<img src="${doc.data().coverImg}" alt="">`;
      } else {
        console.log('this doc does not exists');
      }
    })
    .catch(() => {

    });
};
