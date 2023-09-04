let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let header = document.getElementById("header")
document.getElementById("start-btn").hidden = true
document.getElementById("yes-btn").hidden = true
document.getElementById("quit-btn").hidden = true
document.getElementById("restart-btn").hidden = true
let sum = 0
let firstCard, secondCard;

let cardNo = 2
let cardArray = new Array();

function pickCard() {
    header.style.color="black"
    firstCard = Math.floor(Math.random() * 13) + 1
    secondCard = getSecondCard(firstCard)
    cardArray.push(firstCard);
    cardArray.push(secondCard);
    printCard();
    sum = firstCard + secondCard
    document.getElementById("pick-btn").hidden = true
    document.getElementById("start-btn").hidden = false
    document.getElementById("restart-btn").hidden = false
}

function printCard() {
    let card =""
    for (var i = 0; i < cardArray.length; i++) {
        card +=" CARD NO"+ (+i + 1) +"  - ||"+cardArray[i] + "  ||";
    }
    cardEl.textContent =card 
    cardEl.style.color = "rgb(6, 6, 134)";
}

function getSecondCard(_firstCard){

    let secondCard = Math.floor(Math.random() * 13) + 1;
    if(secondCard === firstCard) {
        getSecondCard(_firstCard)
    }

    return secondCard;
}

function getNextCard() {
    let nextCard = Math.floor(Math.random() * 13) + 1;
  
    if(cardArray.includes(nextCard)) {
        getNextCard()
    } else {
        document.getElementById("yes-btn").hidden = true
        document.getElementById("quit-btn").hidden = true
        cardArray.push(nextCard);
        sum +=nextCard
        printCard();        
        play()
    }
}

function play() { 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        document.getElementById("start-btn").hidden = true
        document.getElementById("yes-btn").hidden = false
        document.getElementById("quit-btn").hidden = false
        messageEl.textContent = message
        messageEl.style.color = "goldenrod";
        messageEl.style.fontWeight = "bold";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        messageEl.textContent = message
        messageEl.style.color = "#016f32";
        messageEl.style.background="goldenrod"; 
        messageEl.style.fontWeight = "bold";
    } else {
        message = "You're out of the game!"
        isAlive = false
        messageEl.textContent = message
        messageEl.style.color = "white";
        messageEl.style.background="red";
        messageEl.style.fontWeight = "bold";
    }

    sumEl.textContent = "Total Cards Point: " + sum
    sumEl.style.color = "goldenrod"
    console.log(message)
}
