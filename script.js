// ======================================================================================== sticky header

window.addEventListener('scroll', function() {
	if (header.offsetTop > 0) {
		document.querySelector('.header').classList.add('header--sticky');
	} else {
		document.querySelector('.header').classList.remove('header--sticky');
	}
});

// ======================================================================================== active menu links

const MENU = document.querySelector('header');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('.header-navigation__item__link').forEach(el => el.classList.remove('header-navigation__item--selected'));
	event.target.classList.add('header-navigation__item--selected');
});

// change slides

const sliderItems = document.querySelectorAll('.slider-content');
let currentItem = 1;

const sliderArrows = document.querySelectorAll('.slider-arrow');
const next = document.getElementById('slider-arrow-right');
const previous = document.getElementById('slider-arrow-left');

function previousItem() {
	changeCurrentItem(currentItem - 1);
}

function nextItem() {
	changeCurrentItem(currentItem + 1);
}

next.addEventListener('click', function() {
	nextItem();
	changeBackground();
});

previous.addEventListener('click', function() {
	previousItem();
	changeBackground();
});

function changeCurrentItem(n) {
	sliderItems[currentItem].classList = 'slider-content';
    currentItem = (n + sliderItems.length) % sliderItems.length;
    sliderItems[currentItem].classList = 'hide';
}

// ======================================================================================== change slider background

function changeBackground() {
	if (slider.classList.contains('bg-red')) {
		slider.classList.remove('bg-red');
		slider.classList.add('bg-blue');
	} else if (slider.classList.contains('bg-blue')){
		slider.classList.remove('bg-blue');
		slider.classList.add('bg-red');
	}
}

// ======================================================================================== darken phone screens

let verticalPhoneImage = document.querySelector('#vertical');
let horizontalPhoneImage = document.querySelector('#horizontal');
let multiPhoneImage = document.querySelector('#multi');
let verticalPhoneItems = verticalPhoneImage.querySelectorAll('img');
let horizontalPhoneItems = horizontalPhoneImage.querySelectorAll('img');
let multiPhoneItems = multiPhoneImage.querySelectorAll('img');

verticalPhoneImage.addEventListener('click', function () {	
	changeScreen(verticalPhoneItems);
});

horizontalPhoneImage.addEventListener('click', function () {	
	changeScreen(horizontalPhoneItems);
});

multiPhoneImage.addEventListener('click', function () {	
	changeScreen(multiPhoneItems);
});

function changeScreen(items) {
	if (items[0].classList.contains('hide')) {
		items[0].classList.remove('hide');
		items[0].classList.add('slider-content__img');
		items[1].classList.remove('slider-content__img');
		items[1].classList.add('hide');
	} else if (items[1].classList.contains('hide')) {
		items[1].classList.remove('hide');
		items[1].classList.add('slider-content__img');
		items[0].classList.remove('slider-content__img');
		items[0].classList.add('hide');
	}
}

// ======================================================================================== portfolio active images

const GALLERY = document.querySelector('.portfolio-examples');

GALLERY.addEventListener('click', (event) => {
	GALLERY.querySelectorAll('.portfolio-examples__photo').forEach(el => el.classList.remove('portfolio-examples__photo--selected'));
	event.target.classList.add('portfolio-examples__photo--selected');
});

const SWITCH_GALLERY = document.querySelector('.portfolio-nav');


SWITCH_GALLERY.addEventListener('click', (event) => {
	SWITCH_GALLERY.querySelectorAll('.portfolio-nav__button__text').forEach(el => el.classList.remove('portfolio-nav__button__text--selected'));
	event.target.classList.add('portfolio-nav__button__text--selected');
	shuffleImages(GALLERY_NODE);	
});

// ======================================================================================== portfolio click-to-change images

GALLERY.addEventListener('click', (event) => {
	GALLERY.querySelectorAll('.portfolio-examples__photo').forEach(el => el.classList.remove('portfolio-examples__photo--selected'));
	event.target.classList.add('portfolio-examples__photo--selected');
});

// ======================================================================================== portfolio shuffle images 
let GALLERY_NODE = document.querySelector('.portfolio-examples');

function shuffleImages(GALLERY_NODE) {
	for (let i = GALLERY_NODE.children.length; i >= 0; i--) {
		GALLERY_NODE.appendChild(GALLERY_NODE.children[Math.random() * i | 0]);	
	}
	return GALLERY_NODE;
}

// ======================================================================================== form validation

const BUTTON_SUBMIT = document.getElementById('submit-button');
const BUTTON_CLOSE = document.getElementById('close-button');
let FORM = document.getElementById('form');
let MESSAGE = document.getElementById('message-block');

FORM.addEventListener('submit', (event) => {
	event.preventDefault();
	MESSAGE.classList.remove('hide');
	let subject = document.getElementById('subject').value.toString();
	if (subject == '') {
		subject = 'No subject';
	} else {
		subject = `Subject: ${subject}`;
	}
	let description = document.getElementById('description').value.toString();
	if (description == '') {
		description = 'No description';
	} else {
		description = `Description: ${description}`;
	}
	document.getElementById('message-subject').innerText = subject;
	document.getElementById('message-description').innerText = description;
});  

BUTTON_CLOSE.addEventListener('click', () => {
document.getElementById('message-block').classList.add('hide');
form.reset();
});
