

const userListDiv = document.querySelector('.users-list');

export class User {

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.arrBoardUser = [];
    }


}


class UserList {
    constructor() {
        this.arrUser = [];
        this.selected = [];
    }

    bildUserList() {


        this.arrUser.forEach((it) => {
            const pUser = document.createElement('p');
            pUser.className = 'user__name';

            pUser.innerHTML = `${it.name}`;
            userListDiv.append(pUser);
            pUser.addEventListener('click', () => {
                this.arrUser.forEach((usSel) => {

                    if (usSel.name == event.target.textContent) {
                        document.querySelectorAll('.user__selected').forEach(a => a.classList.remove('user__selected'));
                        this.selected.splice(0, 1)
                        this.selected.push(usSel);
                        pUser.className = 'user__selected';
                        saveListUserToLocalStorage(listUser);

                        return;
                    }
                })


            })
        })

    }

}

export let listUser = new UserList();
let dataUser = getListUserTolocalStorege()
function addUser() {

    const promise = fetch('https://jsonplaceholder.typicode.com/users');
    promise.then((response) => {
        response.json().then((data) => {
            data.forEach(item => {
                listUser.arrUser.push(new User(item.id, item.name, item.email))
            });
            listUser.bildUserList();
            saveListUserToLocalStorage(listUser)
        })
    }
    )




}
// addUser();

export function saveListUserToLocalStorage(listUser) {
    localStorage.setItem(`listUsers`, JSON.stringify(listUser));
}
function getListUserTolocalStorege() {
    return JSON.parse(localStorage.getItem(`listUsers`));

}
// console.log(dataUser.arrUser);
// if (dataUser != null) {
//     dataUser.arrUser.forEach(a => listUser = new UserList(a))
// }






