const giocatore = Math.floor(Math.random() * 6) +1;
const computer = Math.floor(Math.random() * 6) +1;

console.log("giocatore: ", giocatore);
console.log("computer: ", computer);

if (giocatore > computer) {
    alert("Giocatore vince!");
} else if(computer > giocatore) {
    alert("Computer vince!");
} else {
    alert("Pareggio!");
}