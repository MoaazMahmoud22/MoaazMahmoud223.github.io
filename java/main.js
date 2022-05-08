'use strict';

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

$(document).ready(() => {
  $('#hamburger-menu').click(() => {
      $('#hamburger-menu').toggleClass('active')
      $('#nav-menu').toggleClass('active')
  })
})


let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".vedio-container");
let myvideo = document.querySelector(".#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  video.classList.add('.show-video')
}

myvideo.play();

closebtn.onclick = () => {
  video.classList.remove('.show-video')
}

myvideo.pause();