'use strict';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const cancel = 'Отменено пользователем!';
const wrongPass = 'Доступ запрещен!';
const rightPass = 'Добро пожаловать!';

const enteredLogin = prompt('Введите имя пользователя:');


if (enteredLogin === null) {
  alert(cancel);
}
else if (enteredLogin!==ADMIN_LOGIN) {
  alert(wrongPass);
}
else {
    const enteredPassword = prompt('Введите пароль:');
    if (enteredPassword === null) {
      alert(cancel);
    }
    else if (enteredPassword!==ADMIN_PASSWORD) {
      alert(wrongPass);
    }
    else {
      alert(rightPass);
    }
}
         
         
         