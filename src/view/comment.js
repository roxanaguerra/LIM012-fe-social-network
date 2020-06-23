/* eslint-disable no-undef */
const templateWriteComment = (photoUser) => {
  const viewComment = `
      <div class="container card white round margin"><br>
        <img src=${photoUser} alt="Avatar" class="avatar left circle margin-right">
        <div class="container padding flex">
          <textarea class="border-radius padding theme-d3" id="input-comment" cols="45" rows="4" style="width:600px"></textarea>
        </div>
        <button type="button" id="btn-postComment" class="button theme-d1 right button-medium" >Post</button>     
        <div id="new-comment">
        </div>
      </div>
    `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewComment;
  return divElemt;
};

const templateReadComment = (idDoc, commentUser) => {
  const viewComment = `
        <div class="container card white round margin"><br>
          <div> 
            <img src=${commentUser.photo} alt="Avatar" class="avatar left circle margin-right">
              <h4 class="h4">${commentUser.username}</h4>
              <span class="opacity">${commentUser.date}</span>
          </div>
          <div class="container padding flex">
            <p id="post-${idDoc}" class="margin-top">${commentUser.comments}</p>
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
