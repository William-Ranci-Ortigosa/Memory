document.addEventListener('DOMContentLoaded', () => {
    const cardArr = [
        {
            name: 'x',
            img: 'images/x.png'
        },
        {
            name: 'x',
            img: 'images/x.png'
        },
        {
            name: 'y',
            img: 'images/y.png'         
        },
        {
            name: 'y',
            img: 'images/y.png'
        },
        {
            name: 'z',
            img: 'images/z.png'
        },
        {
            name: 'z',
            img: 'images/z.png'
        },
        {
            name: 'v',
            img: 'images/v.png'
        },
        {
            name: 'v',
            img: 'images/v.png'
        },
        {
            name: 'i',
            img: 'images/i.png'
        },
        {
            name: 'i',
            img: 'images/i.png'
        },
        {
            name: 'e',
            img: 'images/e.png'
        },
        {
            name: 'e',
            img: 'images/e.png'
        }
    ]
function game() {

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let won = []
    let chosen = []
    let chosenID = []
    let flips = 0;
    const refresh = document.querySelector('#refresh')
    refresh.addEventListener('click', refreshGrid)
    const refresh_popup = document.querySelector('#refresh_popup')
    refresh_popup.addEventListener('click', refreshGrid_popup)

    function createGrid() {
        resultDisplay.innerHTML = 'Attempts: '
        cardArr.sort(() => 0.5 - Math.random())
        for (let i = 0; i < cardArr.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('class', 'cards')
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }

    function popup() {
        document.getElementById("popup-1").classList.toggle("active");
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('.cards');
        var firstCard = chosenID[0]
        var secondCard = chosenID[1]
        if (chosen[0] === chosen[1] && firstCard !== secondCard) {
            won.push(chosen)
            cards[firstCard].removeEventListener('click', flip)
            cards[secondCard].removeEventListener('click', flip)
        } else {
            cards[firstCard].setAttribute('src', 'images/blank.png')
            cards[secondCard].setAttribute('src', 'images/blank.png')
        }
        chosen = []
        chosenID = []
        resultDisplay.textContent = 'Attempts: ' + flips
        if (won.length === cardArr.length/2) {
            popup();
        }
    }

    function flip() {
        var ID = this.getAttribute('data-id')
        chosen.push(cardArr[ID].name)
        chosenID.push(ID)
        this.setAttribute('src', cardArr[ID].img)
        if (chosenID[0] === chosenID[1]) {
            setTimeout(checkForMatch, 100);
        }
        else if (chosen.length === 2) {
            flips++
            console.log('This works')
            setTimeout(checkForMatch, 250);
        }
    }

    createGrid()

    function refreshGrid() {
        won = []
        chosen = []
        chosenID = []
        delete cards;
        delete firstCard;
        delete secondCard;
        delete ID;
        flips = 0;
        grid.innerHTML = '';
        createGrid();
    }

    function refreshGrid_popup() {
        document.getElementById("popup-1").classList.toggle("active");
        won = []
        chosen = []
        chosenID = []
        delete cards;
        delete firstCard;
        delete secondCard;
        delete ID;
        flips = 0;
        grid.innerHTML = '';
        createGrid();
    }
}

    game()    

})