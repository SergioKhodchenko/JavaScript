/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const inputId = document.querySelector("#id");
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const inputUpdateId = document.querySelector("#update-id");
const inputUpdateName = document.querySelector("#update-name");
const inputUpdateAge = document.querySelector("#update-age");
const btnGetAll = document.querySelector(".get-all");
const btnGetById = document.querySelector(".find-user");
const btnDeleteById = document.querySelector(".delete-user");
const btnAddUser = document.querySelector(".add-user");
const btnUpdUser = document.querySelector(".update-user");
const apiUrl = "https://test-users-api.herokuapp.com/users/";
const table = document.querySelector("table");
const tBody = document.querySelector("table > tbody");
const btnClearTable = document.querySelector(".clear-table");

btnGetAll.addEventListener("click", getAllUsers);
btnGetById.addEventListener("click", getUserById);
btnDeleteById.addEventListener("click", removeUser);
btnAddUser.addEventListener("click", addUser);
btnUpdUser.addEventListener("click", updateUser);
btnClearTable.addEventListener("click", () => table.setAttribute('hidden', true));

//-----BEGIN getAllUsers function----------
function getAllUsers() {
    fetch(apiUrl)
    .then(responseHandle)
    .then(allUsersDataHandle)
    .catch(error => {
        console.log("Error:", error);
    });
    table.removeAttribute('hidden');
};

function responseHandle (response) {
        if(response.ok) {return response.json()};
        throw new Error("Error fetching data", response.statusText, response.status); 
};

function allUsersDataHandle (obj) {
    const htmlString = obj.data.reduce(
        (acc, user) => acc + createAllUsersTableRow(user),
        ""
      );
    tBody.innerHTML = htmlString;
  };

  function createAllUsersTableRow({ name, id, age }) {
    return `
    <tr>
         <td>${name}</td>
         <td>${id}</td>
         <td>${age}</td>
       </tr>
    `;
  };
//-----END getAllUsers function----------

//-----BEGIN getUserById function----------
  function getUserById(evt) {
    evt.preventDefault();
    if (!table.hasAttribute('hidden')) {
        table.setAttribute('hidden', true);  
      };
    const fullApiUrl = apiUrl + inputId.value;
    fetch(fullApiUrl)
    .then(responseHandle)
    .then(findUserDataHandle)
    .catch(error => {
        console.log("Error:", error);
    });
    table.removeAttribute('hidden');
  }

  function findUserDataHandle (obj) {
    tBody.innerHTML = `
    <tr>
         <td>${obj.data.name}</td>
         <td>${obj.data.id}</td>
         <td>${obj.data.age}</td>
       </tr>
    `;
  };
//-----END getUserById function----------

//-----BEGIN removeUser function----------
function removeUser (evt) {
    evt.preventDefault();
    if (confirm('Are you sure, you want to remove this user from database?')) {
        if (!table.hasAttribute('hidden')) {
            table.setAttribute('hidden', true);  
          };
        const fullApiUrl = apiUrl + inputId.value;
        fetch(fullApiUrl, {method: 'DELETE'})
        .then(() => {
            getAllUsers();
            alert('User successfully removed from database.')
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }
  }
//-----END removeUser function----------

//-----BEGIN addUser function----------
function addUser(evt) {
    evt.preventDefault();
    if (confirm(`Are you sure, you want add user "${inputName.value}" to database?`)) {
        if (!table.hasAttribute('hidden')) {
            table.setAttribute('hidden', true);  
          };
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({ name: inputName.value, age: inputAge.value}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            getAllUsers();
            alert(`User "${inputName.value}" successfully added to database.`)
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }
}
//-----END addUser function----------

//-----BEGIN updateUser function----------
function updateUser(evt) {
    evt.preventDefault();
    if (confirm(`Are you sure, you want update this user's info?`)) {
        if (!table.hasAttribute('hidden')) {
            table.setAttribute('hidden', true);  
          };
        const fullApiUrl = apiUrl + inputUpdateId.value;
        fetch(fullApiUrl, {
            method: 'PUT',
            body: JSON.stringify({ name: inputUpdateName.value, age: inputUpdateAge.value}),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(updateUserResponseHandle)
        .catch(error => {
            console.log("Error:", error);
        });
    }
};

function updateUserResponseHandle (response) {
    if(response.ok) {
        alert(`User "${inputUpdateName.value}" successfully updated.`);
        getAllUsers()
        }
    throw new Error("Error fetching data", response.statusText, response.status); 
};
//-----END updateUser function----------