export default () => {
  const viewEditUserName = `<span class="right opacity option-edit" id="edit-name"><i class="fa fa-edit"></i></span>
    <span class="right opacity option-save hide" id="save-name"><i class="fa fa-save"></i></span> `;
  const viewEditUserAbout = `<span class="right opacity option-edit" id="edit-about"> <i class="fa fa-edit"></i></span>
    <span class="right opacity option-save hide" id="save-about"> <i class="fa fa-save"></i></span>`;
  const route = window.location.hash;

  const viewUserInfo = `<!-- Profile photo -->     
    <div class="container theme-d5 background-photo">
    <p class="img-photo-post photo-medium center"></p>
    </div>

    <!-- Description -->     
    <div class="container">
    <div class="flex">
        <h4 class="center username" id="username"></h4>
        ${
  route === '#/profile'
    ? viewEditUserName
    : ' '
}
    </div>
    <div class="flex">
        <p class="theme-d3 userabout" id="userabout"></p>
        ${
  route === '#/profile'
    ? viewEditUserAbout
    : ' '
}
    </div>
    </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewUserInfo;
  return divElemt;
};
