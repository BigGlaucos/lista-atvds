function calcularValor() {
    // Receber o preço por kg e o consumo em gramas
    let precoKg = parseFloat(document.getElementById('precoKg').value);
    let consumoGramas = parseFloat(document.getElementById('consumoGramas').value);

    // Converter o consumo em kg
    let consumoKg = consumoGramas / 1000;

    // Calcular o valor total a ser pago
    let valorTotal = consumoKg * precoKg;

    // Exibir o valor total na página
    document.getElementById('valorTotal').innerHTML = "Valor total a pagar: R$" + valorTotal.toFixed(2);
}
