// trayendo las rutas
import { changeView } from './view-controller/router.js'
// Para cambiar la URL
const init = () => {
    changeView(window.location.hash)
    // El evento hashchange es ejecutado cuando el fragmento identificador
    // de la URL ha cambiado (la parte de la URL que continúa despues del simbolo #,
    // incluyendo el símbolo #).
    window.addEventListener('hashchange', () => {
        // traer la ruta despues del Hash
        changeView(window.location.hash);
    })
}
window.addEventListener('load', init);