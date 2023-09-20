
import { boardList } from './board.js';
const ComplainsArray = [];
export const arrEv = [];
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
        const newComplainPhotoWrap = document.createElement('div');
        const newComplainPhoto = this.photo.cloneNode(true);
        newComplainPhotoWrap.append(newComplainPhoto);
        newComplain.append(newComplainPhoto);
        const newComplainText = document.createElement('p');
        newComplainText.innerHTML = this.text;
        newComplain.append(newComplainText);
        complainList.append(newComplain);
    }
}
const complain = new Complaints();

function addComplaintToLS() {
    localStorage.setItem('complaints', JSON.stringify(complain));
}

function getComplaintFromLS() {
    const complainToStr = localStorage.getItem('complaints');
    return complainToStr ? JSON.parse(complainToStr) : [];
}

export function evListener() {
    const pictures = document.querySelectorAll('.pictures__pic-box');
    const pictureItem = document.querySelector('.pictures-item');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');
    const addBtn = document.querySelector('.picture__add');
    const modalSelectBoard = document.querySelector('.photo-board');
    const closeModalSelectBoard = document.querySelector('.photo-board__close');
    const complainModal = document.querySelector('.complains');
    const closeComplainModal = document.querySelector('.complain__close');
    const pictureMenu = document.querySelectorAll('.picture__menu');
    const pictureAdd = document.querySelectorAll('.picture__add');
    const pictureComplain = document.querySelectorAll('.picture__complain');
    // const sendComplain = document.querySelector('.complain__send');
    const sendComplain = document.querySelectorAll('.complain__send');
    // const complainItem = document.querySelector('.complain__item');
    const comp = document.querySelector('.complain');
    const susuccessfulComplainMessage = document.querySelector('.susuccessful-complain');
    const susuccessfulComplainMsg = document.querySelector('.susuccessful-complain__message')
    const closeSusuccessfulComplainMessage = document.querySelector('.susuccessful-complain__btn');
    const complaintListOpen = document.querySelector('.footer__complaint-btn');
    const complaintList = document.querySelector('.complain-board');
    const complaintListClose = document.querySelector('.complain-board__btn');
    const complaintListTitle = document.querySelector('.complain-board__title');
    const photoMagnifications = document.querySelectorAll('.svg');
    const photoMagnification = document.querySelector('.svg');
    const photoMagnificationFieldContent = document.querySelector('.photo-magnification-field__content');
    const photoMagnificationField = document.querySelector('.photo-magnification-field');
    const closePhotoMagnification = document.querySelector('.photo-magnification-field__close');
    const closePhotoMagnifications = document.querySelectorAll('.photo-magnification-field__close');
    const complainList = document.querySelector('.complain-list');

    pictures.forEach((picture) => {
        picture.addEventListener('mouseover', (e) => {
            if (e.target.tagName == 'IMG') { arrEv.push(e.target); }
            picture.querySelector('.picture__menu').classList.add('visible');
        });
        picture.addEventListener('mouseout', (e) => {
            picture.querySelector('.picture__menu').classList.remove('visible');
        })
        picture.addEventListener('click', (e)  => {
            photoMagnificationFieldContent.innerHTML = '';
            const currentPhoto = picture.querySelector('.pic');
            const cloneCurrentPhoto = currentPhoto.cloneNode(true);
            const a = photoMagnificationFieldContent.querySelector('.pic');
            photoMagnificationFieldContent.append(closePhotoMagnification);
            photoMagnificationFieldContent.append(cloneCurrentPhoto);
            photoMagnificationField.classList.add('visible');
        }, false)
    })

    pictureAdd.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            modalSelectBoard.classList.add('visible');
            e.stopPropagation();
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

    function findAncestor(el, cls, findElCls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        const findEl = el.querySelector('.pic');
        return findEl;
    }

    let result = '';
    pictureComplain.forEach((complain) => {
        complain.addEventListener('click', (e) => {
            complainModal.classList.add('visible');
            result = findAncestor(complain, 'pictures__pic-box', 'pic');
            e.stopPropagation();
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

    // let magnPhoto = '';
    // photoMagnifications.forEach((PhotoMg) => {
    //     photoMagnifications[photoMagnifications.length - 1].classList.add('hidden');
    //     PhotoMg.addEventListener('click', (e) => {
    //         magnPhoto = findAncestor(PhotoMg, 'pictures__pic-box', 'pic');
    //         magnPhoto.innerHTML = '';
    //         let resultPhotoClone = magnPhoto.cloneNode(true);
    //         photoMagnificationFieldContent.innerHTML = '';
    //         photoMagnificationFieldContent.append(closePhotoMagnification.cloneNode(true));
    //         photoMagnificationFieldContent.append(resultPhotoClone);
    //         photoMagnificationField.classList.add('visible');
    //         const a = photoMagnificationFieldContent.querySelector('.photo-magnification-field__close');
    //         a.addEventListener('click', (e) => {
    //             photoMagnificationField.classList.remove('visible');
    //         })
    //     })
    // }
    // )

    // closePhotoMagnifications.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //         photoMagnificationField.classList.add('hidden');
    //         console.log('sa');
    // })
    // })

    closePhotoMagnification.addEventListener('click', (e) => {
        photoMagnificationField.classList.remove('visible');
    })


    window.addEventListener('click', (e) => {
        if (e.target === photoMagnificationField) {
            photoMagnificationField.classList.remove('visible');
        }
    })

    // sendComplain.addEventListener('click', (e) => {
    //     susuccessfulComplainMessage.classList.add('visible');
    //     complainModal.classList.remove('visible');
    //     const radios = comp.querySelectorAll('.radio');
    //     console.log(sendComplain);
    //         radios.forEach((radio) => {
    //             if (radio.checked) {
    //                 let parent = radio.parentElement;
    //                 let text = parent.querySelector('.complain__tit').innerHTML;
    //                 complain.text = text;
    //                 complain.user = 'user';
    //                 complain.addComplaint();
    //                 complain.addComplaintToPage();
    //             }
    //         })
    //     });

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
                    complain.photo = result;
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
        // if(complaintList.textContent.trim().length) {
        //     complaintListTitle.innerHTML = 'Список пуст';
        // }else{
        //     complaintListTitle.innerHTML = 'Список жалоб';
        // }
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








