const urlBitcoin = "https://economia.awesomeapi.com.br/last/BTC-BRL";
const urlDolar = "https://economia.awesomeapi.com.br/last/USD-BRL";
const urlEuro = "https://economia.awesomeapi.com.br/last/EUR-BRL";

var select = document.getElementById("converterUnity");
var opcaoValor = select.options[select.selectedIndex].value;
const mensagem = document.getElementById("msgValor");
const valorAConverter = document.getElementById("valor-converter");

function converter() {
  if (select.value === "" || valorAConverter === "") {
    mensagem.innerHTML = `Selecione uma unidade e digite um valor em (R$) a ser convertido`;
  }

  if (select.value === "dolar") {
    cotacaoDolar();
  }
  if (select.value === "euro") {
    cotacaoEuro();
  }

  if (select.value === "bitcoin") {
    cotacaoBitcoin();
  }
}

async function cotacaoBitcoin() {
  const response = await fetch(urlBitcoin);
  const data = await response.json();

  const cotacaoBitcoinDaily = data.BTCBRL.ask;
  const valorConvertido = parseInt(valorAConverter.value) / cotacaoBitcoinDaily;
  const mensagem = document.getElementById("msgValor");
  mensagem.innerHTML = `O valor pela cotação atual é de ₿ ${valorConvertido} Bitcoins`;
}

async function cotacaoDolar() {
  const response = await fetch(urlDolar);
  const data = await response.json();

  const cotacaoDolarDaily = data.USDBRL.ask;
  const valorConvertido = parseInt(valorAConverter.value) / cotacaoDolarDaily;

  const mensagem = document.getElementById("msgValor");
  mensagem.innerHTML = `O valor pela cotação atual é de U$$ ${valorConvertido} dólares`;
}

async function cotacaoEuro() {
  const response = await fetch(urlEuro);
  const data = await response.json();

  const cotacaoEuroDaily = data.EURBRL.ask;
  const valorConvertido = parseInt(valorAConverter.value) / cotacaoEuroDaily;
  const mensagem = document.getElementById("msgValor");
  mensagem.innerHTML = `O valor pela cotação atual é de € ${valorConvertido} Euros`;
}
