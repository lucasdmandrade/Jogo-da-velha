//Função para puxar o valor digitado e o id do seu input
function pullValue(x, id){
    value = document.getElementById(id).value

    testVictory(x, id, value)
}  

function testVictory(x, id, value){

    id = Number(id)
    console.log(typeof(id))

    if(id == 5){
        if(document.getElementById(1).value == value  && document.getElementById(9).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(3).value == value  && document.getElementById(7).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(2).value == value && document.getElementById(8).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(4).value == value && document.getElementById(6).value == value){
            window.alert('Vitoria')
        }
    }else if(id == 1 || id == 4 || id == 7){
        if(document.getElementById(id + 1).value == value  && document.getElementById(id +2).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(1).value == document.getElementById(4).value  && document.getElementById(4).value == document.getElementById(7).value){
            window.alert('Vitoria')
        }
    }else if(id == 3 || id == 6 || id == 9){
        if(document.getElementById(id - 1).value == value  && document.getElementById(id -2).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(3).value == document.getElementById(6).value  && document.getElementById(6).value == document.getElementById(9).value){
            window.alert('Vitoria')
        }
    }else if(id == 2 || id == 8){
        if(document.getElementById(id - 1).value == value  && document.getElementById(id + 1).value == value){
            window.alert('Vitoria')
        }else if(document.getElementById(2).value == document.getElementById(5).value  && document.getElementById(5).value == document.getElementById(8).value){
            window.alert('Vitoria')
        }
    }/*else if( id == 1 || id == 3 || id == 7 || id == 9){
        window.alert('Entrou')
        if(document.getElementById(1).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(9).value 
        || document.getElementById(3).value == document.getElementById(5).value && document.getElementById(5).value  == document.getElementById(7).value
        ){
            window.alert('Vitoria')
        }
    }*/
}