
import { arrEv } from './modal-windows.js';
const boards = document.getElementById('boards');
const NameBoard = document.querySelector('#NameBoard');
const addBoarb = document.getElementById('addBoard');
const modalBoard = document.querySelector('.board-list');


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
            boardList.bildWidowsBoard();
            // this.arrBoard.forEach((ev) => { ev.src });
        })
    }
    bildWidowsBoard() {
        let i = 1;
        document.querySelectorAll('.board-list__name').forEach((itm) => itm.remove());
        this.arrBoard.forEach((it) => {

            const p = document.createElement('p');
            p.className = 'board-list__name';

            modalBoard.append(p);
            p.innerHTML = `${i} ${it.name}`;
            ++i;
            p.addEventListener('click', (even) => {


                this.arrBoard.forEach((a) => {

                    if (a.name == even.target.textContent.substring(2)) {
                        let foto = arrEv[arrEv.length - 1];
                        return a.addPhoto(foto);

                    }
                })

                arrEv.slice(0, arrEv.length);
                console.log(this.arrBoard);
            })
        })
    }

}

export const boardList = new BoardList();
let board = new Board();

boardList.bildWidowsBoard()
boards

addBoarb.addEventListener('click', () => {

    if (NameBoard.value != "") {
        boardList.addBoard(new Board(NameBoard.value));
        document.querySelectorAll('option').forEach((itm) => itm.remove());
        boardList.bildListBoard();


        NameBoard.value = "";
    }
})
function outputBoardList() {

    boards.addEventListener('click', (event) => {

        boardList.arrBoard.forEach((ev) => {
            if (event.target.value == ev.name) {

                // ev.photos.addToPage();
            }
        });

    })
}



outputBoardList();
// boardList.arrBoard.forEach((ev) => { ev.src });
boardList.bildListBoard();




