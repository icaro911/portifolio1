/*
Gerar um número aleatório entre 1 e 100. X
Gravar o número do turno que o jogador está. Iniciar em 1.X
Dar ao jogador uma forma de adivinhar o número.X
Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.X
Depois, verificar se o palpite está correto.X
Se estiver correto:
Escrever mensagem de parabéns.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).X
Mostrar controle que permita ao jogador reiniciar o jogo.
Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
Dizer ao jogador que ele está errado.
Permitir que ele insira outra resposta.
Incrementar o número do turno em 1.
Se o jogador está errado mas não tem turnos sobrando:
Dizer ao jogador que o jogo acabou.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
Mostrar controle que permita ao jogador reiniciar o jogo.
Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.*/

//Número Aleatório

let numAleatorio = Math.floor( Math.random() * 100 + 1);

//ligar os pontos

let resultado = document.getElementById('resultado');

let numGravado = document.getElementById('numGravado');

let tentaJS = document.getElementById('tentativa');

let tentaValue = 0;

//Funções

function evento(){

	//Captação dos números digitados
	
	let campoDigitado = document.getElementById('campoPalpite').value;


	//gravação de números digitados

	if(campoDigitado == numAleatorio){
		
		alert("Parabéns, acertou!");
		zerar()

	} else if(campoDigitado > 100){

		alert("O número deve ser entre 0 e 100.")
	
	}else {
			
			//Gravação de números
		
		numGravado.innerHTML += campoDigitado + ", ";

			//resultado

		resultQF(campoDigitado,numAleatorio);

			//tentativas

		valorTentativa();

	}

}

function valorTentativa(){


	tentaValue += 1

	tentaJS.innerHTML = tentaValue;

	if(tentaJS.innerHTML == 10){
		alert("STOP THE COUNT!" )
		zerar()
	}
}


function resultQF(a , b){
		if(a < b  && b - a >= 10 ){
			resultado.innerHTML = "<span style='color:blue'>FRIO +</span>";
		} else if(a < b && b - a < 10){
			resultado.innerHTML = "<span style='color:red'>QUENTE +</span>";
		} else if(a > b && a - b >= 10){
			resultado.innerHTML = "<span style='color:blue'>FRIO -</span>";
		} else {
			resultado.innerHTML = "<span style='color:red'>QUENTE -</span>";
		}
}

function zerar(){
	resultado.innerHTML = "";
	numGravado.innerHTML = "";
	tentaJS.innerHTML = "";
	tentaValue = 0;
	numAleatorio = Math.floor( Math.random() * 100 + 1);
}