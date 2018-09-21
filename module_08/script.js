/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/


const gallery = document.querySelector('.image-gallery');

const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];

const fullView = document.createElement('div');
fullView.classList.add('fullview');
fullView.innerHTML = '<img src="img/fullview-1.jpg" alt="alt text 1">';  // динамически создаю увеличенную картинку

const preView = document.createElement('ul');
preView.classList.add('preview');  // динамически создаю список-галерею маленьких картинок

for (const item of galleryItems) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', item.preview);
  img.setAttribute('data-fullview', item.fullview); // из заданного объекта galleryItems берем поля и добавляем их в атрибуты галереи
  img.setAttribute('alt', item.alt);
  li.append(img);
  preView.append(li);
}

gallery.append(fullView, preView);                    // добавляю сразу и всю галерею и увеличенную картинку в DOM

let currentSelectedImage = preView.firstElementChild; // переменная для хранения текущей выделенной картинки. По умолчанию записываю туда первую из галереи

const makeZoom = event => {                           // колл-бэк функция для обработки клика на галерее
  if (currentSelectedImage.classList.contains('selected')) { //Для того чтобы выделение пропадало на одной картинке при клике на другую
    currentSelectedImage.classList.remove('selected'); // проверяем наличие класса со стилями, которые оформляют вид текущей выделенной картинки в галерее. 
  }
  const targetImage = event.target;                   //выбираю картинку на которой произошел клик
  fullviewImage.firstElementChild.setAttribute('src', targetImage.dataset.fullview); // беру у нее значение дата-атрибута fullview и присваиваю его как src увеличенной картинке
  targetImage.classList.add('selected');              // картинку на которой произошел клик делаю выделенной и стилизирую путем добавления каласса
  currentSelectedImage = targetImage;                 // перезаписываю переменную для хранения текущей выделенной картинки.
}

const previewList = document.querySelector('.preview');
const fullviewImage = document.querySelector('.fullview');

previewList.addEventListener('click', makeZoom);
