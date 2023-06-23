function gerarTabuada() {
    var tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = '';

    if(area.valor.value === '') {
        alert("Impossível calcular valor!");
        return;
    }

    if(area.operacao.value === '') {
        alert("Impossível calcular sem operacao!");
        return;
    }

    var operacoesValidas = ['/', '*', '+', '-'];

    if(!operacoesValidas.includes(area.operacao.value)) {
        alert("Operação impossível");
        return;
    }

    var operacao = area.operacao.value;
    var valor = area.valor.value;

    

    for(i=0;i<10;i++) {
        var result = 0;

        switch (operacao) {
            case "/":
                if(Number(valor) === 0) {
                    alert("Impossível fazer uma divisão por 0.");
                    return;
                }
    
                result = Number(valor) / (i + 1);
                break;
    
            case "*":
                result = Number(valor) * (i + 1);
                break;
    
            case "-":
                result = Number(valor) - (i + 1);
                break;
    
            case "+":
                result = Number(valor) + (i + 1);
                break;
        }

        var a = tableBody.innerHTML;
        a = tableBody.innerHTML = a + '<tr> <td> ' + valor + " </td> <td> " + operacao + " </td>" + "<td> " + (i + 1) + " </td> <td> " + result +  " </td>";
    }
        
    area.valor.value = '';
    area.operacao.value = '';
    
}

