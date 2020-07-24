var ciclo
var tempoDeEspera
var acao
var boneco
var olhos
var boca
var audio

function iniciar() {

    tempoDeEspera = document.getElementById('tempoDeEspera').value
    acao = document.querySelector('span#acao')
    audio = document.getElementById('som')

    boneco = document.getElementById('boneco')
    olhos = document.getElementById('olhos')
    boca = document.getElementById('boca')

    if (tempoDeEspera == '' || tempoDeEspera <= 0 || tempoDeEspera > 5) {

        tempoDeEspera = 1

    }

    tempoDeEspera *= 1000

    ciclo = setInterval(mortoVivo, tempoDeEspera)

}

function pararJogo() {

    clearInterval(ciclo)
    audio.pause()

}

function mortoVivo() {

    let numeroAleatorio = sortearNumero(1)
    let mortoOuVivo

    switch (numeroAleatorio) {

        case 0:

            mortoOuVivo = 'Morto'

            olhos.innerHTML = 'X X'
            boca.innerHTML = '('

            audio.setAttribute('src', './morto.mp3')
            audio.play()

            break

        case 1:

            mortoOuVivo = 'Vivo'

            olhos.innerHTML = 'O O'
            boca.innerHTML = ')'

            audio.setAttribute('src', './vivo.mp3')
            audio.play()

            break

    }

    acao.innerHTML = mortoOuVivo
    boneco.style.visibility = 'visible'

}

function sortearNumero(quantidade) {

    return Math.round(Math.random() * quantidade)

}