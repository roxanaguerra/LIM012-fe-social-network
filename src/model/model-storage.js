// FIREBASE - STORAGE
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

// Create a storage reference from our storage service
export const storageRef = storage.ref();

// Create a child reference
export const imagenRefChild = storageRef.child('photoPost');

// Servicio database
// export const imagenHref = firebase.database().ref().child('imgPost');
export const imagenHref = firebase.firestore().collection('imgPost');

export const deleteFileStorage = (file, uid) => storageRef.child(`photoPost/${uid}/${file}`).delete()
  .then(() => {
    console.log('Se elimino la Imagen!');
  }).catch((error) => {
    console.log('Error al eliminar!', error);
  });

// FIREBASE - STORAGE POST IMAGENES
// AGREGANDO A LA COLECCION IMGPOST, LA NUEVA IMAGEN
export const crearNodoenDBFirebase = ((nombreImg, urlImg) => {
  const userPost = firebase.auth().currentUser;
  imagenHref.add({
    idUser: userPost.uid,
    name: nombreImg,
    url: urlImg,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
});

export const subirImagenFirebase = (imagenASubir, uid) => {
  // const uploadImg = document.querySelector('#uploadImg');
  // console.log(uploadImg.files);
  console.log('Imagen Cargada');
  // const imagenASubir = uploadImg.files[0];
  // console.log(imagenASubir);
  const uploadTask = storage.ref(`photoPosts/${uid}/${imagenASubir.name}`).put(imagenASubir);

  const stateChanged = (snapshot) => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    const progress = document.querySelector('.progress');
    progress.parentNode.classList.add('showProgress');
    progress.innerText = `${percent.toFixed(0)}%`;
    progress.style.width = `${percent}%`;
    console.log(`Upload is ${percent}% done`);
  };
  const messageError = (error) => {
    // Handle unsuccessful uploads
  };
  const imgLoad = () => {
    uploadTask.snapshot.ref.getDownloadURL()
      .then((downloadURL) => {
        // const getUrlImg = () => downloadURL;
        sessionStorage.setItem('imgNewPost', downloadURL);
        const pic = document.querySelector('.picPost');
        pic.parentNode.classList.remove('hide');
        pic.setAttribute('src', downloadURL);
        console.log('Se subio la img con url:', downloadURL);
        // crearNodoenDBFirebase(imagenASubir.name, downloadURL);

        // ELIMINAR LA IMG CARGADA EN EL POST
        const btnDeleteImg = document.querySelector('.deleteImg');
        btnDeleteImg.addEventListener('click', () => {
        // const objFile = sessionStorage.getItem('imgNewPost');
          console.log(imagenASubir.name);
          deleteFileStorage(imagenASubir.name, uid);
          sessionStorage.removeItem('imgNewPost');
          btnDeleteImg.parentNode.classList.add('hide');
          pic.parentNode.classList.add('hide');
        });
      });
    setTimeout(() => {
      const progress = document.querySelector('.progress');
      progress.parentNode.classList.remove('showProgress');
    }, 2500);
  };
  uploadTask.on('state_changed', stateChanged, messageError, imgLoad);
};
