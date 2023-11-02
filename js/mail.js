const autorizzati = ["thomas@gmail.com", "giacomo@gmail.com", "alberto@gmail.com", "alfredo@gmail.com"];
autorizzati[3]="giuseppe@gmail.com";
autorizzati.push("anna@gmail.com");
// console.log(autorizzati);

const email = prompt("Inserisci indirizzo email");
console.log(email);

let mailTrovata = false;

for (let i=0; i < autorizzati.length; i++){
    
    const element = autorizzati [i];    

    // console.log( element, i );

    if( element == email ){
        mailTrovata = true;
    } 

    console.log(mailTrovata, i);
}

if(mailTrovata) {
    console.log("Benvenuto, "+ email);
} else {
    console.log("UTENTE NON AUTORIZZATO!");
}