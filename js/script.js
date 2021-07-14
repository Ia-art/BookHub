
const signUpButton = document.getElementById('sign-up');
const loginButton = document.getElementById('login');
const closeButton = document.querySelector('.close-btn');
const scrollBtn = document.querySelector('.scroll-up');
$('.menu-btn').click(function() {
    $(this).toggleClass("fa-times");
    $(".nav-list").toggleClass("active");
});
signUpButton.addEventListener('click', ()=> {
    document.querySelector('.form-container').style.display="grid";
});
loginButton.addEventListener('click', ()=> {
    document.querySelector('.form-container').style.display="grid";
});
closeButton.addEventListener('click', ()=> {
    document.querySelector('.form-container').style.display="none";
});
$('.owl-carousel').owlCarousel ({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        }
    }
});
Window.onscroll = ()=> {scrollFunction();};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display='block';
    } else {
        scrollBtn.style.display='none';
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

