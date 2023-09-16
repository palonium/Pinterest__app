'use strict'

const boards = document.getElementById('boards');
const NameBoard = document.querySelector('#NameBoard');
const addBoarb = document.getElementById('addBoard');



class Board {
    constructor(name) {
        this.name = name;
        this.photos = [];
    }

    // Метод для добавления фотографии на доску
    addPhoto(photo) {
        this.photos.push(photo);
    }

    // Метод для отображения фотографий на доске
    displayPhotos() {
        console.log(this.name);
        this.photos.forEach((item) => { console.log(item) })
    }
}


class BoardList {

    arrBoard = [];

    addBoard(board) {
        this.arrBoard.push(board)

    }
    bildListBoard() {


        this.arrBoard.forEach((item) => {
            const option = new Option(item.name, item.name);
            boards.append(option);
            // this.arrBoard.forEach((ev) => { ev.src });
        })
    }
    displayPictures() {

    }
}

const boardList = new BoardList()
let board = new Board();


boards

addBoarb.addEventListener('click', () => {

    if (NameBoard.value != "") {
        boardList.addBoard(new Board(NameBoard.value));
        document.querySelectorAll('option').forEach((itm) => itm.remove());
        boardList.bildListBoard();
        s();
        NameBoard.value = "";
    }
})
function s() {

    boards.addEventListener('click', (event) => {

        boardList.arrBoard.forEach((ev) => {
            if (event.target.value == ev.name) {

            }
        });

        console.log(event.target.value, event.target[event.target.selectedIndex].text, event.target.selectedIndex);
    }
    )
}




boardList.arrBoard.forEach((ev) => { ev.src });
boardList.bildListBoard();




