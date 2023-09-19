import { arrEv } from './modal-windows.js';
import { photosData, addToPage } from './pictures.js';
import { saveListUserToLocalStorage, listUser } from './user.js';
const boards = document.getElementById('boards');
const NameBoard = document.querySelector('#NameBoard');
const addBoarb = document.getElementById('addBoard');
const modalBoard = document.querySelector('.board-list');
class Board {
    constructor(name) {
        this.name = name;
        this.photos = [];
    };
    addPhoto(photo) {
        this.photos.push(photo);
        saveBoardToLocalStorage(this);
        saveListUserToLocalStorage(listUser)
    };
}


export class BoardList {
    constructor() {
        this.arrBoard = [];
    }
    addBoard(board) {
        this.arrBoard.push(board);
        saveListUserToLocalStorage(listUser);

        listUser.arrUser.forEach((item) => {

            let a = listUser.selected.find(i => i.id == item.id);
            if (a != undefined) {


                item.arrBoardUser.push(board);
                console.log(item);
                return;
            }
        })
    }
    bildListBoard() {

        if (listUser.selected.length === 0) {
            this.arrBoard.forEach((item) => {
                const option = new Option(item.name, item.name);
                boards.append(option);
                boardList.bildWidowsBoard();
            });
        } else {
            listUser.arrUser.forEach((item1) => {

                let a = listUser.selected.find(i => i.id == item1.id);

                if (a != undefined) {
                    item1.arrBoardUser.forEach((z) => {
                        const option = new Option(z.name, z.name);
                        boards.append(option);
                        boardList.bildWidowsBoard();

                    })

                }

            })
        }
    }


    bildWidowsBoard() {

        let i = 1;
        document.querySelectorAll('.board-list__name').forEach((itm) => itm.remove());


        if (listUser.selected.length < 1) {
            this.arrBoard.forEach((it) => {

                const p = document.createElement('p');
                p.className = 'board-list__name';


                p.innerHTML = `${i} ${it.name}`;
                ++i;
                modalBoard.append(p);
                p.addEventListener('click', (even) => {
                    this.arrBoard.forEach((a) => {
                        if (a.name == even.target.textContent.substring(2) && a instanceof Board) {

                            let foto = arrEv[arrEv.length - 1];

                            if (!a.photos.includes(foto)) {
                                return a.addPhoto(foto);
                            } else (alert("Фото есть на доске!"));


                        }
                    });

                    arrEv.slice(0, arrEv.length);
                });


            })
        } else {
            listUser.arrUser.forEach((itemd) => {
                let a = listUser.selected.find(i => i.id == itemd.id)
                if (a != undefined) {
                    itemd.arrBoardUser.forEach((it) => {

                        const p = document.createElement('p');
                        p.className = 'board-list__name';


                        p.innerHTML = `${i} ${it.name}`;
                        ++i;
                        modalBoard.append(p);
                        p.addEventListener('click', (even) => {

                            itemd.arrBoardUser.forEach((a) => {

                                if (a.name == even.target.textContent.substring(2)) {
                                    let foto = arrEv[arrEv.length - 1];
                                    if (!a.photos.includes(foto)) {
                                        return a.addPhoto(foto);
                                    } else (alert("Фото есть на доске!"));

                                }
                            })

                            arrEv.slice(0, arrEv.length);

                        })
                    })
                }
            }
            )
        }
    }
}
export const boardList = new BoardList();

function saveDataToLocalStorage() {
    const dataToSave = {
        arrBoard: boardList.arrBoard,
    };
    localStorage.setItem('boardData', JSON.stringify(dataToSave));
}
function saveBoardToLocalStorage(board) {
    const boardData = JSON.stringify(board);
    localStorage.setItem(`board_${board.name}`, boardData);
    const photosArray = board.photos.map(photo => {
        return {
            src: photo.src,
            alt: photo.alt,
            tags: photo.tags,
            avatarSrc: photo.avatarSrc
        };
    });
    localStorage.setItem(`photos_${board.name}`, JSON.stringify(photosArray));
}

function loadDataFromLocalStorage() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("board_")) {
            const boardData = localStorage.getItem(key);
            const board = JSON.parse(boardData);
            const newBoard = new Board(board.name);
            const photosData = localStorage.getItem(`photos_${board.name}`);
            const photosArray = JSON.parse(photosData) || [];
            newBoard.photos = photosArray.map(photoData => {
                return {
                    src: photoData.src,
                    alt: photoData.alt,
                    tags: photoData.tags,
                    avatarSrc: photoData.avatarSrc
                };
            });

            boardList.arrBoard.push(newBoard);
        }
    });
}
loadDataFromLocalStorage();
boardList.bildWidowsBoard();
const s = document.querySelector('.users-list')
s.addEventListener('click', () => {
    document.querySelectorAll('option').forEach((itm) => itm.remove());
    boardList.bildListBoard();
    boardList.bildWidowsBoard();

})

addBoarb.addEventListener('click', () => {

    if (NameBoard.value != "") {
        boardList.addBoard(new Board(NameBoard.value));
        document.querySelectorAll('option').forEach((itm) => itm.remove());
        boardList.bildListBoard();
        NameBoard.value = "";
    }

});

export function outputBoardList() {

    boards.addEventListener('click', (event) => {
        if (listUser.selected.length < 1) {
            boardList.arrBoard.forEach((ev) => {
                if (event.target.value == ev.name) {
                    document.querySelectorAll('.pictures-item').forEach((itm) => itm.remove());
                    photosData.forEach((a) => {
                        ev.photos.forEach((c) => {
                            if (a && c && c.src && a.src && c.src.includes(a.src, 20)) {
                                let item = 0;
                                addToPage(
                                    `pic${item + 1}`,
                                    a.src,
                                    a.alt,
                                    a.tags,
                                    a.avatarSrc
                                );
                            }

                        });
                    });
                }
            })
        } else {
            listUser.arrUser.forEach((itemd) => {
                let a = listUser.selected.find(i => i.id === itemd.id)
                if (a != undefined) {
                    itemd.arrBoardUser.forEach((ev) => {
                        if (event.target.value === ev.name) {
                            document.querySelectorAll('.pictures-item').forEach((itm) => itm.remove());
                            photosData.forEach((a) => {
                                ev.photos.forEach((c) => {
                                    if (c.src.includes(a.src, 20)) {
                                        let item = 0;
                                        addToPage(
                                            `pic${item + 1}`,
                                            a.src,
                                            a.alt,
                                            a.tags,
                                            a.avatarSrc
                                        );
                                    }
                                });
                            });
                        }
                    })
                }
            })
        }
    });

}

outputBoardList();
boardList.bildListBoard();
