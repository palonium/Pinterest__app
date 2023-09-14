'use strict'

const pictureItems = document.querySelectorAll('.pictures-item');
const pictures = document.querySelectorAll('.pictures__pic-box');
// const picture = document.querySelector('.pictures__pic-box');
const pick = document.querySelector('.pictures__pic-box');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popup = document.querySelector('.popup');
// const addBtn = document.querySelectorAll('.picture_add');
const addBtn = document.querySelector('.picture__add');
const modalSelectBoard = document.querySelector('.photo-board');
const closeModalSelectBoard = document.querySelector('.close');
const complainModal = document.querySelector('.complains');
const closeComplainModal = document.querySelector('.complain__close');
const pictureMenu = document.querySelectorAll('.picture__menu');
const pictureAdd = document.querySelectorAll('.picture__add');
const pictureComplain = document.querySelectorAll('.picture__complain');
const sendComplain = document.querySelectorAll('.complain__send');
const susuccessfulComplainMessage = document.querySelector('.susuccessful-complain');
const closeSusuccessfulComplainMessage = document.querySelector('.susuccessful-complain__btn');

export function evListener() {
    const pictures = document.querySelectorAll('.pictures__pic-box');
    pictures.forEach((picture) => {
        picture.addEventListener('mouseover', (e) => {
            picture.querySelector('.picture__menu').classList.add('visible');
        });
        picture.addEventListener('mouseout', (e) => {
            picture.addEventListener('mouseout', (e) => {
                picture.querySelector('.picture__menu').classList.remove('visible');
            });
        })
    })
}
evListener();

pictureAdd.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        modalSelectBoard.classList.add('visible');
    });
})

closeModalSelectBoard.addEventListener('click', (e) => {
    modalSelectBoard.classList.remove('visible');
})

window.addEventListener('click', (e) => {
    if (e.target === modalSelectBoard) {
        modalSelectBoard.classList.remove('visible');
    }
})
console.log(pictureComplain);
pictureComplain.forEach((complain) => {
    complain.addEventListener('click', (e) => {
        complainModal.classList.add('visible');
    });

})

closeComplainModal.addEventListener('click', (e) => {
    complainModal.classList.remove('visible');
})

window.addEventListener('click', (e) => {
    if (e.target === complainModal) {
        complainModal.classList.remove('visible');
    }
})

sendComplain.forEach((send) => {
    send.addEventListener('click', (e) => {
        susuccessfulComplainMessage.classList.add('visible');
        complainModal.classList.remove('visible');
        const radios = document.querySelectorAll('.radio');
        radios.forEach((radio) => {
            if (radio.checked) {
                let parent = radio.parentElement;
                let text = parent.querySelector('.complain__tit').innerHTML;
                console.log(text);
            }
        })
    });
})

closeSusuccessfulComplainMessage.addEventListener('click', (e) => {
    susuccessfulComplainMessage.classList.remove('visible');
})

window.addEventListener('click', (e) => {
    if (e.target === susuccessfulComplainMessage) {
        susuccessfulComplainMessage.classList.remove('visible');
    }
})







class Complaints {

    // complaints = [];

    addComplaint(complaint) {
        this.complaints.push(complaint);
    }
}
const complain = new Complaints();




