function changeTitleColor(name, colorInputName) {

    var title = document.getElementById(name);
    var input = document.getElementById(colorInputName);


    if(input.value === '') {
        alert("Impossível mudar a cor!");
        return;
    }

    title.style.color = input.value;
    
}