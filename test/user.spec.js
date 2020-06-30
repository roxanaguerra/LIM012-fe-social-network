import Mockfirebase from 'mock-cloud-firestore';
import { models } from '../src/model/model-index.js';
// import '../_mock_/mock.js';

const fixtureUsers = {
  _collection_: {
    usersData: {
      _doc_: {
        user122: {
          userID: 'user122',
          mail: 'luz@drone.com',
          username: 'Luz Pérez',
          profileImg: 'luz.jpg',
          about: 'Drone user',
        },
      },
    },
  },
};

global.firebase = new Mockfirebase(fixtureUsers, { isNaiveSnapshotListenerEnabled: true });
// TEST CREAR NUEVO USUARIO EN BASE DE DATOS
describe('createUserData: Crear data de usuario', () => {
  it('Debería crear usuario en la base de datos', () => models.user.createUserData('user123', 'user123@mail.com', 'Drone Logistic', 'drone.jpg')
    .then(() => {
      models.user.userProfile('user123')
        .then((doc) => {
          expect(doc.data().username).toBe('Drone Logistic');
        });
    }));
});

// TEST ACTUALIZAR NOMBRE DE USUARIO
describe('updateUserName: Actualizar nombre de usuario', () => {
  it('Debería actualizar el nombre de usuario en la base de datos', () => models.user.updateUserName('user123', 'Service Drone')
    .then(() => {
      models.user.userProfile('user123')
        .then((doc) => {
          expect(doc.data().username).toBe('Service Drone');
        });
    }));
});

// TEST ACTUALIZAR DESCRIPCIÓN DE USUARIO
describe('updateUserAbout: Actualizar nombre de usuario', () => {
  it('Debería actualizar la descripción del usuario en la base de datos', () => models.user.updateUserAbout('user123', 'Delivery service for everyone')
    .then(() => {
      models.user.userProfile('user123')
        .then((doc) => {
          expect(doc.data().about).toBe('Delivery service for everyone');
        });
    }));
});
