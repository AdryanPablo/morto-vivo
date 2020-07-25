var acao = { 'elementoHTML': '', 'mensagem': '' }
var audio = { 'elementoHTML': '', 'src': '' }
var ampulheta = { 'elementoHTML': '', 'tempo': '' }
var boneco = { 'elementoHTML': '', 'estadoVital': '' }

var ciclo

window.addEventListener('load', pegarElementosHTML)

function pegarElementosHTML() {

    acao.elementoHTML = document.getElementById('acao')
    audio.elementoHTML = document.getElementById('som')
    ampulheta.elementoHTML = document.getElementById('ampulheta')
    boneco.elementoHTML = document.getElementById('boneco')

}

function iniciarJogo() {

    ampulheta.tempo = configurarTempoDaAmpulheta()
    ciclo = setInterval(mortoVivo, ampulheta.tempo)

}

function configurarTempoDaAmpulheta() {

    let tempo = ampulheta.elementoHTML.value

    if (tempo == '' || tempo <= 0 || tempo > 3) {

        return 1000

    } else {

        return (tempo * 1000)

    }

}

function pararJogo() {

    clearInterval(ciclo)
    pararAudio()

}

function mortoVivo() {

    let numeroAleatorio = sortearNumero(1)

    switch (numeroAleatorio) {

        case 0:

            acao.mensagem = 'Morto'
            audio.src = '../audios/morto.mp3'
            boneco.estadoVital = 'fas fa-dizzy'
            break

        case 1:

            acao.mensagem = 'Vivo'
            audio.src = '../audios/vivo.mp3'
            boneco.estadoVital = 'fas fa-smile'
            break

    }

    mostrarMensagem()
    atribuirCaminhoDoAudio()
    trocarRostoDoBoneco()

}

function sortearNumero(limite) {

    return Math.round(Math.random() * limite)

}

function mostrarMensagem(mensagem) {

    acao.elementoHTML.innerHTML = acao.mensagem

}

function atribuirCaminhoDoAudio() {

    audio.elementoHTML.setAttribute('src', audio.src)
    tocarAudio()

}

function tocarAudio() {

    audio.elementoHTML.play()

}

function pararAudio() {

    audio.elementoHTML.pause()

}

function trocarRostoDoBoneco() {

    boneco.elementoHTML.setAttribute('class', boneco.estadoVital)

}