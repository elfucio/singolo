// sticky header

window.addEventListener('scroll', function() {
	document.querySelector('.header').classList.add('header--sticky');
	if (header.offsetTop > 95) {
		document.querySelector('.header').classList.add('header--sticky');
	} else {
		document.querySelector('.header').classList.remove('header--sticky');
	}
});

// active menu links

const MENU = document.querySelector('.header');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('.header-navigation__item__link').forEach(el => el.classList.remove('header-navigation__item--selected'));
	event.target.classList.add('header-navigation__item--selected');
});

// slider

let items = document.querySelectorAll('.slider-content');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.remove('active');
		isEnabled = true;
	});
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

document.querySelector('.slider-arrow-left').addEventListener('click', function() {
	if(isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.slider-arrow-right').addEventListener('click', function() {
	if(isEnabled) {
		nextItem(currentItem);
	}
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