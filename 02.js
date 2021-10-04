var a = 10, b = 4.50, c = "Agua", d = true, e;

document.write("A é: " + typeof a + "<br/>")
document.write("B é: " + typeof b + "<br/>")
document.write("C é: " + typeof c + "<br/>")
document.write("D é: " + typeof d + "<br/>")
document.write("E é: " + typeof e + "<br/>")

window.alert("Isso é um alerta em Js")
window.prompt("Isso é um prompt para o usuario digitar dados")
window.confirm("Isso é uma area de confirmação(Retorna true ou false)")

var msg

var confirm = confirm("Confirme essa mensagem")
if(confirm == true){
    msg="Operação confirmada"
}else{
    msg="Operação negada"
}
document.write(msg)

const CONSTANTE = 18//const => Tipo de armazenamento de dados imutavel com maior performasse