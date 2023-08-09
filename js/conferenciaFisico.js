// let dados = [];
// const imprimir = ()=>{
//     const contagemText = document.getElementById('contagemText');
//     contagemText.style.display = 'none';
//     window.print();
//     contagemText.style.display = 'flex';
// }
// const limpar = ()=>{
//     const contagem = document.getElementById('contagem')
//     contagem.value = "";
//     dados.splice(0, dados.length);
// }
// const limparTabela =()=>{
//     const table = document.getElementById('table')
//     table.innerHTML ="<tr>"+
//                     "<th>Referência</th>"+
//                     "<th>Número</th>"+
//                     "<th>Qtd. Físico</th>"+
//                     "</tr>"
// }
// const separarTextoPorLinha = (texto)=>{
//     let data = texto.split(['\n'])
//     for(var i = 0; i<data.length; i++){
//         data[i] = data[i].split(/[.;]/g)
//     }
//     return data;
// }
// const coletarDados = ()=>{
//     const contagem = document.getElementById('contagem')
//     dados = (separarTextoPorLinha(encontrarPalavrasRepetidas(contagem.value)))
//     console.log(dados)
//     constructTable();
//     console.log('entrada : \n'+contagem.value)
//     console.log('saída: \n'+encontrarPalavrasRepetidas(contagem.value))
// }
// const constructTable = ()=>{
//     const table = document.getElementById('table')
//     const ljOrigem = document.getElementById('ljOrigem')
//     let data = ""
//     for(var i = 0; i<dados.length; i++){
//         console.log(dados[i][1])
//         data +=`<tr><th>${dados[i][0]}</th><th>${dados[i].length === 2 ? "" : dados[i][1]}</th><th>${dados[i].length === 2 ? dados[i][1].toString() : dados[i][2]}</th></tr>`
//     }
//     table.innerHTML += data;
// }
// function encontrarPalavrasRepetidas(str) {
//     const words = str.split(/\s+/); // Divide a string em palavras usando espaços em branco como separador
//     const wordCount = {};

//     // Conta a quantidade de vezes que cada palavra aparece
//     words.forEach((word) => {
//       const [palavra, quantidadeStr] = word.split(";");
//       const quantidade = parseInt(quantidadeStr, 10) || 1;
//       wordCount[palavra] = (wordCount[palavra] || 0) + quantidade;
//     });

//     const palavrasUnicas = {};

//     // Concatena cada palavra única com sua quantidade e armazena no objeto
//     words.forEach((word) => {
//       const [palavra, quantidadeStr] = word.split(";");
//       if (wordCount[palavra] > 1 && !palavrasUnicas[palavra]) {
//         palavrasUnicas[palavra] = `${palavra};${wordCount[palavra]}`;
//       } else if (!palavrasUnicas[palavra]) {
//         palavrasUnicas[palavra] = `${palavra};1`;
//       }
//     });

//     return Object.values(palavrasUnicas).join("\n");
//   }

let dados = [];
const imprimir = () => {
	const contagemText = document.getElementById('contagemText');
	contagemText.style.display = 'none';
	// const style = `
	// 	<style>
	// 		@media print {
	// 			body{
	// 				zoom: 65%;
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
	const contagem = document.getElementById('contagem');
	contagem.value = "";
	dados.splice(0, dados.length);
}
const limparTabela = () => {
	const table = document.getElementById('table');
	table.innerHTML = "<tr>" +
		"<th>Referência</th>" +
		"<th>Qtd. Físico</th>" +
		"<th>N33</th>" +
		"<th>N34</th>" +
		"<th>N35</th>" +
		"<th>N36</th>" +
		"<th>N37</th>" +
		"<th>N38</th>" +
		"<th>N39</th>" +
		"<th>N40</th>" +
		"<th>N41</th>" +
		"<th>N42</th>" +
		"<th>N43</th>" +
		"<th>N44</th>" +
		"<th>N45</th>" +
		"<th>N46</th>" +
		"</tr>";
}
const separarTextoPorLinha = (texto) => {
	let data = texto.split(['\n']);
	for (var i = 0; i < data.length; i++) {
		data[i] = data[i].split(/[.;]/g);
	}
	return data;
}
const coletarDados = () => {
	const contagem = document.getElementById('contagem');
	dados = (separarTextoPorLinha(encontrarPalavrasRepetidas(contagem.value)));
	console.log(dados);
	constructTable();
	console.log('entrada : \n' + contagem.value);
	console.log('saída: \n' + encontrarPalavrasRepetidas(contagem.value));
}
const constructTable = () => {
	const table = document.getElementById('table');
	const ljOrigem = document.getElementById('ljOrigem');
	let referencias = {};

	for (var i = 0; i < dados.length; i++) {
		const referencia = dados[i][0];
		const numero = dados[i][1];
		const quantidade = parseInt(dados[i][2]);

		if (!referencias[referencia]) {
			referencias[referencia] = {
				quantidadeTotal: quantidade,
				numeros: {
					N33: 0, N34: 0, N35: 0, N36: 0, N37: 0,
					N38: 0, N39: 0, N40: 0, N41: 0, N42: 0,
					N43: 0, N44: 0, N45: 0, N46: 0
				}
			};
		} else {
			referencias[referencia].quantidadeTotal += quantidade;
		}

		if (numero in referencias[referencia].numeros) {
			referencias[referencia].numeros[numero] += quantidade;
		}
	}

	let data = "";
	for (const referencia in referencias) {
		data += `<tr><th>${referencia}</th><th>${referencias[referencia].quantidadeTotal}</th>`;
		for (const numero in referencias[referencia].numeros) {
			data += `<th ${referencias[referencia].numeros[numero] > 0 ? 'style="color:white; background-color: black"' : ""}>${referencias[referencia].numeros[numero]}</th>`;
		}
		data += "</tr>";
	}

	table.innerHTML += data;
}

// Resto do código permanece o mesmo
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


window.addEventListener('resize', () => {
	const section = document.getElementsByTagName('aside')[0]
	if (window.innerWidth <= 999) {
		if (section.innerHTML == '<hr>') {
			console.log('tem')
		}
	}
})