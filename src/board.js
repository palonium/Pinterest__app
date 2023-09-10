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
        this.photos.forEach(() => { })
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
            const optionBoard = document.createElement('option');
            optionBoard.classList.add('header__board');
            optionBoard.innerHTML = `${item.name}`;
            boards.append(optionBoard);

        })
    }

}
const boardList = new BoardList()
boardList.addBoard(new Board('Книги'));
boardList.addBoard(new Board('Природа'));
boardList.addBoard(new Board('Машины'));

boardList.bildListBoard();



