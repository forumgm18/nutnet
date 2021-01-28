$(document).ready(function () {
  $('[data-nav-id]').on('click', function (e) {
    let reviewSelector = `[data-review-id="${e.currentTarget.dataset.navId}"]`
    $('[data-nav-id].active').removeClass('active');
    $(this).addClass('active');
    $('[data-review-id].active').removeClass('active');
    $(reviewSelector).addClass('active');
  });
  $('.burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('body').toggleClass('menu-opened');
  });
  $('.menu-close').on('click', function (e) {
    $('.burger').removeClass('open');
    $('body').removeClass('menu-opened');
  });
  $('.menu li').on('click', function (e) {
    $('.burger').removeClass('open');
    $('body').removeClass('menu-opened');
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    let elementClick = $(this).find('.menu-link').attr("href");
    let destination = $(elementClick).offset().top - $('.mobile-header').outerHeight();
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
})