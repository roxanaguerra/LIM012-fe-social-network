// FIREBASE - STORAGE
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = firebase.storage();

// Create a storage reference from our storage service
export const storageRef = storage.ref();

// Create a child reference
export const imagenRefChild = storageRef.child('photoPost');

// FUNCION PARA ELIMINAR LA IMG DEL STORAGE, ANTES DE AGREGAR A LA COLECCION POST
export const deleteFileStorage = (file, uid) => storageRef.child(`photoPost/${uid}/${file}`).delete()
  .then(() => {
    console.log('Se elimino la Imagen!');
  }).catch((error) => {
    console.log('Error al eliminar!', error);
  });
