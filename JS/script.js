// Variables globales
const CHOICES = ['piedra', 'papel', 'tijeras'];
const playerChoiceImage = {
    piedra: './IMG/piedra.png',
    papel: './IMG/papel.png',
    tijeras: './IMG/tijeras.png',
};

let computerChoice;
let resultMessage;

// Objeto para manejar el juego
const game = {
    choices: CHOICES,
    computerChoice: '',
    resultMessage: '',

    // Método para elegir de manera aleatoria
    randomChoice: function() {
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        this.computerChoice = this.choices[randomIndex];
    },

    // Método para determinar el resultado
    determineResult: function(playerChoice) {
        if (playerChoice === this.computerChoice) {
            this.resultMessage = '¡Es un empate!';
        } else {
            switch (playerChoice) {
                case 'piedra':
                    this.resultMessage = (this.computerChoice === 'tijeras') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
                case 'papel':
                    this.resultMessage = (this.computerChoice === 'piedra') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
                case 'tijeras':
                    this.resultMessage = (this.computerChoice === 'papel') ? '¡Ganaste!' : 'Perdiste. Intenta de nuevo.';
                    break;
            }
        }
    },

    // Método para mostrar imágenes
    displayChoices: function(playerChoice) {
        const playerChoiceDiv = document.getElementById('player-choice');
        const computerChoiceDiv = document.getElementById('computer-choice');

        // Limpiar contenido previo
        playerChoiceDiv.innerHTML = '';
        computerChoiceDiv.innerHTML = '';

        playerChoiceDiv.innerHTML = `<img src="${playerChoiceImage[playerChoice]}" alt="${playerChoice}">`;
        computerChoiceDiv.innerHTML = `<img src="${playerChoiceImage[this.computerChoice]}" alt="${this.computerChoice}">`;
    },

    // Método para reiniciar el juego
    restartGame: function() {
        const playAgain = confirm('¿Quieres jugar de nuevo?');
        if (playAgain) {
            this.resetGame();
        } else {
            alert('Gracias por jugar. ¿Quieres volver a jugar más tarde?');
            if (confirm('¿Quieres jugar de nuevo ahora?')) {
                this.resetGame();
            } else {
                alert('Gracias por jugar. ¡Hasta luego!');
            }
        }
    },

    // Método para iniciar el juego
    resetGame: function() {
        this.computerChoice = '';
        this.resultMessage = '';
        document.getElementById('player-choice').innerHTML = '';
        document.getElementById('computer-choice').innerHTML = '';
    },

    // Método para manejar la selección del jugador
    playerSelect: function(playerChoice) {
        this.randomChoice();
        this.determineResult(playerChoice);
        this.displayChoices(playerChoice);
        alert(`Elegiste ${playerChoice}. La computadora eligió ${this.computerChoice}. ${this.resultMessage}`);
        this.restartGame(); // Llama a restartGame después de mostrar el resultado
    }
};

// No hay llamada inicial para startGame; el juego se inicia con clics
