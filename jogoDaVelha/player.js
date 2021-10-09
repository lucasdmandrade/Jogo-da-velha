let Player1 = {
    name: "Lucas",
    value: "x",
    victories: 0
}
let Player2 = {
    name: "Rafa",
    value: "O",
    victories: 0
}
let round = 0
let victory = false
let idVictory = []

//Função para definir nome e caracter usado por cada jogador
function definePlayers(){
    Player1.name = window.prompt('Digite o nome do jogador 1')
    Player1.value = window.prompt(`Digite o caracter usado pelo jogador ${Player1.name}
    (X ou O)
    `).toUpperCase()

    Player2.name = window.prompt('Digite o nome do jogador 2')
    Player2.value = window.prompt(`Digite o caracter usado pelo jogador ${Player2.name}
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
        playerPlays.innerHTML = `Vez do jogador ${Player1.name}(${Player1.value})`
    }else{
        playerPlays.innerHTML = `Vez do jogador ${Player2.name}(${Player2.value})`
    }
    
}

//Função de erros de definir jogadores 
function errWhoPlays(){
    if(Player1.value == Player2.value){
        window.alert('Erro: Caracteres iguais. Ação sera repetida')
        definePlayers()
    }
    if(Player1.name == Player2.name){
        window.alert('Erro: Nomes iguais. Ação sera repetida')
        definePlayers()
    }
    if(Player1.value != 'X' && Player1.value != 'O'){
        window.alert(`Erro: Valor de caracter ${Player1.value} do jogador ${Player1.name} não aceito. Ação sera repetida`)
        definePlayers()
    }
    if(Player2.value != 'X' && Player2.value != 'O'){
        window.alert(`Erro: Valor de caracter ${Player2.value} do jogador ${Player2.name} não aceito. Ação sera repetida`)
        definePlayers()
    }

}