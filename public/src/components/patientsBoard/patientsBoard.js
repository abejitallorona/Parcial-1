import '../patientCard/patientCard.js'

class patientsBoard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.patients = []
    }

    connectedCallback(){
        this.render()

        const form = this.shadowRoot.querySelector('.patient-form')
        form.addEventListener("submit", (e)=>{
            e.preventDefault()
        
            const nombre = this.shadowRoot.querySelector('.input-nombre').value
            const especie = this.shadowRoot.querySelector('.input-especie').value
            const fecha = this.shadowRoot.querySelector('.input-date').value
            const sintoma = this.shadowRoot.querySelector('.input-sintoma').value

            this.patients.push({nombre, especie, fecha, sintoma, state: false})

            this.addPatient({nombre, especie, fecha, sintoma, state: false})
            
            form.reset()

            if (form.state === false) {
                this.addPatient.push;
            } else {
                this.addPatient
            }
        })
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>Añadir paciente</h2>
        <form class="patient-form">
            <p>Nombre:</p>
            <input type="text" class="input-nombre" required>

            <p>Especie:</p>
            <input type="text"  class="input-especie" required>

            <p>Fecha de ingreso:</p>
            <input type="date"  class="input-date" required>

            <p>Síntomas:</p>
            <input type="text"  class="input-sintoma" required>
            <button>Añadir</button>

            <ul class="patient-container">
        </ul>

        </form>
        `

        this.patients.forEach(task => this.addPatient(this.patients))
    }

    addPatient({nombre, especie, fecha, sintoma, state}){
        
        const patientContainer = this.shadowRoot.querySelector('.patient-container')
        patientContainer.innerHTML += `

        
        <patient-card nombre="${nombre}" 
        especie="${especie}" 
        state="${state}"
        fecha="${fecha}"
        sintoma="${sintoma}"
        ></patient-card>
        `
    }
}

customElements.define('patients-board', patientsBoard)
export default patientsBoard