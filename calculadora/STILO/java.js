// Obtén referencias a los botones
const buttons = document.querySelectorAll('button');
const pantalla = document.querySelector('.pantalla');

// Variable para almacenar la expresión en curso
let expression = '';

// Agrega un event listener a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtén el valor del botón clickeado
    const value = button.textContent;

    // Maneja el clic en función del valor del botón
    switch (value) {
      case '=':
        try {
          // Evalúa la expresión y muestra el resultado en la pantalla
          const resultado = eval(expression);
          pantalla.textContent = resultado;
          expression = resultado.toString(); // Actualiza la expresión
        } catch (error) {
          pantalla.textContent = 'Error';
          expression = ''; // Restablece la expresión en caso de error
        }
        break;

      case 'C':
        // Borra todo el contenido de la pantalla
        pantalla.textContent = '';
        expression = '';
        break;

      default:
        // Agrega el valor del botón a la expresión en curso
        expression += value;
        pantalla.textContent += value;
    }
  });
});
