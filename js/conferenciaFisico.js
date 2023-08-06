let dados = [];
const imprimir = ()=>{
    const contagemText = document.getElementById('contagemText');
    contagemText.style.display = 'none';
    window.print();
    contagemText.style.display = 'flex';
}
const limpar = ()=>{
    const contagem = document.getElementById('contagem')
    contagem.value = "";
    dados.splice(0, dados.length);
}
const limparTabela =()=>{
    const table = document.getElementById('table')
    table.innerHTML ="<tr>"+
                    "<th>Referência</th>"+
                    "<th>Número</th>"+
                    "<th>Qtd. Físico</th>"+
                    "</tr>"
}
const separarTextoPorLinha = (texto)=>{
    let data = texto.split(['\n'])
    for(var i = 0; i<data.length; i++){
        data[i] = data[i].split(/[.;]/g)
    }
    return data;
}
const coletarDados = ()=>{
    const contagem = document.getElementById('contagem')
    dados = (separarTextoPorLinha(encontrarPalavrasRepetidas(contagem.value)))
    console.log(dados)
    constructTable();
    console.log('entrada : \n'+contagem.value)
    console.log('saída: \n'+encontrarPalavrasRepetidas(contagem.value))
}
const constructTable = ()=>{
    const table = document.getElementById('table')
    const ljOrigem = document.getElementById('ljOrigem')
    let data = ""
    for(var i = 0; i<dados.length; i++){
        console.log(dados[i][1])
        data +=`<tr><th>${dados[i][0]}</th><th>${dados[i].length === 2 ? "" : dados[i][1]}</th><th>${dados[i].length === 2 ? dados[i][1].toString() : dados[i][2]}</th></tr>`
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