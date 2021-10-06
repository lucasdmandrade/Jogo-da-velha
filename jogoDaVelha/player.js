let player1 = {
    name: "Lucas",
    value: "x"
}
let player2 = {
    name: "Rafa",
    value: "O"
}
let round = 0

function definePlayers(){
    player1.name = window.prompt('Digite o nome do jogador 1')
    player1.value = window.prompt(`Digite o caracter usado pelo jogador ${player1.name}`)

    player2.name = window.prompt('Digite o nome do jogador 2')
    player2.value = window.prompt(`Digite o caracter usado pelo jogador ${player2.name}`)
}

function contRounds(round){
    round++
    console.log(round)
    return round
}

function whoPlays(round){
    if(round % 2 == 0){
        playerPlays.innerHTML = `Vez do jogador ${player1.name}(${player1.value})`
    }else{
        playerPlays.innerHTML = `Vez do jogador ${player2.name}(${player2.value})`
    }
    
}