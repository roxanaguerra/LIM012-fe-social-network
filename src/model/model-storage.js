// FIREBASE - STORAGE
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = () => firebase.storage();

// Create a storage reference from our storage service
const storageRef = () => storage.ref();

// FUNCION PARA ELIMINAR LA IMG DEL STORAGE, ANTES DE AGREGAR A LA COLECCION POST
const deleteFileStorage = (file, uid) => storageRef.child(`photoPost/${uid}/${file}`).delete()
  .then(() => {
    // console.log('Se elimino la Imagen!');
  }).catch(() => {
    // console.log('Error al eliminar!', error);
  });

export default {
  storage,
  storageRef,
  deleteFileStorage,
};
