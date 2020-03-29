// ======================================================================================== sticky header

// When the user scrolls the page, execute getStickyHeader
window.addEventListener('scroll', getStickyHeader);

// Get the header
let header = document.getElementById('header');

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove 'sticky' when you leave the scroll position
function getStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
// ======================================================================================== active menu
document.addEventListener('scroll', onScroll);

function onScroll(event) {
	const currentPosition = window.scrollY;
	const sections = document.querySelectorAll('section');
	const links = document.querySelectorAll('.header-navigation a');

	sections.forEach((item) => {
		if (item.offsetTop - 95 <= currentPosition && (item.offsetTop + item.offsetHeight) > currentPosition) {
			links.forEach((a) => {
				a.classList.remove('header-navigation__item--selected');
				if (item.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('header-navigation__item--selected');
				}
			});
		}
	});
}

// ======================================================================================== change slides

let items = document.querySelectorAll('.slider-content');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
	currentSlide = (n + items.length) % items.length;
}

function hideSlide(direction) {
	isEnabled = false;
	items[currentSlide].classList.add(direction);
	items[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('slider-content-active', direction);
	});
}

function showSlide(direction) {
	items[currentSlide].classList.add('slider-content-next', direction);
	items[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('slider-content-next', direction);
		this.classList.add('slider-content-active');
		isEnabled = true;
	});
}

function previousSlide(n) {
	hideSlide('to-right');
	changeCurrentSlide(n - 1);
	showSlide('from-left');
	changeBackground();
}

function nextSlide(n) {
	hideSlide('to-left');
	changeCurrentSlide(n + 1);
	showSlide('from-right');
	changeBackground();
}

document.querySelector('#slider-arrow-left').addEventListener('click', function() {
	if (isEnabled) {
		previousSlide(currentSlide);
	}
});

document.querySelector('#slider-arrow-right').addEventListener('click', function() {
	if (isEnabled) {
		nextSlide(currentSlide);	
	}
});

//  change slider background

let SLIDER = document.querySelector('.slider');

function changeBackground() {
	if (SLIDER.classList.contains('bg-red')) {
		SLIDER.classList.remove('bg-red');
		SLIDER.classList.add('bg-blue');
	} else if (SLIDER.classList.contains('bg-blue')){
		SLIDER.classList.remove('bg-blue');
		SLIDER.classList.add('bg-red');
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

let GALLERY = document.querySelector('.portfolio-examples');

GALLERY.addEventListener('click', (event) => {
	GALLERY.querySelectorAll('.portfolio-examples__photo').forEach(el => el.classList.remove('portfolio-examples__photo--selected'));
	event.target.classList.add('portfolio-examples__photo--selected');
});

const SWITCH_GALLERY = document.querySelector('.portfolio-nav');

SWITCH_GALLERY.addEventListener('click', (event) => {
	if (event.target.classList.contains('portfolio-nav__button')) {
		SWITCH_GALLERY.querySelectorAll('.portfolio-nav__button').forEach(el => el.classList.remove('portfolio-nav__button--selected'));
		event.target.classList.add('portfolio-nav__button--selected');
		shuffleImages(GALLERY);
	} else {event.target.preventDefault();}	
});

// ======================================================================================== portfolio click-to-change images

GALLERY.addEventListener('click', (event) => {
		GALLERY.querySelectorAll('.portfolio-examples__photo').forEach(el => el.classList.remove('portfolio-examples__photo--selected'));
		event.target.classList.add('portfolio-examples__photo--selected');
});

// ======================================================================================== portfolio shuffle images 

function shuffleImages(GALLERY) {
	for (let i = GALLERY.children.length; i >= 0; i--) {
		GALLERY.appendChild(GALLERY.children[Math.random() * i | 0]);	
	}
	return GALLERY;
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

  // ======================================================================================== burger menu
const BURGER = document.querySelector('#navToggle');
const NAV_TOGGLE = document.querySelector('#navToggle');
const OVERLAY = document.querySelector('.overlay');

BURGER.addEventListener('click', () => {
	if (NAV_TOGGLE.classList.contains('active') && OVERLAY.classList.contains('open')) {
		OVERLAY.classList.remove('open');
		NAV_TOGGLE.classList.remove('active');
		document.querySelector('.header-logo').classList.remove('header-logo--active');
	}
	 else {
		document.querySelector('.header-logo').classList.add('header-logo--active');
		NAV_TOGGLE.classList.add('active');
		OVERLAY.classList.add('open');
	 }
});

OVERLAY.addEventListener('click', () => {
	document.querySelector('.overlay').classList.remove('open');
	document.querySelector('.navBurger').classList.remove('active');
	document.querySelector('.header-logo').classList.remove('.header-logo--active');
  });