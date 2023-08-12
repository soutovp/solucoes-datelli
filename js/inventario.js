function copyToClipboard() {
	const textAreaSaida = document.getElementById('contagemFormada')
	navigator.clipboard.writeText(textAreaSaida.value);
	alert('Mensagem copiada com sucesso!')
	return console.log(textAreaSaida.value);
}

function manipularTexto() {
	const textAreaEntrada = document.getElementById('contagemText')
	const textAreaSaida = document.getElementById('contagemFormada')
	if (textAreaEntrada.value) {
		let upperData = textAreaEntrada.value.toUpperCase();
		let modifiedData = upperData.split('\n');
		let counts = {};
		modifiedData.forEach((count) => {
			counts[count] = (counts[count] || 0) + 1;
		});
		let textModified = '';
		for (let i = 0; i < Object.keys(counts).length; i++) {
			if (Object.keys(counts)[i] === '') {

			} else {
				textModified += `${Object.keys(counts)[i]}; ${String(Object.values(counts)[i])}\n`
			}
		}
		return textAreaSaida.value = textModified;
	} else {
		return textAreaSaida.value = 'Nenhuma informação de entrada.'
	}
}