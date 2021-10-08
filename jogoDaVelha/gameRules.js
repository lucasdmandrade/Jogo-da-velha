//Função para puxar o valor digitado e o id do seu input
function pullValue(id) {
    let button = document.getElementById(id)
    showValue(id, button)
    setValues(id)

    value = document.getElementById(id).value

    testVictory(id, value)
    round = contRounds(round)
    if (victory != true) {
        whoPlays(round)
    } else {
        crashInputs()
        contVictories()
    }
}

//Função para testar a cada clique se o jogador venceu
function testVictory(id, value) {

    id = Number(id)
    console.log(typeof (id))

    if (id == 5) {
        if (document.getElementById(1).value == value && document.getElementById(9).value == value) {
            victory = alertVictory(id, 1, 9, value);
        } else if (document.getElementById(3).value == value && document.getElementById(7).value == value) {
            victory = alertVictory(id, 3, 7, value);
        } else if (document.getElementById(2).value == value && document.getElementById(8).value == value) {
            victory = alertVictory(id, 2, 8, value);
        } else if (document.getElementById(4).value == value && document.getElementById(6).value == value) {
            victory = alertVictory(id, 4, 6, value);
        }

    } else if (id == 1 || id == 4 || id == 7) {
        //Diagonal
        if (id == 1) {
            if (document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(9).value) {
                victory = alertVictory(id, 5, 9, value);
            }
            //Diagonal
        } else if (id == 7) {
            if (document.getElementById(7).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(3).value) {
                victory = alertVictory(id, 5, 3, value);
            }
        }
        //Lateral
        if (document.getElementById(id + 1).value == value && document.getElementById(id + 2).value == value) {
            victory = alertVictory(id, id + 1, id + 2, value);
        }//Horizontal
        else if (document.getElementById(1).value == document.getElementById(4).value && document.getElementById(4).value == document.getElementById(7).value) {
            victory = alertVictory(1, 4, 7, value);
        }
    } else if (id == 3 || id == 6 || id == 9) {
        if (id == 9) {
            if (document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(9).value) {
                victory = alertVictory(id, 1, 5, value);
            }
        } else if (id == 3) {
            if (document.getElementById(3).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(7).value) {
                victory = alertVictory(id, 5, 7, value);
            }
        }
        if (document.getElementById(id - 1).value == value && document.getElementById(id - 2).value == value) {
            victory = alertVictory(id, id - 1, id - 2, value);
        } else if (document.getElementById(3).value == document.getElementById(6).value && document.getElementById(6).value == document.getElementById(9).value) {
            victory = alertVictory(3, 6, 9, value);
        }
    } else if (id == 2 || id == 8) {
        if (document.getElementById(id - 1).value == value && document.getElementById(id + 1).value == value) {
            victory = alertVictory(id, id - 1, id + 1, value);
        } else if (document.getElementById(2).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(8).value) {
            victory = alertVictory(2, 5, 8, value);
        }
    }
}

//Função para mostra alerta de vitoria
function alertVictory(id1, id2, id3, value) {

    if (Player1.value == value) {
        console.log(value)
        playerPlays.innerHTML = `Vitória do jogador: ${Player1.name}(${Player1.value}) </br>
        Em ${Math.round((round + 1) / 2)} rodadas
        `

        Player1.victories += 1
    } else {
        playerPlays.innerHTML = `Vitória do jogador: ${Player2.name}(${Player2.value})</br>
        Em ${Math.round((round + 1) / 2)} rodadas
        `

        Player2.victories += 1
    }
    return victory = true
}

//Função para travar os inputs(Encerrar jogo)
function crashInputs() {
    let square = ''
    let div = ''
    for (var i = 1; i <= 9; i++) {
        square = `quadrado${i}`
        div = document.getElementById(i)
        document.getElementById(`${square}`).innerHTML = `
            <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
            value="${div.value}" readonly>
            <p>${div.value} </p>
            </button>
        `
        borderCorrect(i, div, square)
        
        console.log(div)
    }
}

//Função para setar valores ja inseridos
function setValues(id) {
    square = `quadrado${id}`
    div = document.getElementById(id)
    document.getElementById(`${square}`).innerHTML = `
            <button class="insert" id='${id}' onload="pullValue(this.id)"
            value="${div.value}" style="background-color: ${div.style.backgroundColor};" readonly>
                <p>${div.value} </p>
            </button>
        `
}

//Função para mostrar paragrafo com valor no botão
function showValue(id, button) {
    if (round % 2 == 0) {
        button.value = Player1.value
        document.getElementById(`${id}`).innerHTML = `
    <p> ${Player1.value} </p>
    `
    } else {
        button.value = Player2.value
        document.getElementById(`${id}`).innerHTML = `
    <p> ${Player2.value.substr(0, 1)} </p>
    `
    }
}

//Função para reiniciar jogo
function restartGame() {
    for (var i = 1; i <= 9; i++) {
        square = `quadrado${i}`
        div = document.getElementById(i)
        document.getElementById(`${square}`).innerHTML = `
            <button class="insert" id='${i}' onclick="pullValue(this.id)";">`
    }

    whoPlays(round)
    let playerTransition = Player1
    Player1 = Player2
    Player2 = playerTransition
    return victory = false, round = 0
}

//Função para adicionar  placar 
function contVictories(){
    if(Player1.victories >= Player2.victories){
        scoreBoard.innerHTML = `<h1>Placar</h1>
        <h2>Jogador 1: ${Player1.name} teve ${Player1.victories} vitórias </br>
    Jogador 2: ${Player2.name} teve ${Player2.victories} vitórias</h2>
    `
    }else{
        scoreBoard.innerHTML = `<h1>Placar </h1>
        <h2>Jogador 2: ${Player2.name} teve ${Player2.victories} vitórias </br>
    Jogador 1: ${Player1.name} teve ${Player1.victories} vitórias</h2>
    `
    }
}

//Função para corrigir borda 
function borderCorrect(i, div, square){
    if(i == 1){
        document.getElementById(`${square}`).innerHTML = `
        <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
        value="${div.value}" style= border-top=left-radius: 20px"; readonly>
        <p>${div.value} </p>
        </button>
    `
    } else if(i == 3){
        document.getElementById(`${square}`).innerHTML = `
        <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
        value="${div.value}" style= border-top-right-radius:20px"; readonly>
        <p>${div.value} </p>
        </button>
    `
    }else if(i == 7){
        document.getElementById(`${square}`).innerHTML = `
        <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
        value="${div.value}" style= border-bottom-left-radius: 20px"; readonly>
        <p>${div.value} </p>
        </button>
    `
    }else if(i == 9){
        document.getElementById(`${square}`).innerHTML = `
        <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
        value="${div.value}" style= border-bottom-right-radius: 20px" readonly>
        <p>${div.value} </p>
        </button>
    `
    }
}