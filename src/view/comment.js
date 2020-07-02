/* eslint-disable no-undef */
const templateWriteComment = (photoUser) => {
  const viewComment = `
      <div "generalComment" class="container card white round margin"><br>
        <img src=${photoUser} alt="Avatar" class="avatar left circle margin-right">
        <div id="commnetArea" class="container padding flex">
          <textarea class="textarea2 border-radius padding theme-d3" id="input-comment" cols="45" rows="4" style="width:600px"></textarea>
        </div>
        <button type="button" id="btn-postComment" class="button theme-d1 right button-medium" disabled><i class="fa fa-paper-plane"></i></button>
      </div>
    `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewComment;
  return divElemt;
};

const templateReadComment = (idDoc, commentUser, userNow) => {
  const viewEditComment = `<span class="options-comment right opacity"><i class="fa fa-ellipsis-h"></i></span>  
    <div idComment=${idDoc} class="tooltip-c hide inline-grid ">
      <span idComment=${idDoc} class="edit-comment opacity"><i class="fa fa-edit padding-left"> Editar</i></span>
      <span idComment=${idDoc} class="delete-comment opacity"><i class="fa fa-trash-o padding-left"> Eliminar</i></span>
    </div>`;
  const viewComment = `
        <div class="container-m white round margin-m relative">
            <img src=${commentUser.photo} alt="Avatar" class="avatar-m left circle margin-right">
              <div class="inline-grid" style="width: 82%;">
                <div class="comment-m">
                ${commentUser.idUser === userNow.uid ? viewEditComment : ' '}
                  <h4 class="h4-m">${commentUser.username}</h4>
                  <span idComment=${idDoc} class="right save-comment opacity hide"><i class="fa fa-save"></i></span>
                  <p id="comment-${idDoc}" class="margin-z">${commentUser.comments}</p>
                </div>
                <span class="opacity font-13">${commentUser.date}</span>
              </div>
        </div>
      `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewComment;
  return divElemt;
};
export default {
  templateWriteComment,
  templateReadComment,
};
