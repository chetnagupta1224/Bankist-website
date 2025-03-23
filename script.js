'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav')

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



///////////////////////////////////////
// Modal window

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
// //////////////////////////////////////////
// Button Scrolling 

btnScrollTo.addEventListener('click', function (e) {
  const slcoords = section1.getBoundingClientRect();
  console.log(slcoords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY)

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  )
  section1.scrollIntoView({behavior: 'smooth'});
  });

  ////////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// Event Deligation
// 1. Add event listener to common parent element
// 2. Determine what element originate the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
    // console.log('LINK')
  }
});


// Selecting elements
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

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

// // to change the color or elements
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// // Attributes
// // src, id, class etc

// const logo = document.querySelector('.nav__logo');
// // standard
// console.log(logo.alt);
// console.log(logo.src); // absolute link
// console.log(logo.className);

// // Non-standard
// console.log(logo.designer);

// // But can get the non standard property
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src')); // relative link

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('anything')
// logo.classList.remove('anything')
// logo.classList.toggle('anything')
// logo.classList.contains('anything')

// Implementin smooth scrolling
// Way 1

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const slcoords = section1.getBoundingClientRect();
//   console.log(slcoords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.scrollX, window.scrollY)

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   )
//   section1.scrollIntoView({behavior: 'smooth'});
//   });

  //   // Scrolling 
//   window.scrollTo(
  //     slcoords.left + window.scrollY, 
  //     slcoords.top + window.scrollY);

// Object for smooth scrolling
// window.scrollTo({
//   left: slcoords.left + window.scrollX,
//   top: slcoords.top + window.scrollY,
//   behavior: 'smooth',
// });

// Way - 2 
// section1.scrollIntoView({behavior: 'smooth'});


// // Event and EventHandlers

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert('addEventListener: Great! You are reading the heading')
// };


// h1.addEventListener('mouseenter',alertH1) 
// h1.removeEventListener('mouseenter', alertH1);

// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! You are reading the heading')
// };

// Removing event listener

// Bubbling 

// Event Propagation 

// // rgb(255,255,255)
// const randomInt = (min, max) => 
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// console.log(randomColor(0, 255))

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propogation
//   // e.stopPropagation();
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// })

// // Event Delegation


// const h1 = document.querySelector('h1');

// // going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.firstElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// Tabbed component


tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // Remove Active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  
  // Activate tab 
  clicked.classList.add('operations__tab--active');

  // Activate the content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});

// Menu fade animation

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// // Sticky navigation bar
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll' , function () {
//   console.log(window.scrollY);

//   if(this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// Intersection observer API - Well, this API allows our code to basically
// observe changes to the way that a certain target element
// intersects another element, or the way it intersects the viewport.

const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOption = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(section1);

const header1 = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry)
  if(!entry.isIntersecting)
    nav.classList.add('sticky');

  else 
    nav.classList.remove('sticky');

}

const headerObserver = new IntersectionObserver(
  stickyNav , {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);

headerObserver.observe(header1);

// Reveal elements as we get closed to it
const allSection = document.querySelectorAll('section')
const revealSection = function(entries, observer) {
  entries.forEach(entry => {

    // console.log(entry);
    
    if(!entry.isIntersecting) return;
    
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);
});
  }

const sectionObserver = new IntersectionObserver
(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});

// Lazy Loading images

const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));





















