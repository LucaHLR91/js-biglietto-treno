/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km) - done

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

BONUS: introduzione della parte grafica con CSS */


// richieste utente
var eta = parseInt(prompt('inserisci la tua età'));
var chilometri = parseInt(prompt('inserisci i km che percorri'));

// prezzo intero
var prezzo_km = 0.21;
var prezzo_viaggio = prezzo_km * chilometri;

// prezzo ridotto u18
var sconto_u18 = (prezzo_viaggio * 20) / 100;
var prezzo_u18 = prezzo_viaggio - sconto_u18;

// prezzo ridotto over65
var sconto_over65 = (prezzo_viaggio * 40) / 100;
var prezzo_over65 = prezzo_viaggio - sconto_over65;

if (eta < 18) {
    console.log('il prezzo del tuo biglietto è ' + prezzo_u18.toFixed(2) + '€');
}else if (eta > 65) {
    console.log('il prezzo del tuo biglietto è ' + prezzo_over65.toFixed(2) + '€');
}else {
    console.log('il prezzo del tuo biglietto è ' + prezzo_viaggio.toFixed(2) + '€');
}