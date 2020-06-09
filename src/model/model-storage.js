// FIREBASE - STORAGE
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

// Create a storage reference from our storage service
export const storageRef = storage.ref();

// Servicio database
// export const imagenHref = firebase.database().ref().child('imgPost');
export const imagenHref = firebase.firestore().collection('imgPost');
