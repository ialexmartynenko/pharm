
$('.enter').on('click', function(){
    $('.mobi-menu').addClass('active');
})

$('.mobi-menu i').on('click', function(){
    $('.mobi-menu').removeClass('active');
})


$('.carusel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});


$('.slidertwo').slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
  dots: true
  
});




/*function toggle_show(id) {
    document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
}
*/
