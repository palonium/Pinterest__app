'use strict'

const pictureItems = document.querySelectorAll('.pictures-item');
const pictures = document.querySelectorAll('.pictures__pic-box');
const pick = document.querySelector('.pictures__pic-box');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popup = document.querySelector('.popup');
// const addBtn = document.querySelectorAll('.picture_add');
const addBtn = document.querySelector('.picture_add');
const modalSelectBoard = document.querySelector('.photo-board');
const closeModalSelectBoard = document.querySelector('.close');
const complainModal = document.querySelector('.complains');
const closeComplainModal = document.querySelector('.complain__close');


const pictureMenu = document.createElement('div');
pictureMenu.classList.add('picture_menu');
const pictureAdd = document.createElement('button');
pictureAdd.innerHTML = 'Добавить на доску';
pictureAdd.classList.add('picture_add');
pictureAdd.classList.add('picture_btn');
pictureMenu.append(pictureAdd);
const pictureComplain = document.createElement('button');
pictureComplain.classList.add('picture_complain');
pictureComplain.classList.add('picture_btn');
pictureComplain.innerHTML = 'Пожаловаться';
pictureMenu.append(pictureComplain);


pictures.forEach((picture) => {
    picture.addEventListener('mouseover', (e) => {
        if (picture.querySelector(".picture_menu") === null) {
            picture.append(pictureMenu);
        }
     });
    //  picture.addEventListener('mouseout', (e) => {
    //     console.log('ss');
    //     pictureMenu.classList.add('hidden');
    //     // if(picture.querySelector('.picture_menu') !== null) {
    //     //     picture.querySelector('.picture_menu').classList.add('hidden');
    //     //     console.log(picture);
    //     // }
    //  })
})

// pictures.forEach((picture) => {
//      picture.addEventListener('mouseout', (e) => {
//         // console.log('ss');
//         // pictureMenu.classList.add('hidden');
//         if(picture.querySelector('.picture_menu') !== null) {
//             picture.querySelector('.picture_menu').classList.add('hidden');
//             // console.log(picture);
//         }
//      })
// })

// pick.addEventListener('mouseleave', (e) => {
//     pictureMenu.classList.add('hidden');
//     console.log('sas');
// })

pictureAdd.addEventListener('click', (e) => {

     modalSelectBoard.style.opacity = '1';
     modalSelectBoard.style.visibility = 'visible';
    })

    closeModalSelectBoard.addEventListener('click', (e) => {
        modalSelectBoard.style.opacity = '0';
        modalSelectBoard.style.visibility = 'hidden';
    })

    window.addEventListener('click', (e) => {
        if(e.target === modalSelectBoard) {
            modalSelectBoard.style.opacity = '0';
        modalSelectBoard.style.visibility = 'hidden';
        }
    })

    pictureComplain.addEventListener('click', (e) => {

        complainModal.style.opacity = '1';
        complainModal.style.visibility = 'visible';
       })

       closeComplainModal.addEventListener('click', (e) => {
        complainModal.style.opacity = '0';
        complainModal.style.visibility = 'hidden';
    })

    window.addEventListener('click', (e) => {
        if(e.target === complainModal) {
            complainModal.style.opacity = '0';
            complainModal.style.visibility = 'hidden';
        }
    })





