const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let endFlag = false;

const checkLoginValidity = login => login.length > 4 && login.length < 16;

const checkIfLoginExists = (logins, login) => logins.includes(login);

const addLogin = (logins, login) => {
  if (!checkLoginValidity(login)) {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (checkIfLoginExists(logins, login)) {
    alert("Такой логин уже используется!");
  } else {
    logins.push(login);
    alert("Логин успешно добавлен!");
    return (endFlag = true);
  }
};

do {
  let login = prompt("Введите пароль:");
  if (login === null) break;
  addLogin(logins, login);
} while (!endFlag);
