export default () => {
  const viewDifferent = `
  <div class="container content bg-error flex" style="max-width:1400px;">
    <!-- The Grid -->
    <div class="row max-width ">
      
      <div class="flex column col m12">
        <p class="oops">Oops!</p>
        <p class="msg">PÁGINA NO ENCONTRADA</p>
        <h1 class="code">404</h1>
        <button class="btn-error"><a class="link" id="comment-signin" href="#/">Inicio</a></button>
      </div>

    </div>
  </div>
            `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('id', 'message');
  divElemt.innerHTML = viewDifferent;
  return divElemt;
};
