
import { arrEv } from './modal-windows.js';
import { photosData, addToPage } from './pictures.js';
import { listUser } from './user.js';
import { storage } from './storage.js';
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
    };
}


class BoardList {
    constructor() {
        this.arrBoard = storage.getBoards(); 
    }
    
      addBoard(board) {
        this.arrBoard.push(board);
        storage.saveBoards(this.arrBoard);

        listUser.arrUser.forEach((item) => {

            let a = listUser.selected.find(i => i.id == item.id)
            if (a != undefined) {
                item.arrBoardUser.push(board);
                console.log(item);
                return;
            }

        })
    }
    bildListBoard() {
        if (listUser.selected.length < 1) {
            this.arrBoard.forEach((item) => {
                const option = new Option(item.name, item.name);
                boards.append(option);
                boardList.bildWidowsBoard()
            })
        } else {
            listUser.arrUser.forEach((item1) => {

                let a = listUser.selected.find(i => i.id == item1.id)
                if (a != undefined) {
                    item1.arrBoardUser.forEach((z) => {
                        const option = new Option(z.name, z.name);
                        boards.append(option);
                        boardList.bildWidowsBoard()

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

                        if (a.name == even.target.textContent.substring(2)) {
                            let foto = arrEv[arrEv.length - 1];
                            return a.addPhoto(foto);

                        }
                    })

                    arrEv.slice(0, arrEv.length);

                })
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
                                    return a.addPhoto(foto);

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
        } else {
            listUser.arrUser.forEach((itemd) => {
                let a = listUser.selected.find(i => i.id == itemd.id)
                if (a != undefined) {
                    itemd.arrBoardUser.forEach((ev) => {
                        if (event.target.value == ev.name) {
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




