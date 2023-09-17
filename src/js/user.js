

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
        this.selected = []
    }

    selectedUser(user) {

    }
    clirSelected() {
        this.selected.splice(1, 1)
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

                        this.selected.splice(0, 1)
                        this.selected.push(usSel);

                        return;
                    }
                })


            })
        })

    }

}
export const listUser = new UserList();


function addUser() {
    const promise = fetch('https://jsonplaceholder.typicode.com/users');

    promise.then((response) => {
        response.json().then((data) => {

            data.forEach(item => listUser.arrUser.push(new User(item.id, item.name, item.email)));
            listUser.bildUserList();

        })
    }
    )
}


addUser();
