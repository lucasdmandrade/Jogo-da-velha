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
        draw()
    } else {
        crashInputs()
        rotateSpan()
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
        } if (document.getElementById(3).value == value && document.getElementById(7).value == value) {
            victory = alertVictory(id, 3, 7, value);
        } if (document.getElementById(2).value == value && document.getElementById(8).value == value) {
            victory = alertVictory(id, 2, 8, value);
        } if (document.getElementById(4).value == value && document.getElementById(6).value == value) {
            victory = alertVictory(id, 4, 6, value);
        }

    } else if (id == 1 || id == 4 || id == 7) {
        //Diagonal
        if (id == 1) {
            if (document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(9).value) {
                victory = alertVictory(id, 5, 9, value);
            }
            //Diagonal
        } if (id == 7) {
            if (document.getElementById(7).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(3).value) {
                victory = alertVictory(id, 5, 3, value);
            }
        }
        //Lateral
        if (document.getElementById(id + 1).value == value && document.getElementById(id + 2).value == value) {
            victory = alertVictory(id, id + 1, id + 2, value);
        }//Horizontal
        if (document.getElementById(1).value == document.getElementById(4).value && document.getElementById(4).value == document.getElementById(7).value) {
            victory = alertVictory(1, 4, 7, value);
        }
    }  if (id == 3 || id == 6 || id == 9) {
        if (id == 9) {
            if (document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(9).value) {
                victory = alertVictory(id, 1, 5, value);
            }
        }  if (id == 3) {
            if (document.getElementById(3).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(7).value) {
                victory = alertVictory(id, 5, 7, value);
            }
        }
        if (document.getElementById(id - 1).value == value && document.getElementById(id - 2).value == value) {
            victory = alertVictory(id, id - 1, id - 2, value);
        }  if (document.getElementById(3).value == document.getElementById(6).value && document.getElementById(6).value == document.getElementById(9).value) {
            victory = alertVictory(3, 6, 9, value);
        }
    }  if (id == 2 || id == 8) {
        if (document.getElementById(id - 1).value == value && document.getElementById(id + 1).value == value) {
            victory = alertVictory(id, id - 1, id + 1, value);
        }  if (document.getElementById(2).value == document.getElementById(5).value && document.getElementById(5).value == document.getElementById(8).value) {
            victory = alertVictory(2, 5, 8, value);
        }
    }
}

//Função para mostra alerta de vitoria
function alertVictory(id1, id2, id3, value) {

    idVictory.push(id1)
    idVictory.push(id2)
    idVictory.push(id3)

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
        for(var j = 0; j < idVictory.length; j++){
            
            if(i === idVictory[j]){
                console.log(`j = ${idVictory[j]}, i=${i}`)
                square = `quadrado${i}`
                div = document.getElementById(i)
                document.getElementById(`${square}`).innerHTML = `
                    <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
                    value="${div.value}" readonly>
                    <span class="span${i}"><p>${div.value} </p></span>
                    </button>
        `
            break
            }else{
                square = `quadrado${i}`
                div = document.getElementById(i)
                document.getElementById(`${square}`).innerHTML = `
                    <button class="insert" id='${i}' name="${i}" onchange="pullValue(this.id)"
                    value="${div.value}" readonly>
                    <p>${div.value} </p>      
                    </button>
        `
        document.getElementById(i).style.opacity = '80%'
            }
        }
        
        borderCorrect(i, div, square)
        
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
    idVictory = []
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
    document.getElementById(`${i}`).style.borderRadius = '20px'
    } else if(i == 3){
        document.getElementById(`${i}`).style.borderRadius = '20px'  
    }else if(i == 7){
        document.getElementById(`${i}`).style.borderRadius = '20px'  
    
    }else if(i == 9){
        document.getElementById(`${i}`).style.borderRadius = '20px'
    }
}

function rotateSpan(){
    let idVictory2 = []
    //Separando vetor em 2 caso seja vitoria dupla
    console.log(idVictory)
    if(idVictory.length > 3){
        idVictory2 = [idVictory[3], idVictory[4], idVictory[5]]
        idVictory.splice(3, 3)
    }

    idVictory.sort()
    idVictory2.sort()


    console.log(idVictory2)
    console.log(idVictory)
    //Id do elemento repetido
    let doubleRotate = 0
    let doubleId = ''
    doubleId = doubleSpan(idVictory2)

    //
    //INSERIR FUNÇÃO DE TESTE AQUI
    //Vitória dupla 
    if(idVictory2[0] != undefined){
        for(var i = 0; i <3; i++){
            //Linha vertical
            if(idVictory2[2] == idVictory2[1] + 3 && idVictory2[1] == idVictory2[0] +3){
                document.querySelector('.span' + idVictory2[i]).style.transform = 'rotate(360deg)' 
                document.querySelector('.span' + idVictory2[i]).querySelector('p').style.transform = 'rotate(-360deg)'

                //Aumentando span central para ficar do tamanho do quadrado inteiro
                //document.querySelector('.span' + idVictory2[1]).style.height =  '300%'
                doubleRotate = checkIdDouble(idVictory2[1], doubleId, 360, doubleRotate)
                expandedSpan(idVictory[i], 360, i)
            }else//Linha horizontal
            if(idVictory2[2] == idVictory2[1], + 1 && idVictory2[1] == idVictory2[0] +1){
                document.querySelector('.span' + idVictory2[i]).style.transform = 'rotate(90deg)' 
                document.querySelector('.span' + idVictory2[i]).querySelector('p').style.transform = 'rotate(-90deg)'
            
                //Aumentando span central para ficar do tamanho do quadrado inteiro
                //document.querySelector('.span' + idVictory2[1]).style.height =  '300%'
                doubleRotate = checkIdDouble(idVictory2[i], doubleId, 90, doubleRotate)
                expandedSpan(idVictory[i], 90, i)
            }else //Diagonal(1 ate 9)
            if(idVictory2[2] == 9 && idVictory2[0] == 1 && idVictory2[1] == 5){
                document.querySelector('.span' + idVictory2[i]).style.transform = 'rotate(-45deg)' 
                document.querySelector('.span' + idVictory2[i]).querySelector('p').style.transform = 'rotate(45deg)'
    
                //Aumentando span central para ficar do tamanho da diagonal do quadrado inteiro
                //document.querySelector('.span' + 5).style.height =  '423%'
                doubleRotate = checkIdDouble(idVictory2[i], doubleId, -45, doubleRotate)
                expandedSpan(idVictory[i], -45, i)
            }else //Diagonal(3 ate 7)
            if(idVictory2[2] == 7 && idVictory2[0] == 3 && idVictory2[1] == 5){
                document.querySelector('.span' + idVictory2[i]).style.transform = 'rotate(45deg)' 
                document.querySelector('.span' + idVictory2[i]).querySelector('p').style.transform = 'rotate(-45deg)'
    
                //Aumentando span central para ficar do tamanho da diagonal do quadrado inteiro
                //document.querySelector('.span' + 5).style.height =  '423%'
                doubleRotate = checkIdDouble(idVictory2[i], doubleId, 45, doubleRotate)
                expandedSpan(idVictory[i], 45, i)
            }
        }
    }
   
    for(var i = 0; i <3; i++){
        //Linha vertical
        if(idVictory[2] == idVictory[1] + 3 && idVictory[1] == idVictory[0] +3){
            rotate = 360
            document.querySelector('.span' + idVictory[i]).style.transform = 'rotate(360deg)'
            document.querySelector('.span' + idVictory[i]).querySelector('p').style.transform = 'rotate(-360deg)'
            //Aumentando span central para ficar do tamanho do quadrado inteiro
            //document.querySelector('.span' + idVictory[1]).style.height =  '300%'

            correctDoubleSpan(idVictory[i], doubleId, 360, doubleRotate)
            expandedSpan(idVictory[i], 360, i)
        } else
        //Linha horizontal
        if(idVictory[2] == idVictory[1] + 1 && idVictory[1] == idVictory[0] +1){
            document.querySelector('.span' + idVictory[i]).style.transform = 'rotate(90deg)' 
            document.querySelector('.span' + idVictory[i]).querySelector('p').style.transform = 'rotate(-90deg)'

            //Aumentando span central para ficar do tamanho do quadrado inteiro
            //document.querySelector('.span' + idVictory[1]).style.height =  '300%'

            correctDoubleSpan(idVictory[i], doubleId, 90, doubleRotate)
            expandedSpan(idVictory[i], 90, i)
        }else //Diagonal(1 ate 9)
        if(idVictory[2] == 9 && idVictory[0] == 1 && idVictory[1] == 5){
            document.querySelector('.span' + idVictory[i]).style.transform = 'rotate(-45deg)' 
            document.querySelector('.span' + idVictory[i]).querySelector('p').style.transform = 'rotate(45deg)'

            //Aumentando span central para ficar do tamanho da diagonal do quadrado inteiro
            //document.querySelector('.span' + 5).style.height =  '423%'

            correctDoubleSpan(idVictory[i], doubleId, -45, doubleRotate)
            expandedSpan(idVictory[i], -45, i)
        }else //Diagonal(3 ate 7)
        if(idVictory[2] == 7 && idVictory[0] == 3 && idVictory[1] == 5){
            document.querySelector('.span' + idVictory[i]).style.transform = 'rotate(45deg)' 
            document.querySelector('.span' + idVictory[i]).querySelector('p').style.transform = 'rotate(-45deg)'

            //Aumentando span central para ficar do tamanho da diagonal do quadrado inteiro
            correctDoubleSpan(idVictory[i], doubleId, 45, doubleRotate)
            expandedSpan(idVictory[i], 45, i)
        }
    }
}

//Função empate 
function draw(){
    if(round == 9){
        if(confirm('Empate! Deseja jogar mais?')){
            restartGame()
        }
    }
}

//Colocando span duplo 
function doubleSpan(idVictory2){
    for( var i = 0; i < idVictory.length; i++){
        for( var j = 0; j < idVictory2.length; j++){
            if(idVictory[i] === idVictory2[j]){
                square = `quadrado${idVictory[i]}`
                div = document.getElementById(idVictory[i])
                document.getElementById(`${square}`).innerHTML = `
                    <button class="insert" id='${idVictory[i]}' name="${idVictory[i]}" onchange="pullValue(this.id)"
                    value="${div.value}" readonly>
                        <span class="span${idVictory[i]}">
                            <span class="doubleSpan${idVictory[i]}"> 
                                <p>${div.value} </p>
                            </span>
                        </span>
                        
                    </button>
        `
        return idVictory2[j]
            }
        }
    }
}

//Inserir style no span duplo 
function checkIdDouble(id, doubleID, rotate, doubleRotate){
    if(id == doubleID){
        doubleRotate = rotate
        alert(doubleRotate)
        document.querySelector('.doubleSpan' + doubleID).style.transform = `rotate(${rotate}deg)`
        }

        return doubleRotate
}

//Função para corrigir a rotação do double span
function correctDoubleSpan(id, doubleID, rotate,doubleRotate){
    if(id == doubleID){
        document.querySelector('.doubleSpan' + doubleID).style.transform = `rotate(${rotate * -1 + doubleRotate}deg)`
        document.querySelector('.doubleSpan' + doubleID).querySelector('p').style.transform = `rotate(${doubleRotate * -1}deg)`
        
        expandedSpan(id, doubleRotate, 2, true)
    }
}

//Função para aumentar span central 
function expandedSpan(id, rotate, i, check ){
    if(rotate == 90 || rotate == 360 || rotate == 180 || rotate == 0){
        console.log(check)
        document.querySelector('.span' + id).style.height =  '24vh'
        if(check == true){
            document.querySelector('.doubleSpan' + id).style.height =  '24vh'
        }
    } else{
        if(i == 1){
            document.querySelector('.span' + id).style.height =  '103vh'
        }else{
            document.querySelector('.span' + id).style.height =  '30vh'
        }
    }
}