//typeOf -> Retorna o tipo de dado 
document.write(typeof"Fabio" + "<br/>")

//toString() => Função que altera o tipo da variavel recebida como parametro para string
//Tambem existe o Number() que transforma em numbeo, o parseInt() que transforma em inteiro e o parseFloat() que transforma em ponto flutuante 
var idade = 18
document.write(typeof idade + "<br/>")
idade = toString(idade)
document.write(typeof idade + "<br/>")

//.tofixed() fica a quantidade de casas decimais a mostrar igual seu parametro(Arredonda)
var a = 10.354
document.write(a.toFixed(1)+ "<br/>")

//.toPrecision() => Determina o numero total de algarismo a ser exibido como sendo igual ao seu parametro
var b = 152.456
document.write(b.toPrecision(4)+ "<br/>")
document.write(b.toPrecision(7)+ "<br/>")