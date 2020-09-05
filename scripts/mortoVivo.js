import acao, { mostrarMensagem } from './modulos/mensagem.js'
import audio, { atribuirCaminhoDoAudio, tocarAudio, pararAudio } from './modulos/audios.js'
import ampulheta, { configurarTempoDaAmpulheta } from './modulos/ampulheta.js'
import boneco, { trocarRostoDoBoneco } from './modulos/boneco.js'
import botoes, { adicionarEvento } from './modulos/botoes.js'
import sortearNumero from './modulos/sorteio.js'

var ciclo, estado

window.addEventListener('load', configurar)

function configurar() {

    acao.elementoHTML = document.getElementById('acao')
    audio.elementoHTML = document.getElementById('som')
    ampulheta.elementoHTML = document.getElementById('ampulheta')
    boneco.elementoHTML = document.getElementById('boneco')
    botoes.acionar = document.getElementById('acionar')
    botoes.parar = document.getElementById('parar')

    audio.vivo = './audios/vivo.mp3'
    audio.morto = './audios/morto.mp3'

    adicionarEvento(acionar, iniciarJogo)
    adicionarEvento(parar, pararJogo)

}

function iniciarJogo() {

    ampulheta.tempo = configurarTempoDaAmpulheta()
    ciclo = setInterval(mortoVivo, ampulheta.tempo)

}

function pararJogo() {

    clearInterval(ciclo)
    pararAudio()

}

function mortoVivo() {

    let numeroAleatorio = sortearNumero(1)

    switch (numeroAleatorio) {

        case 0:

            estado = 'morto'
            break

        case 1:

            estado = 'vivo'
            break

    }

    mostrarMensagem(estado)
    atribuirCaminhoDoAudio(estado)
    tocarAudio()
    trocarRostoDoBoneco(estado)

}