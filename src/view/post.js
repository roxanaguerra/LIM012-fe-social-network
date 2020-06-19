// eslint-disable-next-line consistent-return
export default (postUser, userNow, idDoc) => {
  if (postUser.idUser === userNow.uid && postUser.privacy !== 'private') {
    const viewPost = `
    <div class="container card white round margin"><br>
      <img src=${postUser.photo} alt="Avatar" class="avatar left circle margin-right">
      <span class="options-post right opacity"><i class="fa fa-ellipsis-h"></i></span>  
      <div idPost=${idDoc} class="tooltip hide inline-grid theme-d3">
        <span idPost=${idDoc} class="edit-post opacity"><i class="fa fa-edit"> Editar</i></span>
        <span idPost=${idDoc} class="delete-post opacity"><i class="fa fa-trash-o"> Eliminar</i></span>
      </div>
      <h4 class="h4">${postUser.username}</h4>
      <span class="opacity">${postUser.date}</span>
      <span class="opacity"><i class="fa fa-globe"></i></span>
      <br>
      <hr class="clear">
      <span idPost=${idDoc} class="right save-post opacity hide"><i class="fa fa-save"></i></span>
      <p id="post-${idDoc}" class="margin-top">${postUser.post}</p> 
      <img class="${typeof postUser.urlImg !== 'undefined' && postUser.urlImg !== 'null' ? '' : 'hide'}" 
      src=${typeof postUser.urlImg !== 'undefined' && postUser.urlImg !== 'null' ? postUser.urlImg : ''} 
      style="width:100%">
      <hr class="clear">
      <br>
      <button type="button" class="button theme-d1 margin-bottom btn-like"><i class="fa fa-thumbs-up"></i>  Like</button> 
      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
    </div>`;
    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewPost;
    return divElemt;
  } if (postUser.idUser !== userNow.uid && postUser.privacy !== 'private') {
    const viewPost = `<div class="container card white round margin"><br>
      <img src=${postUser.photo} alt="Avatar" class="avatar left circle margin-right">
      <h4 class="h4">${postUser.username}</h4>
      <span class="opacity">${postUser.date}</span>
      <span class="opacity"><i class="fa fa-globe"></i></span>
      <br>
      <hr class="clear">
      <p>${postUser.post}</p>
      <img class="${typeof postUser.urlImg !== 'undefined' && postUser.urlImg !== 'null' ? '' : 'hide'}" 
          src=${typeof postUser.urlImg !== 'undefined' && postUser.urlImg !== 'null' ? postUser.urlImg : ''} 
          style="width:100%">
      <hr class="clear">
      <br>
      <button type="button" class="button theme-d1 margin-bottom btn-like"><i class="fa fa-thumbs-up"></i>  Like</button> 
      <button type="button" class="button theme-d1 margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
    </div>
  `;
    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewPost;
    return divElemt;
  }
};

// // PINTAR LOS DOCUMENTOS DE LA COLECCION POST
// models.post.postsMain().onSnapshot((query) => {
//   const newPost = divElemt.querySelector('#new-post');
//   let idDoc;
//   newPost.innerHTML = '';
//   query.forEach((doc) => {
//     if (postUser.idUser === userNow.uid && postUser.privacy !== 'private') {
//       idDoc = doc.id;
//       newPost.innerHTML +=

//       ;
//     } else if (postUser.idUser !== userNow.uid && postUser.privacy !== 'private') {
//       newPost.innerHTML += `

//       `;
//     }

//   });
// });
