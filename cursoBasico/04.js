//Operadores logicos para variaveis 
var logico 
var num1 = 25 
var num2 = 30

//OPERADOR LOGICO E
//Variavel recebe resulto logico da operação 
logico = (num1 != num2) && (num1 < num2)
document.write(logico +'<br/>')

num1 = 30
logico = (num1 != num2) && (num1 < num2)
document.write(logico +'<br/>')

//CASO ESPECIAL 
//Se o primeiro operando for Calculo logico e segundo for valor puro ele podera atribuir o valor a variavel 
//Ou seja, se usar operando && pra atribuir a uma variavel 
//Com o primeiro valor como (x == y) e segundo como y 
//Se o resultado logico for true a variavel recebera o valor de y 
//Se usar operando || A variavel recebera o valor de false  

var x = 12
//Resultado da operação logica = true
//Logo a variavel recebeu o valor da segunda variavel 
logico = (num1 == num2) && x
document.write(logico +'<br/>')

//Como o resultado foi false ele retornou false como valor direto 
logico = (num1 != num2) && x
document.write(logico +'<br/>')


//OPERADOR LOGICO OU
num1 = 25 

//Variavel recebe resulto logico da operação 
logico = (num1 != num2) || (num1 < num2)
document.write(logico +'<br/>')

num1 = 30
logico = (num1 != num2) || (num1 < num2)
document.write(logico +'<br/>')

//Adicionando valores naturais 
//Como ambos foram true a variavel recebeu true como valor
logico = (num1 == num2) || x
document.write(logico +'<br/>')

//Como o resultado foi false ele retornou o valor de x como resultado
logico = (num1 != num2) || x
document.write(logico +'<br/>')
