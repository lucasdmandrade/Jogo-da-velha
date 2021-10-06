//Função para puxar o valor digitado e o id do seu input
function pullValue(id){
    value = document.getElementById(id).value

    testVictory(id, value)
    round = contRounds(round)
    if(victory != true){
        whoPlays(round)
    }
}  

//Função para testar a cada clique se o jogador venceu
function testVictory(id, value){

    id = Number(id)
    console.log(typeof(id))

    if(id == 5){
        if(document.getElementById(1).value == value  && document.getElementById(9).value == value){
            victory = colorizeWinner(id, 1, 9, value);  
        }else if(document.getElementById(3).value == value  && document.getElementById(7).value == value){
            victory = colorizeWinner(id, 3, 7, value);  
        }else if(document.getElementById(2).value == value && document.getElementById(8).value == value){
            victory = colorizeWinner(id, 2, 8, value);  
        }else if(document.getElementById(4).value == value && document.getElementById(6).value == value){
            victory = colorizeWinner(id, 4, 6, value);  
        }
        
    }else if(id == 1 || id == 4 || id == 7){
        //Diagonal
        if(id == 1){
            if(document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(9).value){
                victory = colorizeWinner(id, 5, 9, value);  
            }
            //Diagonal
        }else if(id == 7){
            if(document.getElementById(7).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(3).value){
                victory = colorizeWinner(id, 5, 3, value);  
            }
        }
        //Lateral
        if(document.getElementById(id + 1).value == value  && document.getElementById(id +2).value == value){
            victory = colorizeWinner(id, id+1, id+2, value);  
        }//Horizontal
        else if(document.getElementById(1).value == document.getElementById(4).value  && document.getElementById(4).value == document.getElementById(7).value){
            victory = colorizeWinner(1, 4, 7,  value);  
        }
    }else if(id == 3 || id == 6 || id == 9){
        if(id == 9){
            if(document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(9).value){
                victory = colorizeWinner(id, 1, 5, value);  
            }
        } else if(id == 3){
            if(document.getElementById(3).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(7).value){
                victory = colorizeWinner(id, 5, 7, value);  
            }
        }
        if(document.getElementById(id - 1).value == value  && document.getElementById(id -2).value == value){
            victory = colorizeWinner(id, id-1, id-2, value);  
        }else if(document.getElementById(3).value == document.getElementById(6).value  && document.getElementById(6).value == document.getElementById(9).value){
            victory = colorizeWinner(3, 6, 9, value);  
        }
    }else if(id == 2 || id == 8){
        if(document.getElementById(id - 1).value == value  && document.getElementById(id + 1).value == value){
            victory = colorizeWinner(id, id-1, id+1, value);  
        }else if(document.getElementById(2).value == document.getElementById(5).value  && document.getElementById(5).value == document.getElementById(8).value){
            victory = colorizeWinner(2, 5, 8, value);  
        }
    }
}

//Função para colorir os quadrantes alinhados e mostra alerta de vitoria
function colorizeWinner(id1, id2, id3, value){
    document.getElementById(id1).style.backgroundColor   = 'aqua'
    document.getElementById(id2).style.backgroundColor   = 'aqua'
    document.getElementById(id3).style.backgroundColor   = 'aqua'
    
    if(player1.value == value){
        playerPlays.innerHTML = `Vitória do jogador ${player1.name}(${player1.value})`
    }else{
        playerPlays.innerHTML = `Vitória do jogador ${player2.name}(${player2.value})`
    }
    return victory = true
}