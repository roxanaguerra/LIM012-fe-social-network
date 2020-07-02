// eslint-disable-next-line consistent-return
export default (postUser, userNow, idDoc, likes) => {
  const viewEditPost = `<span class="options-post right opacity"><i class="fa fa-ellipsis-h"></i></span>  
    <div idPost=${idDoc} class="tooltip hide inline-grid theme-d3">
      <span idPost=${idDoc} class="edit-post opacity"><i class="fa fa-edit padding-left"> Editar</i></span>
      <span idPost=${idDoc} class="delete-post opacity"><i class="fa fa-trash-o padding-left"> Eliminar</i></span>
    </div>`;
  const viewImgPost = `<img src="${postUser.urlImg}" style="width:100%">`;
  const iconPublic = '<span class=\'opacity\'><i class=\'fa fa-globe\'></i></span>';
  const iconPrivate = ' <span class="opacity"><i class="fa fa-lock"></i></i></span>';
  // const route = window.location.hash;
  const viewPost = `
    <div class="container card white round margin relative"><br>
      <img src=${postUser.photo} alt="Avatar" class="avatar left circle margin-right">
      ${postUser.idUser === userNow.uid ? viewEditPost : ' '}
      <h4 class="h4">${postUser.username}</h4>
      <span class="opacity font-13">${postUser.date}</span>
        ${postUser.privacy === 'public' ? iconPublic : iconPrivate}
      <br>
      <hr class="clear">
      <span idPost=${idDoc} class="right save-post opacity hide"><i class="fa fa-save"></i></span>
      <p id="post-${idDoc}" class="margin-top">${postUser.post}</p> 
      ${typeof postUser.urlImg !== 'undefined' && postUser.urlImg !== null ? viewImgPost : ' '}
      <br>

      <hr class="clear">
      
      <button type="button" class="btn-like ${(likes.indexOf(userNow.uid) === -1) ? 'theme-d1' : 'theme-dd'} button margin-bottom-m"> 
        <i class="fa fa-thumbs-up"></i>Like</button> 
      <p class= "buttonCounter theme-d1 ">${likes.length}</p>
      
      <button type="button" id="comment" class="button theme-d1 margin-bottom-m btn-comment"><i class="fa fa-comment"></i>  Comment</button> 
      <hr class="clear">
      
      <div id="comment-write"></div>
      <div id="comment-space"></div>
    </div>
    `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewPost;
  return divElemt;
};
