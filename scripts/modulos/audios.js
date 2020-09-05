var audio = { 'elementoHTML': '', 'vivo': '', 'morto': '' }

export function atribuirCaminhoDoAudio(estado) {

    audio.elementoHTML.setAttribute('src', audio[estado])

}

export function tocarAudio() {

    audio.elementoHTML.play()

}

export function pararAudio() {

    audio.elementoHTML.pause()

}

export default audio