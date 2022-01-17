$('.about-items > div').on('click', function(){
    $(this).find('.about-icon').toggleClass('active').toggleClass('active-color').toggleClass('about-items__slide');
    $(this).find('.about-position__place').toggleClass('about-position__place-color');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(500)
}) 

$('.lead-items').on('click', function(){
    $(this).find('#303, #302').slideToggle(500);
})

$('.corusel-content').slick({
    adaptiveHeight: true,
    dots: true,
    responsive: [
        {
        breakpoint: 360,
        settings: {
	        slidesToShow: 1,
            
        }
        }
    ]
})



