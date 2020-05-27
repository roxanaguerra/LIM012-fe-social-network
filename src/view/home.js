export default () => {
    const viewHome = `
      <h2>HOLA!</h2>
    `;

    const divElemt = document.createElement('div');
    // divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};