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

function createPostCard(post) {
	const div = document.createElement('div');
		div.classList.add('post');
	const img = document.createElement('img');
		img.classList.add('post__image');
		img.setAttribute('src', post.img);
		img.setAttribute('alt', 'post image');
	const h2 = document.createElement('h2');
		h2.classList.add('post__title');
		h2.textContent = post.title;
	const p = document.createElement('p');
		p.classList.add('post__text');
		p.textContent = post.text;
	const a = document.createElement('a');
		a.classList.add('button');
		a.textContent = 'Read more';
		a.setAttribute('href', post.link);
	body.append(div);
	div.append(img);
	div.append(h2);
	div.append(p);
	div.append(a);
}
function createCards(posts) {
	for (const post of posts) {
    createPostCard(post);
  }
}

createCards(posts);