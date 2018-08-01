const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const checkLoginValidity = login => login.length >= 4 && login.length < 16;

const checkIfLoginExists = (logins, login) => logins.includes(login);

const addLogin = (login) => {
  if (!checkLoginValidity(login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (checkIfLoginExists(logins, login)) {
    console.log("Такой логин уже используется!");
  } else {
    logins.push(login);
    console.log("Логин успешно добавлен!");
  }
};




addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
