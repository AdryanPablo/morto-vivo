const boneco = { 'elementoHTML': '', 'vivo': 'fas fa-smile', 'morto': 'fas fa-dizzy' }

export function trocarRostoDoBoneco(estado) {

    boneco.elementoHTML.setAttribute('class', boneco[estado])

}

export default boneco