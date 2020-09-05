const ampulheta = { 'elementoHTML': '', 'tempo': '' }

export function configurarTempoDaAmpulheta() {

    let tempo = ampulheta.elementoHTML.value
    
    return (tempo == '' || tempo <= 0 || tempo > 3) ? 1000 : (tempo * 1000)

}

export default ampulheta