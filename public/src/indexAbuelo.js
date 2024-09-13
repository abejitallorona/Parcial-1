import * as components from './components/indexPadre.js'

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/indexAbuelo.css"/>
        <h1>AnimalVet</h1>
        <patients-board></patients-board>
        `
    }
}

customElements.define('app-container', AppContainer)