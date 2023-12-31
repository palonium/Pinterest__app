'use strict';

import { evListener } from './modal-windows.js';
export { photosData };
export function addToPage(id, src, alt, tags, avatarSrc) {
    const pictureItem = document.createElement('div');
    pictureItem.className = 'pictures-item';
    pictureItem.id = id;

    const picBox = document.createElement('div');
    picBox.className = 'pictures__pic-box';
    const img = document.createElement('img');
    img.className = 'pic';
    img.src = src;
    img.alt = alt;

    const description = document.createElement('div');
    description.className = 'pictures__discription';

    const avatarBox = document.createElement('div');
    avatarBox.className = 'pictures__avatar-box';
    const avatar = document.createElement('img');
    avatar.src = avatarSrc;
    avatar.alt = '';
    avatar.className = 'pictures__avatar';

    const tagsElement = document.createElement('p');
    tagsElement.className = 'pictures__tags';
    tagsElement.textContent = tags;

    picBox.appendChild(img);
    avatarBox.appendChild(avatar);
    description.appendChild(avatarBox);
    description.appendChild(tagsElement);
    pictureItem.appendChild(picBox);
    pictureItem.appendChild(description);

    const picturesContainer = document.querySelector('.pictures');
    picturesContainer.appendChild(pictureItem);

    const pictureMenu = document.createElement('div');
    pictureMenu.classList.add('picture__menu');
    const pictureAdd = document.createElement('button');
    pictureAdd.innerHTML = 'Добавить на доску';
    pictureAdd.classList.add('picture__add');
    pictureAdd.classList.add('picture__btn');
    pictureAdd.classList.add('btn');
    pictureMenu.append(pictureAdd);
    const pictureComplain = document.createElement('button');
    pictureComplain.classList.add('picture__complain');
    pictureComplain.classList.add('picture__btn');
    pictureComplain.classList.add('btn');
    pictureComplain.innerHTML = 'Пожаловаться';
    pictureMenu.append(pictureComplain);
    picBox.append(pictureMenu);
    
}

let photosData = getPhotosFromLocalStorage();

if (photosData.length === 0) {
    photosData = [
        { src: 'img/1.png', alt: '1', tags: '#дракон', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/2.jpg', alt: '2', tags: '#парк', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/3.jpg', alt: '2', tags: '#бойцовскийклуб', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/4.jpg', alt: '2', tags: '#кот', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/5.jpg', alt: '2', tags: '#вода', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/6.jpg', alt: '2', tags: '#медузы', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/7.jpg', alt: '2', tags: '#абстракция', avatarSrc: 'img/avatar.jpg' },
        { src: 'img/8.jpg', alt: '2', tags: '#шрек', avatarSrc: 'img/avatar.jpg' },
    ];

    savePhotosToLocalStorage();
}

let boardPhotos = [];

function displayPhotos() {
    for (let i = 0; i < photosData.length; i++) {
        const photo = photosData[i];
        addToPage(
            `pic${i + 1}`,
            photo.src,
            photo.alt,
            photo.tags,
            photo.avatarSrc
        );
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayPhotos();
    evListener();
});

function savePhotosToLocalStorage() {
    localStorage.setItem('photosData', JSON.stringify(photosData));
}
function getPhotosFromLocalStorage() {
    const photosDataStr = localStorage.getItem('photosData');
    return photosDataStr ? JSON.parse(photosDataStr) : [];
}

const searchInput = document.querySelector('.header__search');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    const picturesContainer = document.querySelector('.pictures');
    picturesContainer.innerHTML = ''; 

    photosData.forEach((photo, index) => {
        if (photo.tags.toLowerCase().includes(searchTerm)) {
            addToPage(
                `pic${index + 1}`,
                photo.src,
                photo.alt,
                photo.tags,
                photo.avatarSrc
            );
        }
    });
    evListener()
});