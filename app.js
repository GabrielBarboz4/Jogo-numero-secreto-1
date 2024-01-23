alert('Seja bem vindo ao jogo! Será que você consegue acertar qual número eu estou pensando!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)    
let chute;
let tentativas = 1;
console.log (numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt (`Qual o número secreto? Está entre 1 e ${numeroMaximo}`);


    if (chute == numeroSecreto) {   
        
        break; }

    else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert (`Uau, você descobriu o meu número secreto!!! O número é ${numeroSecreto}, você precisou de ${tentativas} ${palavraTentativa} para descobrir! Parabéns!`)
