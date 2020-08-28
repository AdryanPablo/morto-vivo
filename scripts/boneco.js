const boneco = { 'elementoHTML': '', 'estadoVital': '' }

export function trocarRostoDoBoneco() {

    boneco.elementoHTML.setAttribute('class', boneco.estadoVital)

}

export default boneco