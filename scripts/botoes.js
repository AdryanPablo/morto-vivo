const botoes = { 'acionar': '', 'parar': '' }

export function adicionarEvento(botao, funcao) {

    return botao.addEventListener('click', funcao)

}

export default botoes