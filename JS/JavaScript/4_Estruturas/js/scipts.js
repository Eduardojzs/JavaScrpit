// 1 - variáveis
let name = "Eduardo Jz";
console.log(name);

name = "Edu";
console.log(name)

const idade = 25; // Não pode ser Renomiado Ex: idade = 26
console.log(idade)

// 2 - mais sobre variáveis

//unicos caracteres pode ser utilizado são _ e o $

let _name = "jose"

let $name = "jose"

console.log(  //Sempre Utilizar a , para escrever a proxima variavel
    _name,
    $name
)

// 3 - função prompt

//const age = prompt("Digite a sua idade");
//console.log(`Sua idade é ${age} anos.`);
//Não são muito utilizados


// 4- alert

//alert(`Testando`)
//Não são muito utilizados

// 5 - Math

console.log(Math.max(5, 2, 10 ,20));
console.log(Math.min(10, 20, 1));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - if

const user = "joão"

if (user === "joão"){
    console.log(`Meu nome é joão`)
}

// 7 - else

const q = 7;
const w = 15;

if(q > 5 && w >20){
    console.log("os numeros são mais alto")
} else{
    console.log("os numeros são mais altos")
}


// 8 - else if

const userName = "Eduardo"
const userAge = 31

if (userName === "José"){
    console.log("Bem Vindo José!")
}else if(userName === "Eduardo" && userAge ===31){
    console.log("Bem Vindo Eduardo!")
}