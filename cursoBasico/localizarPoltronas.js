var poltronas =[
    false, true, false, true, true, true, false, true, false
]

function carregarPoltronas() {
    var imagens = document.getElementsByTagName("img")

    for(var i = 0; i < imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src = "https://st3.depositphotos.com/1177973/18792/i/600/depositphotos_187924780-stock-photo-comfortable-armchair-with-tv-remote.jpg"
        }else{
            imagens[i].src="https://i.pinimg.com/originals/68/da/fd/68dafd1e38f314555e2ba1091d653625.jpg    "
        }
    }
}

function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img")
    for(var i = 0; i < imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src="https://images-americanas.b2w.io/produtos/1789583231/imagens/animal-dos-desenhos-animados-poltrona-dobravel-recheado-brinquedos-de-pelucia-sofa-cama-para-criancas-cadeira-de-bebe-chaise-lounge-para-criancas-presente-de-aniversario/1789583329_1_large.jpg"
            
            var confirmPoltrona = confirm(`Deseja selecionar a poltrona ${i + 1}?`)
            poltronas[i] = false
            if(confirmPoltrona){
                break
            }else{
                imagens[i].src="https://st3.depositphotos.com/1177973/18792/i/600/depositphotos_187924780-stock-photo-comfortable-armchair-with-tv-remote.jpg"
                poltronas[i] = true
            }
        }
    }
}

function selecionarPoltronaCasal(){
    var imagens = document.getElementsByTagName("img")
    for(var i = 0; i < imagens.length; i++){
        if(poltronas[i] && poltronas[i + 1]){
            imagens[i].src="https://images-americanas.b2w.io/produtos/1789583231/imagens/animal-dos-desenhos-animados-poltrona-dobravel-recheado-brinquedos-de-pelucia-sofa-cama-para-criancas-cadeira-de-bebe-chaise-lounge-para-criancas-presente-de-aniversario/1789583329_1_large.jpg"
            imagens[i + 1].src="https://images-americanas.b2w.io/produtos/1789583231/imagens/animal-dos-desenhos-animados-poltrona-dobravel-recheado-brinquedos-de-pelucia-sofa-cama-para-criancas-cadeira-de-bebe-chaise-lounge-para-criancas-presente-de-aniversario/1789583329_1_large.jpg"
            
            var confirmPoltrona = confirm(`Deseja selecionar a poltrona ${i + 1} e a ${i + 2}`)
            poltronas[i] = false
            poltronas[i + 1] = false
            if(confirmPoltrona){
                break
            }else{
                imagens[i].src="https://st3.depositphotos.com/1177973/18792/i/600/depositphotos_187924780-stock-photo-comfortable-armchair-with-tv-remote.jpg"
                imagens[i + 1].src="https://st3.depositphotos.com/1177973/18792/i/600/depositphotos_187924780-stock-photo-comfortable-armchair-with-tv-remote.jpg"
                poltronas[i] = true
                poltronas[i + 1] = true
            }
        }
    }
}


window.onload = function(){
    carregarPoltronas()
}