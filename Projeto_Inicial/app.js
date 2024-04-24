alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() *10 +1);
console.log(numeroSecreto);
let chute = prompt("Escolha um número de 1 a 10");
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 10");
    //se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`) 
        } else {
            alert(`o número secreto é maior que ${chute}`)
        }
        //tentativas = tentativas + 1 
        tentativas++
    }
}

let palavraTentativa = tentativa > 1 ?
'tentativas' : 'tentativas'
alert(`Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);