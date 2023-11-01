const autorizzati = ["thomas@gmail.com", "giacomo@gmail.com", "alberto@gmail.com", "alfredo@gmail.com"];
autorizzati[3]="giuseppe@gmail.com";
autorizzati.push("anna@gmail.com");
console.log(autorizzati);

const email = prompt("Inserisci indirizzo email");
console.log(email);

let testo;

if (email == autorizzati) {
    
    testo = "UTENTE AUTORIZZATO!";
    
} else {
    testo = "ERRORE, UTENTE NON AUTORIZZATO!";
}