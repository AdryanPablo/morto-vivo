var ciclo
var tempoDeEspera
var texto
var boneco
var olhos
var boca
var audio

function iniciar () {

    tempoDeEspera = document.getElementById('tempoDeEspera').value
    texto = document.querySelector('span#texto')
    boneco = document.getElementById('boneco')
    olhos = document.getElementById('olhos')
    boca = document.getElementById('boca')
    audio = document.getElementById('som')

    if (tempoDeEspera == '' || tempoDeEspera <= 0 || tempoDeEspera > 5) {

        tempoDeEspera = 1

    }

    tempoDeEspera = tempoDeEspera * 1000

    ciclo = setInterval(mortoVivo, tempoDeEspera)

}

function parar () {

    clearInterval(ciclo)
    audio.pause()

}

function mortoVivo () {

    let númeroAleatório = sortearNúmero(1)
    let estado

    switch (númeroAleatório) {

        case 0:

            estado = 'Morto'

            olhos.innerHTML = 'X X'
            boca.innerHTML = '('

            audio.setAttribute('src', '../audios/morto.mp3')
            audio.play()

            break

        case 1:

            estado = 'Vivo'

            olhos.innerHTML = 'O O'
            boca.innerHTML = ')'

            audio.setAttribute('src', '../audios/vivo.mp3')
            audio.play()

            break

    }

    texto.innerHTML = estado
    boneco.style.visibility = 'visible'

}

function sortearNúmero (quantidade) {

    return Math.round(Math.random() * quantidade)

}