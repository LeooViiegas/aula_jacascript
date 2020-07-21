//var nome = "Leonardo Viegas";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo.";
//var lista = ["maça", "pera", "laranja"];
//var fruta = {nome:"maça", cor:"vermelha"};
//var frutas = [{nome: "maça", cor: "vermelha"} , {nome: "uva", cor:"roxo"}];
//var idade = prompt("Qual a sua idade");
//var count = 0;
//var count;
//var d = new Date();

/*
alert("Bem vindo " + nome + ", voce tem " + idade + " anos");
console.log(nome);
console.log(idade + idade2);
console.log(idade * idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase);
console.log(frase.toUpperCase);
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista[0]);
alert(frase.replace("Japão", "Brasil"));
console.log(fruta.nome);
console.log(fruta.cor);
console.log(frutas);
*/

/*
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
};
*/

/*
while (count < 5){
    //console.log(count);
    alert(count);
    count++;
};
*/

/*
for(count = 0; count < 5; count++){
    //alert(count);
    console.log(count);
};
*/

//alert(d.getMonth()+1);
//alert(d.getMinutes());

/*
function soma(n1, n2){
    return n1 + n2;
}

//alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brazil"));
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));
*/

function clique(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://www.google.com.br");
    //window.location.href = "https://www.google.com.br";
}

function trocarText(Element){
    //alert("Obrigado");
    //document.getElementById("mousemove").innerHTML= "Obrigado";
    Element.innerHTML= "Obrigado";
}

function voltarText(Element){
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    Element.innerHTML= "Passe o mouse aqui";
}

function funcaoChange(Element){
    console.log(Element.value);
}