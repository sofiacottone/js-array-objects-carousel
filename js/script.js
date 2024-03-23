// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0: 
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// BONUS:
// Una volta terminate tutte e 3 le milestone, potete contattare i tutor che vi assegneranno dei bonus.
// Trovate in allegato lo screenshot, lo zip con le immagini e il file js che contiene l'array di oggetti.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// MILESTONE 1
// seleziono i contenitori dentro i quali andrò a stampare le immagini
const imageContainer = document.getElementById('image-container');
const thumbnailsContainer = document.getElementById('thumbnails-container');

// creo una funzione per inserire le immagini dinamicamente
generateImage(images, imageContainer, thumbnailsContainer);

let activeItem = 0;

// prendo tutte le immagini e le thumbnails e aggiungo la classe active alla prima immagine
const allImages = document.querySelectorAll('.single-image');
const allThumbs = document.querySelectorAll('.single-thumbnail');

allImages[activeItem].classList.add('active');
allThumbs[activeItem].classList.add('active');

//gestione next arrow e previous-arrow
const nextArrow = document.getElementById('arrow-next');
const previousArrow = document.getElementById('arrow-previous');

// funzione per attivare il next button
nextArrow.addEventListener('click', showNextImage);

// funzione per attivare il previous button
previousArrow.addEventListener('click', showPreviousImage);

//BONUS
// gestione play button e stop button
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');

let isTimeSet;
let playInterval;
playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', stop);

//BONUS 2
// al click su ogni thumbnail modifico l'activeItem 
allThumbs.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
        document.querySelector('.single-image.active').classList.remove('active');
        document.querySelector('.single-thumbnail.active').classList.remove('active');

        activeItem = index;

        allImages[activeItem].classList.add('active');
        allThumbs[activeItem].classList.add('active');
    })
});




// #region FUNCTIONS

// 1
// funzione per stampare tutte le immagini nel DOM dinamicamente
// images -> array di immagini da cui prendere le informazioni
// imageContainer -> elemento del DOM in cui andare a stampare le immagini
// thumbnailsContainer -> elemento del DOM in cui andare a stampare i thumbnails
function generateImage(images, imageContainer, thumbnailsContainer) {
    // prendo ogni oggetto nell'array e lo inserisco nel contenitore dell'immagine
    images.forEach((images) => {

        const newImage = `
        <div class="single-image">
            <img src="${images.image}">
            <div class="text-container">
                <h3>${images.title}</h3>
                <p>${images.text}</p>
            </div>
        </div>
        `;

        imageContainer.innerHTML += newImage;


        const newThumbnail = `
        <img class="single-thumbnail" src="${images.image}">
        `;

        thumbnailsContainer.innerHTML += newThumbnail;
    });
}

// 2
// funzione per mostrare l'immagine successiva
function showNextImage() {
    // rimuovo la classe active dall'elemento corrente
    // incremento l'indice 
    // aggiungo la classe active al nuovo elemento da visualizzare

    document.querySelector('.single-image.active').classList.remove('active');
    document.querySelector('.single-thumbnail.active').classList.remove('active');

    if (activeItem < images.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    allImages[activeItem].classList.add('active');
    allThumbs[activeItem].classList.add('active');
}

// 3
// funzione per mostrare l'immagine precedente
function showPreviousImage() {
    // rimuovo la classe active dall'elemento corrente
    // decremento l'indice 
    // aggiungo la classe active al nuovo elemento da visualizzare
    document.querySelector('.single-image.active').classList.remove('active');
    document.querySelector('.single-thumbnail.active').classList.remove('active');

    if (activeItem > 0) {
        activeItem--;
    } else {
        activeItem = images.length - 1;
    }

    allImages[activeItem].classList.add('active');
    allThumbs[activeItem].classList.add('active');
}

// 4
// funzione per attivare l'intervallo
function play() {
    playInterval = setInterval(showNextImage, 3000);
    isTimeSet = true
}

// 4
// funzione per stoppare l'intervallo
function stop() {
    if (isTimeSet = true) {
        clearInterval(playInterval);
    }
};

// #endregion