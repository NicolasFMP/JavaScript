function alterarTexto(texto) {
    let paragrafo = document.getElementById("vaca");

    let paragrafoOriginal = "...";

    paragrafo.innerHTML = texto;

    setTimeout(function() {
        paragrafo.innerHTML = paragrafoOriginal;
    }, 3000)
}