var tempoInicial = $("#tempo-digitacao").text();

$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text()
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);
}

var campoDigitacao = $(".campo-digitacao");
function inicializaContadores() {
    campoDigitacao.on("input", function () {
        var conteudo = campoDigitacao.val();

        var quantidadePalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(quantidadePalavras);

        var quantidadeCaracteres = conteudo.length;
        $("#contador-caracteres").text(quantidadeCaracteres);
    })
};

function inicializaCronometro() {
    /* Reduzindo tempo */
    var tempoRestante = $("#tempo-digitacao").text()
    campoDigitacao.one("focus", function () {
        var cronometroID = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            /* Desabilitar campo quando o tempo acabar */
            if (tempoRestante < 1) {
                campoDigitacao.attr("disabled", true);
                clearInterval(cronometroID);
                campoDigitacao.addClass("campo-desativado");
            }
        }, 1000);
    });
};

function reiniciaJogo() {
    campoDigitacao.attr("disabled", false);
    campoDigitacao.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campoDigitacao.toggleClass("campo-desativado");
};

