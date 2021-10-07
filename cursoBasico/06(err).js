//Tratamento de erros(exceções)
//testando codigo(try) e capturando erro(catch) 
//É possivel passar uma instrução para caso ocorra erro com a estrutura finally(após erro)

try{
    var x = a
    var b = x + 10
}catch(e){
    alert(e.toString())
}finally{

}
//Propriedade do erro:
//name(nome do erro)
//message(mensagem de erro)
//toString() (Mensagem + nome)

//Com a palavra reservada throw transformamos um caso em erro
  var x = prompt('Informe um numero maior do que 10')
 try{
    if(x < 10){
        throw"Numero menor do que 10"
    }
 }catch(e){
    alert(e.toString())
 }

 //Palavra with defini escopo 
 var carro ={
     status:{
         cavalos: 150,
         uso: 2
     }
 }
 with(carro.status){
     alert(cavalos)
     alert(uso)
 }