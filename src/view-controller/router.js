import { components } from '../view/view-index.js'
const changeView = (route) => {
    // console.log(route);
    // const id = hash.split('/')[1];
    const container = document.getElementById('general-container');
    container.innerHTML = '';
    switch (route) {
        case '':
        case '#':
        case '#/': { return container.appendChild(components.login()); }
        case '#/register': { return container.appendChild(components.register()); }
        case '#/home': { return container.appendChild(components.home()); }
        default:
            return container.appendChild(components.error())
    }
}

export {changeView}