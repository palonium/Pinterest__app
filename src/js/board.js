'use strict'
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

        const boards = document.getElementById('boards');
        this.arrBoard.forEach((item) => {
            const option = new Option(item.name, 'value');
            boards.append(option);

        })
    }

}

const boardList = new BoardList()
let board = new Board();


const addBoarb = document.getElementById('addBoard');
addBoarb.addEventListener('click', () => {
    const NameBoard = document.querySelector('#NameBoard');
    if (NameBoard.value != "") {
        boardList.addBoard(new Board(NameBoard.value));
        document.querySelectorAll('option').forEach((itm) => itm.remove());
        boardList.bildListBoard();
        NameBoard.value = "";
    }
})


boardList.bildListBoard();




