const btn = document.querySelector('.lang-btn');
const rus = document.querySelector('.uchi');
const burger = document.querySelector('.burger-mob');
const active = document.querySelector('.nav');
const en = document.querySelector('#ingl');
btn.addEventListener('click', function ()
{
    rus.classList.toggle('rus-active');
    en.classList.toggle('grei');
    btn.classList.toggle('grei');
})
en.addEventListener('click', function ()
{
    if (en.classList.contains('grei')) {
        rus.classList.toggle('rus-active');
        en.classList.toggle('grei');
        btn.classList.toggle('grei');
    }
})
burger.addEventListener('click', function ()
{
    active.classList.toggle('nav-active');
    burger.classList.toggle('burger-close');

})


// fixed
$(function ()
{
    let header = $("#headerJs");
    let intro = $("#introJs");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function ()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
        // introH 
       
    })
    
});
// scroll

$("[data-scroll]").on("click", function (event)
{
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset - 100
    }, 800)
})