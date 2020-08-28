import acao from './mensagem.js'

const audio = { 'elementoHTML': '', 'vivo': '', 'morto': '' }

export function carregarAudios() {

    audio.vivo = '../audios/vivo.mp3'
    audio.morto = '../audios/morto.mp3'

}

export function atribuirCaminhoDoAudio() {

    audio.elementoHTML.setAttribute('src', audio[acao.mensagem])

}

export function tocarAudio() {

    audio.elementoHTML.play()

}

export function pararAudio() {

    audio.elementoHTML.pause()

}

export default audio