let valor = document.getElementById('valor');
let taxa = document.getElementById('taxa');
let parcelas = document.getElementById('parcelas');
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function calcularValor() {
    alert('Calculando');
    const amortizacao = Number(valor.value) / Number(parcelas.value);
    let saldo = Number(valor.value);
    resultado.innerHTML = '';
    const taxaJuros = Number(taxa.value) / 100.0;

    for (let i = 1; i <= Number(parcelas.value); i++) {
        let juros = saldo * taxaJuros;
        let parcela = amortizacao + juros;
        saldo -= amortizacao;
        resultado.innerHTML += `
        <tr>
            <th scope="row">${i}</th>
            <td>${parcela.toFixed(2)}</td>
            <td>${juros.toFixed(2)}</td>
            <td>${amortizacao.toFixed(2)}</td>
            <td>${saldo.toFixed(2)}</td>
        </tr>
        `;
    }
}

calcular.addEventListener('click', calcularValor);