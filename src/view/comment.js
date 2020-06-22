  const templateWriteComment = (photoUser) => {
  const viewComment = `
      <div class="container card white round margin"><br>
        <img src=${photoUser} alt="Avatar" class="avatar left circle margin-right">
        <div class="container padding flex">
          <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px"></textarea>
        </div>
        <button type="button" id="btn-post" class="button theme-d1 right button-medium" >Post</button>     

      </div>
    `;
    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewComment;
    return divElemt

  };

  const templateReadComment= (photoUser) => {
    const viewComment = `
        <div class="container card white round margin"><br>
          <img src=${photoUser} alt="Avatar" class="avatar left circle margin-right">
          <div class="container padding flex">
            <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px"></textarea>
          </div>
          <button type="button" id="btn-post" class="button theme-d1 right button-medium" >Post</button>     
  
        </div>
      `;
      const divElemt = document.createElement('div');
      divElemt.innerHTML = viewComment;
      return divElemt
  
    };
  export default {
    templateWriteComment,
    templateReadComment
  };
