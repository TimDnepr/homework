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
    dots: true,
    responsive: [
        {
            
            breakpoint: 1090,
            settings:{
                adaptiveHeight: true,
            }
            },
            {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,  
            } 
            }
    ]
})

$(window).scroll(function(){
    if($(this).scrollTop() >500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000);
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
})

$('#stories').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#corusel-btn').offset().top}, 500);
})


