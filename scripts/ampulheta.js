const ampulheta = { 'elementoHTML': '', 'tempo': '' }

export function configurarTempoDaAmpulheta() {

    let tempo = ampulheta.elementoHTML.value

    if (tempo == '' || tempo <= 0 || tempo > 3) {

        return 1000

    } else {

        return (tempo * 1000)

    }
}

export default ampulheta