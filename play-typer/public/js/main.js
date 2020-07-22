var frase = $(".frase").text()
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campoDigitacao = $(".campo-digitacao");
campoDigitacao.on("input", function () {
    var conteudo = campoDigitacao.val();

    var quantidadePalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(quantidadePalavras);

    var quantidadeCaracteres = conteudo.length;
    $("#contador-caracteres").text(quantidadeCaracteres);
})

/* Reduzindo tempo */
var tempoRestante = $("#tempo-digitacao").text()
campoDigitacao.on("focus", function () {
    setInterval(function () {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);

        /* Desabilitar campo quando o tempo acabar */
        if (tempoRestante < 1) {
            campoDigitacao.attr("disabled", true);
        }


    }, 1000);
});