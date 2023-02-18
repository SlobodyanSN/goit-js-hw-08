// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox"

import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector(`.gallery`);

const imageList = 
    galleryItems.map(
        ({preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img 
          class="gallery__image"
          src="${preview}" 
          data-sourse="${original}"
          alt="${description}">
          </a>`
    }).join(``);

    gallery.insertAdjacentHTML('afterbegin', imageList);

    var lightbox = new SimpleLightbox('.gallery a', {  captionDelay: 250,
          captionsData: "alt",});

