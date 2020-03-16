// sticky header

window.addEventListener('scroll', function() {
	document.querySelector('.header').classList.add('header--sticky');
	if (header.offsetTop > 0) {
		document.querySelector('.header').classList.add('header--sticky');
	} else {
		document.querySelector('.header').classList.remove('header--sticky');
	}
});

// active menu links

const MENU = document.querySelector('header');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('.header-navigation__item__link').forEach(el => el.classList.remove('header-navigation__item--selected'));
	event.target.classList.add('header-navigation__item--selected');
});

// change slides

const sliderItems = document.querySelectorAll('.slider-content');
let currentItem = 1;

const sliderArrows = document.querySelectorAll('.slider-arrows');
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
    sliderItems[currentItem].classList = 'slider-content--show';
}

// change slider background

function changeBackground() {
	if (slider.classList.contains('bg-red')) {
		slider.classList.remove('bg-red');
		slider.classList.add('bg-blue');
	} else if (slider.classList.contains('bg-blue')){
		slider.classList.remove('bg-blue');
		slider.classList.add('bg-red');
	}
}

// let verticalPhoneImage = document.querySelector('#slider-content__item--vertical');
// let horizontalPhoneImage = document.querySelector('#slider-content__item--horizontal');
// let vPhoneImageItems = verticalPhoneImage.querySelectorAll('.vertical');
// let hPhoneImageItems = horizontalPhoneImage.querySelectorAll('.horizontal');

// verticalPhoneImage.addEventListener('click', function () {	
// 	changeScreen(vPhoneImageItems);
// });

// horizontalPhoneImage.addEventListener('click', function () {	
// 	changeScreen(hPhoneImageItems);
// });

// function changeScreen(items) {
// 	for (let i = 0; i < items.length;) {
// 		items[i].classList.remove('hide');
// 		event.target.classList.add('hide');
// 		i++;
// 	}
// }

// darken phone screens

const SWITCH_VERTICAL = document.querySelector('#slider-content__item--vertical');

SWITCH_VERTICAL.addEventListener('click', (event) => {
	SWITCH_VERTICAL.querySelectorAll('.slider-content__img').forEach(el => el.classList.remove('hide'));
	event.target.classList.add('hide');
});

const SWITCH_HORIZONTAL = document.querySelector('#slider-content__item--horizontal');

SWITCH_HORIZONTAL.addEventListener('click', (event) => {
	SWITCH_HORIZONTAL.querySelectorAll('.slider-content__img').forEach(el => el.classList.remove('hide'));
	event.target.classList.add('hide');
});

const SWITCH_MULTI = document.querySelector('#slider-content__item--multi');

SWITCH_MULTI.addEventListener('click', (event) => {
	SWITCH_MULTI.querySelectorAll('.slider-content__img').forEach(el => el.classList.remove('hide'));
	event.target.classList.add('hide');
});

// portfolio active images

const GALLERY = document.querySelector('.portfolio-examples');

GALLERY.addEventListener('click', (event) => {
	GALLERY.querySelectorAll('.portfolio-examples__photo').forEach(el => el.classList.remove('portfolio-examples__photo--selected'));
	event.target.classList.add('portfolio-examples__photo--selected');
});

// portfolio click-to-change images

const SWITCH_GALLERY = document.querySelector('.portfolio-nav');

SWITCH_GALLERY.addEventListener('click', (event) => {
	SWITCH_GALLERY.querySelectorAll('.portfolio-nav__button__text').forEach(el => el.classList.remove('portfolio-nav__button__text--selected'));
	event.target.classList.add('portfolio-nav__button__text--selected');
});
