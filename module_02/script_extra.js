
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let flag = false;
let inputPass;
do {
   if (attempts<=0) 
    {
     alert("У вас закончились попытки, аккаунт заблокирован!");
     break;
    }   
   inputPass = prompt('Введите пароль:');
   for( const x of passwords) 
      {
        if (x === inputPass)
        {
          flag=true;
          break;
        }
      }
  if (inputPass===null) { break;};
  attempts -=1;
  if (flag)
    {
    alert('Добро пожаловать!');
    break;
    }
  else {
    alert('Неверный пароль, у вас осталось ' + attempts + ' попыток');
  }
  console.log(attempts, flag, typeof(flag), inputPass);
} while (inputPass!==null); 