import acao, { mostrarMensagem } from './mensagem.js'
import audio, { carregarAudios, atribuirCaminhoDoAudio, tocarAudio, pararAudio } from './audios.js'
import ampulheta, { configurarTempoDaAmpulheta } from './ampulheta.js'
import boneco, { trocarRostoDoBoneco } from './boneco.js'
import botoes, { adicionarEvento } from './botoes.js'
import sortearNumero from './sorteio.js'
import pegarElemento from './elementos.js'

var ciclo

configurar()

window.addEventListener

function configurar() {

    pegarElemento(acao.elementoHTML, 'acao')
    pegarElemento(audio.elementoHTML, 'som')
    pegarElemento(ampulheta.elementoHTML, 'ampulheta')
    pegarElemento(boneco.elementoHTML, 'boneco')
    pegarElemento(botoes.acionar, 'acionar')
    pegarElemento(botoes.parar, 'parar')

    carregarAudios()

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

            acao.mensagem = 'morto'
            boneco.estadoVital = 'fas fa-dizzy'
            break

        case 1:

            acao.mensagem = 'vivo'
            boneco.estadoVital = 'fas fa-smile'
            break

    }

    mostrarMensagem()
    atribuirCaminhoDoAudio()
    tocarAudio()
    trocarRostoDoBoneco()

}