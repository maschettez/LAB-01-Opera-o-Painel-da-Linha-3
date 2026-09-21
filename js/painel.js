const TABELA = document.querySelector('#sensores tbody');

async function carregarSensores() {
  try {
    const resposta = await fetch('dados/sensores.json');

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar os sensores.');
    }

    const sensores = await resposta.json();
    sensores.forEach(desenharLinha);
    marcarAtualizacao();
  } catch (erro) {
    console.error(erro);
  }
}

// O sensor envia em Fahrenheit e o painel exibe em Celsius
function converterTemperatura(leitura) {
  return (leitura - 32) * 5 / 9;
}

function desenharLinha(sensor) {
  let leitura = sensor.valor;
  let unidade = sensor.unidade;

  if (unidade === 'F') {
    leitura = converterTemperatura(sensor.valor);
    unidade = 'C';
  }

  const tr = document.createElement('tr');

  tr.innerHTML =
    '<td>' + sensor.codigo + '</td>' +
    '<td>' + sensor.descricao + '</td>' +
    '<td>' + leitura.toFixed(1) + ' ' + unidade + '</td>' +
    '<td>ok</td>';

  TABELA.appendChild(tr);
}

carregarSensores();