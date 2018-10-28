/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

'use strict';

const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const clockFace = document.querySelector('.js-time');
let list;

// наш объект таймер
const timer = {
    id: null,
    startTime: null,
    isActive: false,
    deltaTime: 0,
    lapsCounter: [],
    start(){
        if(this.isActive) return;

        this.isActive = true;
        this.startTime = Date.now() - this.deltaTime;
        this.id = setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = currentTime - this.startTime;
            updateClockFace(this.deltaTime);
        }, 100)
    },
    stop(){
        clearInterval(this.id);
        this.isActive = false;
    },
    reset(){
        clearInterval(this.id);
        this.deltaTime = 0;
        updateClockFace(this.deltaTime);
        this.isActive = false;
    },
    lap(){
        const lapTime = getFormattedTime(this.deltaTime);
        this.lapsCounter.push(lapTime);
        
        const ul = document.querySelector('.js-laps');

        const li = document.createElement('li');
        list = ul;
        li.textContent = this.lapsCounter[this.lapsCounter.length -1];
        li.style.width = '500px';
        li.style.fontSize = '50px';
        li.style.textAlign = 'center';
        ul.appendChild(li);
        return ul;
    }
};

//слушатели кликов по кнопкам
startBtn.addEventListener('click', handleStartBtnClick);
lapBtn.addEventListener('click', handleLapBtnClick);
resetBtn.addEventListener('click', handleResetBtnClick);

// обработчики слушателей кликов
function handleStartBtnClick(){
    if(!timer.isActive){
        timer.start();
        this.textContent = 'Pause';
        setActiveBtn(this);
    } else{
        timer.stop();
        this.textContent = 'Continue';
        this.classList.remove('active');
    };
}
function handleResetBtnClick(){
    timer.reset();
    startBtn.textContent = 'Start';
    startBtn.classList.remove('active');
    list.textContent = '';
    setActiveBtn(this);
}

function handleLapBtnClick(){
   timer.lap();
   this.classList.add('active');
}

// Обновляет поле счетчика новым значением при вызове аргумент time это кол-во миллисекунд
function updateClockFace (time) {
    clockFace.textContent = getFormattedTime(time);
}

// преобразование осчитанного времени в нужный формат
function getFormattedTime(time) {
  const date = new Date(time);
  let min = date.getMinutes();
  min = min < 10 ? `0${min}` : min;
  let sec = date.getSeconds();
  sec = sec < 10 ? `0${sec}` : sec;
  let milliSec = Number.parseInt(date.getMilliseconds() / 100);
  return`${min}:${sec}.${milliSec}`;
}

// Подсветка активной кнопки
function setActiveBtn(button) {
  if(button.classList.contains('active')) {
    lapBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    return;
  }
  
  lapBtn.classList.remove('active');
  resetBtn.classList.remove('active');
  button.classList.add('active');
}

