class patientCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(){
        return ['nombre', 'especie', 'fecha', 'sintoma', 'state' ]
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this.render()
        if (oldValue !== newValue) {
            this[propName] = propName === 'state' ? newValue === 'true' : newValue
            this.render()
        }
    }

    toggleTask(){
        this.state = !this.state
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/patientCard/patientCard.css">
    
        <li>
        
        <p>${!this.state ? "Pendiente :(" : "Atendido :3"}</p>
            <h3>Nombre: ${this.nombre}</h3>
            <p>Fecha de ingreso: ${this.fecha}</p>
            <p>Especie: ${this.especie}</p>
            <p>Síntomas: ${this.sintoma}</p>
            <p>Atendido:</p>
            <input type="checkbox" ${this.state ? "checked" : ""} class="patient-checkbox">
        </li>
        `

        const checkbox = this.shadowRoot.querySelector('.patient-checkbox')
        checkbox.addEventListener('change', () => this.toggleTask())
    }
}

customElements.define('patient-card', patientCard)
export default patientCard