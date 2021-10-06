let player1 = {
    name: "Lucas",
    value: "x",
    victories: 0
}
let player2 = {
    name: "Rafa",
    value: "O",
    victories: 0
}
let round = 0
let victory = false

//Função para definir nome e caracter usado por cada jogador
function definePlayers(){
    player1.name = window.prompt('Digite o nome do jogador 1')
    player1.value = window.prompt(`Digite o caracter usado pelo jogador ${player1.name}
    (X ou O)
    `).toUpperCase()

    player2.name = window.prompt('Digite o nome do jogador 2')
    player2.value = window.prompt(`Digite o caracter usado pelo jogador ${player2.name}
    (X ou O)
    `).toUpperCase()
    errWhoPlays()
}

function contRounds(round){
    round++
    console.log(round)
    return round
}

//Função para definir qual jogador esta ativo
function whoPlays(round){
    if(round % 2 == 0){
        playerPlays.innerHTML = `Vez do jogador ${player1.name}(${player1.value})`
    }else{
        playerPlays.innerHTML = `Vez do jogador ${player2.name}(${player2.value})`
    }
    
}

//Função de erros de definir jogadores 
function errWhoPlays(){
    if(player1.value == player2.value){
        window.alert('Erro: Caracteres iguais. Ação sera repetida')
        definePlayers()
    }
    if(player1.name == player2.name){
        window.alert('Erro: Nomes iguais. Ação sera repetida')
        definePlayers()
    }
    if(player1.value != 'X' && player1.value != 'O'){
        window.alert(`Erro: Valor de caracter ${player1.value} do jogador ${player1.name} não aceito. Ação sera repetida`)
        definePlayers()
    }
    if(player2.value != 'X' && player2.value != 'O'){
        window.alert(`Erro: Valor de caracter ${player2.value} do jogador ${player2.name} não aceito. Ação sera repetida`)
        definePlayers()
    }

}