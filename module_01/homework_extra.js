
   const sharm = 15;
   const hurgada = 25;
   const taba  = 6;
   
 const places = prompt('Введите желаемое количество мест:');
 
if (Number.isInteger(Number(places))===false) {
   alert('Ошибка ввода');
}
else if (Number(places)<=taba) {
    let isComing = confirm('есть место в группе Taba, согласны ли Вы быть в этой группе?');
        if (isComing===true) {
            alert('Приятного путешествия в группе Taba'); 
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }        
    }
    else if (Number(places)<=sharm) {
    let isComing = confirm('есть место в группе Sharm, согласны ли Вы быть в этой группе?');
        if (isComing===true) {
            alert('Приятного путешествия в группе Sharm-El-Sheikh');
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }
    }
    else if (Number(places)<=hurgada) {
    let isComing = confirm('есть место в группе Hurgada, согласны ли Вы быть в этой группе?');
        if (isComing===true) {
            alert('Приятного путешествия в группе Hurgada');
        }
        else {
            alert('Нам очень жаль, приходите еще!');
        }
    }
    else {
      alert('Извините, столько мест нет ни в одной группе!');
  }
