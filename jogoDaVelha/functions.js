//Função para puxar o valor digitado e o id do seu input
function pullValue(id){
    value = document.getElementById(id).value

    testVictory(id, value)
}  

function testVictory(id, value){

    id = Number(id)
    console.log(typeof(id))

    if(id == 5){
        if(document.getElementById(1).value == value  && document.getElementById(9).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
            
        }else if(document.getElementById(3).value == value  && document.getElementById(7).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }else if(document.getElementById(2).value == value && document.getElementById(8).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }else if(document.getElementById(4).value == value && document.getElementById(6).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }
        
    }else if(id == 1 || id == 4 || id == 7){
        if(id == 1){
            if(document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(9).value){
                window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
            }
        }else if(id == 7){
            if(document.getElementById(7).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(3).value){
                window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
            }
        }
        if(document.getElementById(id + 1).value == value  && document.getElementById(id +2).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }else if(document.getElementById(1).value == document.getElementById(4).value  && document.getElementById(4).value == document.getElementById(7).value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }
    }else if(id == 3 || id == 6 || id == 9){
        if(id == 9){
            if(document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(9).value){
                window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
            }
        } else if(id == 3){
            if(document.getElementById(3).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(7).value){
                window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
            }
        }
        if(document.getElementById(id - 1).value == value  && document.getElementById(id -2).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }else if(document.getElementById(3).value == document.getElementById(6).value  && document.getElementById(6).value == document.getElementById(9).value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }
    }else if(id == 2 || id == 8){
        if(document.getElementById(id - 1).value == value  && document.getElementById(id + 1).value == value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }else if(document.getElementById(2).value == document.getElementById(5).value  && document.getElementById(5).value == document.getElementById(8).value){
            window.alert(`Vitória do jogador ${value}`)
            colorizeWinner(value)
        }
    }
}

function colorizeWinner(value){
    for(var i = 1; i <= 9; i++){
        if(document.getElementById(i).value == value){
            document.getElementById(i).style.backgroundColor   = 'aqua'
        }
    }
}