import { userProfile } from '../model/model-user.js';

export const readUserProfile = (id) => {
  userProfile(id)
    .then((doc) => {
      if (doc.exists) {
        // console.log(doc.data());
        const username = doc.data().username;
        const profileImg = doc.data().profileImg;
        const about = doc.data().about;
        const userName = document.querySelector('.username');
        const userPhoto = document.querySelector('.img-photo-post');
        const userAbout = document.querySelector('.userabout');
        userName.innerHTML = username;
        userPhoto.innerHTML = `<img class="border circle" alt="Avatar" src="${profileImg}">`;
        userAbout.innerHTML = about;
        localStorage.setItem('username', doc.data().username);
        localStorage.setItem('profileImg', doc.data().profileImg);
      } else {
        console.log('this doc does not exists');
      }
    })
    .catch(() => {

    });
};
