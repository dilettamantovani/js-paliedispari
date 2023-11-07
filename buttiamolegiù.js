let userBet = prompt('Scegli tra pari e dispari');
let userNumber = prompt('Scegli un numero da 1 a 5');
let pcNumber = randNumber(1, 5);
const winningNumber = userNumber + pcNumber;

function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oddPair(winningNumber) {
    let result = '';

    if(winningNumber % 2 === 0) 
        result = 'Pari';
    
    else{
        result = 'Dispari';
    }

    return result;

}

if(userBet == oddPair(winningNumber)) {
    console.log(`Hai vinto! Il tuo numero ${userNumber} Il numero dell'avversario ${pcNumber}`)
    alert(`Hai vinto! Il tuo numero ${userNumber} Il numero dell'avversario ${pcNumber}`)
    
}else{
    console.log(`Hai perso! Il tuo numero ${userNumber} Il numero dell'avversario ${pcNumber}`)
    alert(`Hai perso! Il tuo numero ${userNumber} Il numero dell'avversario ${pcNumber}`)

}