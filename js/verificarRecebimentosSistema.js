const dados = [];
// const imprimir = ()=>{
//     const contagemText = document.getElementById('contagemText');
//     contagemText.style.display = 'none';
//     window.print();
//     contagemText.style.display = 'flex';
// }
const imprimir = () => {
	const contagemText = document.getElementById('contagemText');
	contagemText.style.display = 'none';
	// const style = `
	// 	<style>
	// 		@media print {
	// 			body{
	// 				zoom: 100%;
	// 			}
	// 			@page {
	// 				size: A4;
	// 				margin: 0 2cm 2cm 2cm;
	// 			}
	// 			@page :left{
	// 				margin-left: 2cm;
	// 			}
	// 			@page :right{
	// 				margin-right: 2cm;
	// 			}
	// 		}
	// 	</style>
	// `;
	// const janelaImpressao = window.open('', '_blank');
	// janelaImpressao.document.write(style);
	// janelaImpressao.document.write('<html><head><title>Impressão - Fernando Souto</title><link rel="stylesheet" href="../css/header.css"><link rel="stylesheet" href="../css/conferenciaFisico.css"></head><body>');
	// janelaImpressao.document.write(document.getElementById('body').outerHTML);
	// janelaImpressao.document.write('</body></html>');
	// janelaImpressao.document.close();
	// janelaImpressao.print();
	// janelaImpressao.close();
	window.print();
	contagemText.style.display = 'flex';
}
const limpar = () => {
	const contagem = document.getElementById('contagem')
	const ljOrigem = document.getElementById('ljOrigem')

	contagem.value = "";
	ljOrigem.value = "";
	dados.splice(0, dados.length);
}
const limparTabela = () => {
	const table = document.getElementById('table')
	table.innerHTML = "<tr>" +
		"<th>Referência</th>" +
		"<th>Cor?</th>" +
		"<th>Número</th>" +
		"<th>Qtd. Entrando</th>" +
		"<th>Loja Origem</th>" +
		"<th>Qtd. Físico</th>" +
		"</tr>"
}
const separarTextoPorLinha = (texto) => {
	let data = texto.split(['\n'])
	for (var i = 0; i < data.length; i++) {
		data[i] = data[i].split(/[.;]/g)
	}
	return data;
}
const coletarDados = () => {
	const contagem = document.getElementById('contagem')
	dados.push(separarTextoPorLinha(contagem.value))
	console.log(dados)
	constructTable();
}
const constructTable = () => {
	const table = document.getElementById('table')
	const ljOrigem = document.getElementById('ljOrigem')
	let data = ""
	for (var i = 0; i < dados[0].length; i++) {
		data += `<tr><th>${dados[0][i][0]}</th><th>${dados[0][i][3] || ""}</th><th>${dados[0][i][1]}</th><th>${dados[0][i][2] || '1'}</th><th>${ljOrigem.value}</th><th></th></tr>`
	}
	table.innerHTML += data;
}
function encontrarPalavrasRepetidas(str) {
	const words = str.split(/\s+/); // Divide a string em palavras usando espaços em branco como separador
	const wordCount = {};

	// Conta a quantidade de vezes que cada palavra aparece
	words.forEach((word) => {
		const [palavra, quantidadeStr] = word.split(";");
		const quantidade = parseInt(quantidadeStr, 10) || 1;
		wordCount[palavra] = (wordCount[palavra] || 0) + quantidade;
	});

	const palavrasUnicas = {};

	// Concatena cada palavra única com sua quantidade e armazena no objeto
	words.forEach((word) => {
		const [palavra, quantidadeStr] = word.split(";");
		if (wordCount[palavra] > 1 && !palavrasUnicas[palavra]) {
			palavrasUnicas[palavra] = `${palavra};${wordCount[palavra]}`;
		} else if (!palavrasUnicas[palavra]) {
			palavrasUnicas[palavra] = `${palavra};1`;
		}
	});

	return Object.values(palavrasUnicas).join("\n");
}
