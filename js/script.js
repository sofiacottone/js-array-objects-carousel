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


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
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

let activeItem = 0;
console.log(activeItem);

// MILESTONE 1
const imagesContainer = document.querySelector('#images-container');
const thumbnailsContainer = document.querySelector('#thumbnails-container');

// prendo ogni oggetto nell'array e lo inserisco nel contenitore dell'immagine
images.forEach((image) => {
    // console.log(image);

    const newImage = `
    <div class="ms-image-wrapper">
        <img src="${image.image}">
    </div>
    `;
    console.log(newImage);

    imagesContainer.innerHTML += newImage;

    const newThumbnail = `
    <div class="ms-thumbnail">
        <img src="${image.image}">
    </div>
    `;

    thumbnailsContainer.innerHTML += newThumbnail;
});

// aggiungo la classe active alla prima immagine
const allImages = document.querySelectorAll('.ms-image-wrapper');
allImages[activeItem].classList.add('active');

const allThumbnails = document.querySelectorAll('.ms-thumbnail');
allThumbnails[activeItem].classList.add('active');

console.log(allImages);
console.log(allThumbnails);
