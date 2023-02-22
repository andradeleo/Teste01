
const input1 = document.getElementById("first-input")
const input2 = document.getElementById("second-input");
const input3 = document.getElementById("third-input");
const submitBtn = document.getElementById("btn");
const resultado  = document.getElementById("result");

function verificarTriangulo() {
  const lado1 = parseFloat(input1.value);
  const lado2 = parseFloat(input2.value);
  const lado3 = parseFloat(input3.value);

  if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    resultado.innerText = 'Triângulo válido';
  } else {
    resultado.innerText = 'Triângulo inválido';
  }
}

submitBtn.addEventListener('click', verificarTriangulo);
