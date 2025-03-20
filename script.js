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
