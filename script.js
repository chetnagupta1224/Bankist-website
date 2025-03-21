'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

// Creating and Inserting HTML elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 
    'We use cookies for improved functionality and analytics.<button class = " btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // first will prepend
header.append(message); // then removing from prepend, it will append
//  if we want out element to be on both, first clone it then append

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements 

document.querySelector('.btn--close-cookie').
addEventListener('click', function() {
  message.remove();
})

// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// to change the color or elements
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
// src, id, class etc

const logo = document.querySelector('.nav__logo');
// standard
console.log(logo.alt);
console.log(logo.src); // absolute link
console.log(logo.className);

// Non-standard
console.log(logo.designer);

// But can get the non standard property
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src')); // relative link

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('anything')
logo.classList.remove('anything')
logo.classList.toggle('anything')
logo.classList.contains('anything')

