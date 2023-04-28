let menuBtn = document.querySelector('.burger-btn');
let header_menu = document.querySelector('.header_menu');
let overlay = document.querySelector('.header_list');

    menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    header_menu.classList.toggle('active');
})

    overlay.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    header_menu.classList.toggle('close');
})
