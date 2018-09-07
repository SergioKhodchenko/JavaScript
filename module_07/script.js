/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];
const body = document.querySelector('body');

function createImage(post) {
	const img = document.createElement('img'); //создаю картинку карточки
		img.classList.add('post__image');
		img.setAttribute('src', post.img);
		img.setAttribute('alt', 'post image');
		return img;
}
function createTitle(post) {
	const h2 = document.createElement('h2');  //создаю заголовок карточки
		h2.classList.add('post__title');
		h2.textContent = post.title;
		return h2;
}
function createText(post) {
	const p = document.createElement('p');   //создаю текст карточки
		p.classList.add('post__text');
		p.textContent = post.text;
		return p;
}
function createLink(post) {
	const a = document.createElement('a');     //создаю кнопку карточки
		a.classList.add('button');
		a.textContent = 'Read more';
		a.setAttribute('href', post.link);
		return a;
}

function createPostCard(post) {
	const div = document.createElement('div');  //ф-ция создает и возвращает 1 готовую карточку 
	div.classList.add('post');
	const img = createImage(post);
	const h2 = createTitle(post)
	const p = createText(post);
	const a = createLink(post);	
	div.append(img, h2, p, a);
	return div;          
}
function createCards(posts) {     
	const allCards = posts.map(post => createPostCard(post));  //ф-ция возвращает массив готовых карточек
	return allCards;                 
}
	
const allCardsArray = createCards(posts);  // сохраняю массив готовых карточек, вызвав ф-цию и передав ей заданный нам объект "posts"


const wrapper = document.createElement('div');
for (const card of allCardsArray) {
	wrapper.append(card); // добавляем каждую карточку из массива во wrapper
}

body.append(wrapper); //вставляем wrapper co всеми карточками в DOM за 1 раз