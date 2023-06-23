frutas = [];
frutao = [];

function acrescenta() {
    lista = document.getElementById("entrada");
    listao = document.getElementById("ordenada");
    frutas.push(area.campo.value);
    a = lista.innerHTML;
    a = lista.innerHTML = a + '<li class="list-group-item">' + frutas[frutas.length - 1] + "</li>";
    frutao = frutas;
    frutao.sort();
    frutao.reverse();
    a = listao.innerHTML = '';
    for(i=0;i<frutao.length;i++)
        a = listao.innerHTML = a + '<li class="list-group-item">' + frutao[i] + "</li>";
}