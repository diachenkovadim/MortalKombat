const firstPlayer = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'kunai',
        'sword', 
        'nunchucks'
    ],
    attack: function () {
        console.log(`${this.name} Fight`)
    }
}

const secondPlayer = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'kunai',
        'sword', 
        'nunchucks'
    ],
    attack: function () {
        console.log(`${this.name} Fight`)
    }
}

function createPlayer (playerClass, playerProperties) {
    // divPlayer
    const divPlayer1 = document.createElement('div')
    divPlayer1.classList.add(playerClass);
 
    // progress Bar
    const divProgressBar = document.createElement('div')
    divProgressBar.classList.add('progressbar');
    
    const divLife = document.createElement('div')
    divLife.classList.add('life')
    divLife.style.width = `${playerProperties.hp}%`;
    divProgressBar.appendChild(divLife);

     // div name
    const divName = document.createElement('div')
    divName.classList.add(playerProperties.name);
    divName.innerText = playerProperties.name;

    divProgressBar.appendChild(divName);
    divPlayer1.appendChild(divProgressBar);
    
    // div character
    const divCharacter = document.createElement('div')
    divCharacter.classList.add('character');
    
    // div img
    const $image = document.createElement('img');
    $image.src = playerProperties.img;
    divCharacter.appendChild($image);

    divPlayer1.appendChild(divCharacter);
    // div Arenas
<<<<<<< Updated upstream
    const divArenas = document.createElement('div');
    divArenas.classList.add('arenas');
=======
    const divArenas = document.querySelector('.arenas');
>>>>>>> Stashed changes
    divArenas.appendChild(divPlayer1);
    
}

createPlayer('player1', firstPlayer);
<<<<<<< Updated upstream
createPlayer('player2', secondPlayer);
=======
createPlayer('player2', secondPlayer);
>>>>>>> Stashed changes
