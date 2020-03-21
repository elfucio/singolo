// ======================================================================================== sticky header

// When the user scrolls the page, execute getStickyHeader
window.addEventListener('scroll', getStickyHeader);

// Get the header
let header = document.getElementById('header');

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
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
