export default () => {
  const viewDifferent = `
            <div class="error">          
            <img src="./assets/error2.png" alt="" class="img-error">
              <div class="message-error">
                <h1>Página no encontrada</h1>
                <p>El archivo especificado no se encontró en este sitio web. 
                Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
                <a class="option" id="comment-signin" href="#/">Inicio</a>
              </div>
            </div>
            `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('id', 'message');
  divElemt.innerHTML = viewDifferent;
  return divElemt;
};
