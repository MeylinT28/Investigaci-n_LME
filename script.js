function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;

    if (peso === "" || estatura === "") {
        alert("Por favor, complete ambos campos.");
        return;
    }

    peso = parseFloat(peso);
    estatura = parseFloat(estatura);

    if (isNaN(peso) || isNaN(estatura)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    var imc = peso / (estatura * estatura);

    imc = imc.toFixed(2);

    var resultado = document.getElementById("resultado");
    resultado.textContent = "Tu IMC es: " + imc;

    if (imc < 18.5) {
        resultado.textContent += " (Bajo peso)";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.textContent += " (Peso normal)";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.textContent += " (Sobrepeso)";
    } else {
        resultado.textContent += " (Obesidad)";
    }
}
