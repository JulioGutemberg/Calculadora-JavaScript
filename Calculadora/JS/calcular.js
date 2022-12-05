function calcular(tipo, valor){
	
	//Verficando o tipo de tecla que foi clicado: Ação = (+,-,/,*,=, C(clear)) / Valor = (0 a 9)
	if(tipo === 'acao'){

		if(valor === 'c'){
			//Limpa o visor da calculadora
			document.getElementById('visor').value = ''
		}

		else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
			//acrescenta no visor os simbolos matematicos
			document.getElementById('visor').value += valor;
		} else if(valor === '='){
			//calcula a expressao criada
			var valor_visor = eval(document.getElementById('visor').value)
			document.getElementById('visor').value = valor_visor
		}

	} else if(tipo === 'valor'){
		//acrescenta no visor os valores numericos 
		document.getElementById('visor').value += valor //Mantém o valor anterior concatenando com o novo.

	}
} 