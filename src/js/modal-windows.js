'use strict'

const ComplainsArray = [];
class Complaints {

    constructor(text, user) {
        this.text = text,
        this.user = user;
        // this.photo = photo;
    }

    addComplaint() {
        ComplainsArray.push(this);
    }

    addComplaintToPage() {
        const complainList = document.querySelector('.complain-list');
        const newComplain = document.createElement('div');
        newComplain.classList.add('complain-list__item');
        const newComplainAuthor = document.createElement('p');
        newComplainAuthor.innerHTML = this.user;
        newComplain.append(newComplainAuthor);
        const newComplainText = document.createElement('p');
        newComplainText.innerHTML = this.text;
        newComplain.append(newComplainText);
        complainList.append(newComplain);
    }
}
const complain = new Complaints();



export function evListener() {
    const pictures = document.querySelectorAll('.pictures__pic-box');
    const pictureItem = document.querySelector('.pictures-item');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');
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
    const complaintListOpen = document.querySelector('.footer__complaint-btn');
    const complaintList = document.querySelector('.complain-board');
    const complaintListClose = document.querySelector('.complain-board__btn');

    pictures.forEach((picture) => {
        picture.addEventListener('mouseover', (e) => {
            picture.querySelector('.picture__menu').classList.add('visible');
        });
        picture.addEventListener('mouseout', (e) => {
            picture.querySelector('.picture__menu').classList.remove('visible');
        })
    })

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

    function findAncestor (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        console.log(el);
        return el;
    }
    
    pictureComplain.forEach((complain) => {
        complain.addEventListener('click', (e) => {
            complainModal.classList.add('visible');
            findAncestor(complain, 'pictures__pic-box');
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
                    complain.text = text;
                    complain.user = 'user';
                    complain.addComplaint();
                    complain.addComplaintToPage();
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

    complaintListOpen.addEventListener('click', (e) => {
        complaintList.classList.add('visible');
    })

    complaintListClose.addEventListener('click', (e) => {
        complaintList.classList.remove('visible');
    })

    window.addEventListener('click', (e) => {
        if (e.target === complaintList) {
            complaintList.classList.remove('visible');
        }
    })
}
evListener();








