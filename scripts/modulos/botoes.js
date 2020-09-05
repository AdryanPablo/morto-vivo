const botoes = { 'acionar': '', 'parar': '' }

export function adicionarEvento(botao, funcao) {

    botao.addEventListener('click', funcao)

}

export default botoes