//Objeto Boolean
//Pode passar como parametro (true ou false) ou (0 ou 1)
var b = new Boolean(0)
console.log(b)

//valueOf() => Retorna o valor primitivo 
alert(b.valueOf())
//typeOf() => Retorna o tipo 
alert(typeof(b))
//Juntando temos o valor primitivo do tipo 
alert(typeof(b.valueOf()))
//toString() => Retorna uma string representando o valor primitivo
alert(b.toString())


//Objeto Number 
//Parametro pode ser passado como numero ou string
var n = new Number(132.5895)
console.log(n)

alert(typeof(n))//Retorna Objeto 
//toFixed() => Define a quantidade de casas decimais após a virgula 
alert(n.toFixed(2))
//toPrecision() => retorna o numero com a quantidade de caracteres definidos 
alert(n.toPrecision(3))


//Objeto string
var x = new String('Texto dentro das aspas')
console.log(x)

//Aceita .length
alert(x.length)
//.charAt() => Retorna caracter na posição passada como parametro 
alert(x.charAt(2))
//.concat() => Concatena uma ou mais strings
alert(x.concat(x))
//.indexOf() => Retorna a posição de um elemento
alert(x.indexOf('das'))
//.lastIndexOf() => Ultima ocorrencia de um elemento
alert(x.lastIndexOf('d'))
//.match() => Utilizamos uma expressão regular  
alert(x.match(/x/))
//replace() => Substitui o primeiro parametro pelo segundo 
alert(x.replace('das', 'de'))   
//Funções para recortar string 
//subsring() => Recorta a string do indice inicial ate o final (Sempre vai do menor indice para o maior)
alert(x.substring(5, 8))
//substr()=> Recorta a string do indice inicial ate o indice inicial + o segundo parametro 
alert(x.substr(5, 8))
//slice() => Sempre recorta do primeiro parametro ate o segundo(se estiver na ordem errada não recorta nada)
alert(x.slice(2.8))
//toUpperCase()=> Deixa letra maiuscula 
alert(x.toUpperCase())
//toLowerCase() => Deixa letra minuscula
alert(x.toLowerCase())