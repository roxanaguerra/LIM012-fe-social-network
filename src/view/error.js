export default () => {
    const viewDifferent = `
            <h2>404</h2>
            <h1>Página no encontrada</h1>
            <p>El archivo especificado no se encontró en este sitio web. 
            Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
            
            <div class="ask-option flex">
            <p class="question" id="comment-register">PRUEBA ERROR - 404</p>
            <a class="option" id="comment-signin" href="#/">Inicio</a>
            </div>
            `;

    const divElemt = document.createElement('div');
    divElemt.setAttribute('id', 'message');
    divElemt.innerHTML = viewDifferent;
    return divElemt;
};