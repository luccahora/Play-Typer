var frase = $(".frase").text()
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function () {
    var conteudo = campo.val();

    var quantidadePalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(quantidadePalavras);

    var quantidadeCaracteres = conteudo.length;
    $("#contador-caracteres").text(quantidadeCaracteres);
})



