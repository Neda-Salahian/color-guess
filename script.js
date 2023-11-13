let randomIndex;
function colorGenerator(num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        result.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return result;
}


const generatedColors = colorGenerator(6);
// console.log(generatedColors);
// var randomIndex = Math.floor(Math.random() * generatedColors.length); 

// let generateHexCode = colorGenerator();

const buttonNewColor = document.getElementById("reset");
buttonNewColor.addEventListener('click', function(event) {
    event.preventDefault();

    const randomIndex = Math.floor(Math.random() * generatedColors.length);
    // console.log(randomIndex) index: between 0 to 6
    /* randomIndex = An index to access a random element in the generatedColors array */
    const colorDisplay = document.getElementById('color-display');
    colorDisplay.innerText = generatedColors[randomIndex];//Example: generatedColors[6] = 124,23,45

    const showColorSquares = document.querySelectorAll(".square");
    showColorSquares.forEach((square, index) => {
        if (index === randomIndex) {
            square.style.backgroundColor = generatedColors[randomIndex];
        } else {
            const randomColor = colorGenerator(1)[0];
            square.style.backgroundColor = randomColor;
        }
    });
});

let gameActive = true;

const selectSquares = document.querySelectorAll(".square");
selectSquares.forEach((square) => {
    square.addEventListener('click', function(event) {
        if (gameActive) {
            let correctGuess = false;
            for (let i = 0; i < generatedColors.length; i++) {
                if (this.style.backgroundColor === generatedColors[i]) {
                    correctGuess = true;
                    break;
                }
            }
            if (correctGuess) {
                this.style.backgroundColor = "green";
                gameActive = false;
            } else {
                this.style.backgroundColor = "red";
            }
        }
    });
});

const showColorSquares = document.querySelectorAll(".square");
showColorSquares.forEach((square) => {
    square.style.backgroundColor = "#ccc";
});









