// FIREBASE - STORAGE
const storage = firebase.storage();
export const storageRef = storage.ref();
export const imagenHref = firebase.firestore().collection('imgPost');
