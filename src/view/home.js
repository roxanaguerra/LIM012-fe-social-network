export default () => {
  const viewHome = `
    <p>HOLA!</p>
    <div class="ask-option flex">
        <p class="question" id="comment-register">HOME PRUEBA</p>
        <a class="option" id="comment-signin" href="#/">login</a>
    </div>
  `;

  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;
};