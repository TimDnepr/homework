$('.about-items > div').on('click', function(){
    $(this).find('.about-icon').toggleClass('active').toggleClass('active-color').toggleClass('about-items__slide');
    $(this).find('.about-position__place').toggleClass('about-position__place-color');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(500)
}) 

$('.lead-customer').on('click', function(){
    $(this).next('div').slideToggle(500);

})

