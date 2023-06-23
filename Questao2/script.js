function calcular() {
  var eleitores = Number(document.getElementById("eleitores").value);
  var brancos = Number(document.getElementById("brancos").value);
  var nulos = Number(document.getElementById("nulos").value);
  var validos = Number(document.getElementById("validos").value);

  if(eleitores === NaN || brancos === NaN || nulos === NaN || validos === NaN) {
      alert("Preencher todos os campos é obrigatório");
      return;
  }

  if((brancos + nulos + validos) > eleitores) {
      alert("Total invalido");
      return;
  }

  var lista = document.getElementById("lista");

  var percentBrancos = (brancos/eleitores) * 100;
  var percentNulos = (nulos/eleitores) * 100;
  var percentValidos = (validos/eleitores) * 100;

  var percents = [{nome: 'Brancos', valor: percentBrancos}, {nome: 'Nulos', valor: percentNulos}, {nome: 'Validos', valor: percentValidos}];
  
  percents.sort(function (a, b) {
      if (a.valor < b.valor) {
          return -1;
        }
        if (a.valor > b.valor) {
          return 1;
        }
        return 0;
  });
  percents.reverse();

  lista.innerHTML = "";

  
  for (let i = 0; i < 3; i++) {
  
      lista.innerHTML += "<li> "+ percents[i].nome + ": " + percents[i].valor.toFixed(2) + "%" +"</li>"
      
    }
    
}