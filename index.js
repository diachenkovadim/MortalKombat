const divArenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const firstPlayer = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'kunai',
        'sword', 
        'nunchucks'
    ],
    player: 1,
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
    player: 2,
    attack: function () {
        console.log(`${this.name} Fight`)
    }
}

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag
}

function changeHp (player) {
    const playerLife = document.querySelector(`.player${player.player} .life`)
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp <= 0) {
        player.hp = 0;
        randomButton.disabled = true;
    } 

    playerLife.style.width = `${player.hp}%`;
}

randomButton.addEventListener('click', function () {
    console.log('click');
    console.log('first player: ', firstPlayer.hp);
    console.log('second player: ', secondPlayer.hp);
    changeHp(firstPlayer);
    changeHp(secondPlayer);
    showWinner(firstPlayer, secondPlayer)

})

function playerWin (name) {
    const winTitle = createElement('div', 'winTitle');
    winTitle.innerText = `${name} wins`;
    return winTitle;
}

function showWinner (playerName1, playerName2) {
    if (randomButton.disabled && playerName1.hp > playerName2.hp) {
            divArenas.appendChild(playerWin(playerName1.name));
         } else if (randomButton.disabled && playerName2.hp > playerName1.hp) {
            divArenas.appendChild(playerWin(playerName2.name));
         }
}

function createPlayer (playerClass, playerProperties) {
    // divPlayer
    const divPlayer1 = createElement('div', playerClass);
    // progress Bar
    const divProgressBar = createElement('div', 'progressbar');
    // div Life
    const divLife = createElement('div', 'life')
    divLife.style.width = `${playerProperties.hp}%`;
    divProgressBar.appendChild(divLife);
     // div name
    const divName = createElement('div', 'name');
    divName.innerText = playerProperties.name;

    divProgressBar.appendChild(divName);
    divPlayer1.appendChild(divProgressBar);
    
    // div character
    const divCharacter = createElement('div', 'character');
    // div img
    const $image = createElement('img');
    $image.src = playerProperties.img;
    divCharacter.appendChild($image);

    divPlayer1.appendChild(divCharacter);
    
    return divPlayer1;
}

divArenas.appendChild(createPlayer('player1', firstPlayer));
divArenas.appendChild(createPlayer('player2', secondPlayer));

