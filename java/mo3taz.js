$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
})


// show video
let playbutton =  document.querySelector('.play-movie'); 
let video =  document.querySelector('.video-container');
let myvideo = document.querySelector("#myvideo");
let closebtn =  document.querySelector('.close-video');

playbutton.onclick = () =>{
    video.classList.add('show-video')
}
// auto play

myvideo.play();
