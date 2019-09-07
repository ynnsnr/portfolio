import $ from 'jquery';

$('.left').mouseenter(() => {
  setTimeout(() => {
    $('.container').addClass('left-is-hovered');
  }, 100);
}).mouseleave(() => {
  $('.container').removeClass('left-is-hovered');
});

$('.right').mouseenter(() => {
  setTimeout(() => {
    $('.container').addClass('right-is-hovered');
  }, 100);
}).mouseleave(() => {
  $('.container').removeClass('right-is-hovered');
});
