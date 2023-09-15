'use strict';

class Picture {
    constructor(id, src, alt, tags, avatarSrc) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.tags = tags;
        this.avatarSrc = avatarSrc;
    }

    addToPage() {
        const pictureItem = document.createElement('div');
        pictureItem.className = 'pictures-item';
        pictureItem.id = this.id;

        const picBox = document.createElement('div');
        picBox.className = 'pictures__pic-box';
        const img = document.createElement('img');
        img.className = 'pic';
        img.src = this.src;
        img.alt = this.alt;

        const description = document.createElement('div');
        description.className = 'pictures__discription';

        const avatarBox = document.createElement('div');
        avatarBox.className = 'pictures__avatar-box';
        const avatar = document.createElement('img');
        avatar.src = this.avatarSrc;
        avatar.alt = '';
        avatar.className = 'pictures__avatar';

        const tagsElement = document.createElement('p');
        tagsElement.className = 'pictures__tags';
        tagsElement.textContent = this.tags;

        picBox.appendChild(img);
        avatarBox.appendChild(avatar);
        description.appendChild(avatarBox);
        description.appendChild(tagsElement);
        pictureItem.appendChild(picBox);
        pictureItem.appendChild(description);

        const picturesContainer = document.querySelector('.pictures');
        picturesContainer.appendChild(pictureItem);

        // const pictures = document.querySelectorAll('.pictures__pic-box');
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
}

const photosData = [
    { src: 'img/1.png', alt: '1', tags: '#дракон', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/2.jpg', alt: '2', tags: '#парк', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/3.jpg', alt: '2', tags: '#бойцовскийклуб', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/4.jpg', alt: '2', tags: '#кот', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/5.jpg', alt: '2', tags: '#вода', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/6.jpg', alt: '2', tags: '#медузы', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/7.jpg', alt: '2', tags: '#абстракция', avatarSrc: 'img/avatar.jpg' },
    { src: 'img/8.jpg', alt: '2', tags: '#шрек', avatarSrc: 'img/avatar.jpg' },
];

for (let i = 0; i < photosData.length; i++) {
    const photo = photosData[i];
    const picture = new Picture(
        `pic${i + 1}`,
        photo.src,
        photo.alt,
        photo.tags,
        photo.avatarSrc
    );

    picture.addToPage();
}

const searchInput = document.querySelector('.header__search');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const picturesContainer = document.querySelector('.pictures');

    while (picturesContainer.firstChild) {
        picturesContainer.removeChild(picturesContainer.firstChild);
    }

    for (let i = 0; i < photosData.length; i++) {
        const photo = photosData[i];
        if (photo.tags.toLowerCase().includes(searchTerm)) {
            const picture = new Picture(
                `pic${i + 1}`,
                photo.src,
                photo.alt,
                photo.tags,
                photo.avatarSrc
            );
            picture.addToPage();
        }
    }
});

function addPhotoFromDevice() {
    const picturesContainer = document.querySelector('.pictures');
    const fileInput = document.querySelector('input[type="file"]');
    const hashTagInput = document.getElementById('hashTagInput');
    const file = fileInput.files[0];
    const hashTag = hashTagInput.value;

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            const img = document.createElement('img');
            img.className = 'pic';
            img.src = reader.result;

            
            const newPhotoId = `pic${photosData.length + 1}`;

            const newPhotoData = {
                src: reader.result,
                alt: 'Новая фотография',
                tags: hashTag,
                avatarSrc: 'img/avatar.jpg',
            };
            photosData.push(newPhotoData);
            
            const newPicture = new Picture(
                newPhotoId,
                newPhotoData.src,
                newPhotoData.alt,
                newPhotoData.tags,
                newPhotoData.avatarSrc
            );
            newPicture.addToPage();
        };
    }
    addEventListenersToPictures();
}
