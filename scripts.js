

let nextPlayer = 'X';

// This function will be called when the page loads 
document.getElementById("next-lbl").innerText = nextPlayer;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td');

    // for loop to add buttons to each cell
    for (let i = 0; i<cells.length; i++){
        let button = document.createElement('button');

        button.innerText = '[ ]';

        cells[i].appendChild(button);

    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    // for loop to add event listener to each button
    for (let i=0; i<btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{

    let button = event.currentTarget;


    button.innerText = '[' + nextPlayer + ']';
    
    // makes sure the button is disabled after being clicked
    button.disabled = true;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        if(nextPlayer === 'X'){
            nextPlayer = 'O';
        } else{
            nextPlayer = 'X';
        }


        document.getElementById("next-lbl").innerText = nextPlayer;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
       document.getElementById('game-over-lbl').innerText = 'Game Over'; // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}


// checks if the games over
function isGameOver()
{

    let btns = document.querySelectorAll('button');

 // for loop looking through all the buttons and checking if any of them are still enabled.
    for( let i = 0; i<btns.length; i++){


        if (btns[i].disabled === false){
            return false;
        }

       
    }

     return true;
    // This function returns true if all the buttons are disabled and false otherwise 
}
