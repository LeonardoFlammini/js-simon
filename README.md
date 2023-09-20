Simon
===

Descrizione:

* Visualizzare in pagina 5 numeri casuali. 
* Da lì parte un timer di 5 secondi.
* Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, tramite il prompt(), uno alla volta, i numeri che ha visto precedentemente.
* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

**Consigli del giorno:**

* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

___

## Procedimento 

1. prendo le card in cui stampare i numeri con getElementByClassName e le salvo in un array;

1. aggiungo l'evento click al bottone play

1. Genero 5 numeri random, li salvo in un array e li assegno a all' inner html dell'array di card e tolgo il click al bottone

1. genero una time-function di 5 s stampo delle x a posto dei numeri e attraverso un prompt chiedo 5 volte un numero da salvare in un array, cambio il testo al bottone (=>"reset") e gli cambio la funzione che chiamerà (reset())

1. confronto i due array, nel caso siano uguali l'utente vince, altrimenti perde

1. stampo un messaggio a video

1. chiamo la funzione reset al premere del bottone che mi riporta alla situazione di default, svuota gli array e scrive play nel bottone e gli cambia la funzione (play())