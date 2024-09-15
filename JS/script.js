// Variables globales
const CHOICES = ['piedra', 'papel', 'tijeras'];
const resultText = document.getElementById('result-text');

// Configuración de los manejadores de eventos
const choices = document.querySelectorAll('.choice');

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', function(event) {
        // Elección del jugador
        const playerChoice = event.currentTarget.id;

        // Elección aleatoria de la computadora
        const randomIndex = Math.floor(Math.random() * CHOICES.length);
        const computerChoice = CHOICES[randomIndex];

        // Determinación del resultado
        let resultMessage;
        if (playerChoice === computerChoice) {
            resultMessage = '¡Es un empate!';
        } else {
            switch (playerChoice) {
                case 'piedra':
                    resultMessage = (computerChoice === 'tijeras') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
                case 'papel':
                    resultMessage = (computerChoice === 'piedra') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
                case 'tijeras':
                    resultMessage = (computerChoice === 'papel') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
                default:
                    resultMessage = 'Elección inválida.';
                    break;
            }
        }

        // Mostrar el resultado
        resultText.textContent = `Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${resultMessage}`;
    });
}
