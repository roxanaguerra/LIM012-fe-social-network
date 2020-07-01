import MockFirebase from 'mock-cloud-firestore';
import { models } from '../src/model/model-index.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        FCwyOleS2ooEYZrGpue3: {
          date: '26/6/2020 11:40:55',
          idUser: 'owe55NuhqjTJKIQQQ4Z98IavJ0i2',
          likes: [],
          photo: 'https://lh5.googleusercontent.com/-wKhdIQgHjwE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnVyZrmN8eeqVDK3xOlucO70BjfoA/photo.jpg',
          post: 'hola',
          privacy: 'public',
          urlImg: '',
          username: 'Rosmery',
          __collection__: {
            comment: {
              __doc__: {
                n7kywoY8ZjI1j8Z8WPnn: {
                  comments: 'que pasò?',
                  date: '25/6/2020 20:27:23',
                  idPost: 'FCwyOleS2ooEYZrGpue3',
                  idUser: 'owe55NuhqjTJKIQQQ4Z98IavJ0i2',
                  photo: 'https://lh5.googleusercontent.com/-wKhdIQgHjwE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnVyZrmN8eeqVDK3xOlucO70BjfoA/photo.jpg',
                  username: 'Rosmery',
                },
              },
            },
          },
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
const idUser = { uid: 'owe55NuhqjTJKIQQQ4Z98IavJ0i2' };
describe('hace comentarios a los post', () => {
  it('Deberia agregar un comentario', (done) => models.comment.createComment('hola de test', idUser, 'Rosmery', 'https://lh5.googleusercontent.com/-wKhdIQgHjwE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnVyZrmN8eeqVDK3xOlucO70BjfoA/photo.jpg', 'FCwyOleS2ooEYZrGpue3')
    .then(() => {
      const callback = (commentss) => {
        // console.log(commentss);
        const result = commentss.find((element) => element.comments === 'hola de test');
        expect(result.idUser).toBe(idUser.uid);
        done();
      };
      models.comment.readComment('FCwyOleS2ooEYZrGpue3', callback);
    }));
});

// const idComment = { id: 'n7kywoY8ZjI1j8Z8WPnn' };
const newComment = { comments: 'Actualizando comentario' };

describe('editecomment', () => {
  it('Deberia de poder editar el contenido de un comentario', (done) => models.comment.editComment('n7kywoY8ZjI1j8Z8WPnn', newComment.comments)
    .then(() => {
      const callback = (commentss) => {
        const result = commentss.find((element) => element.id === 'n7kywoY8ZjI1j8Z8WPnn');
        expect(result.comments).toBe(newComment.comments);
        done();
      };
      models.comment.readComment('FCwyOleS2ooEYZrGpue3', callback);
    }));
});

describe('updateAllCommentsUsername', () => {
  it('Deberia de poder actualizar el userName en todos sus comments', (done) => models.comment.updateAllCommentsUsername(idUser.uid, 'RosmeryNew')
    .then(() => {
      const callback = (commentss) => {
        const result = commentss.find((element) => element.idUser === idUser.uid);
        expect(result.username).toBe('RosmeryNew');
        done();
      };
      models.comment.readComment('FCwyOleS2ooEYZrGpue3', callback);
    }));
});
// const idUser = { uid: 'we55NuhqjTJKIQQQ4Z98IavJ0i2' };

describe('DeleteComment', () => {
  it('Deberia de poder eliminar un comentario', (done) => models.comment.deleteCommentsPost('FCwyOleS2ooEYZrGpue3', 'n7kywoY8ZjI1j8Z8WPnn')
    .then(() => {
      const callback = (commentss) => {
        const result = commentss.find((element) => element.id === 'n7kywoY8ZjI1j8Z8WPnn');
        expect(result).toBeUndefined();
        done();
      };
      models.comment.readComment('FCwyOleS2ooEYZrGpue3', callback);
    }));
});
