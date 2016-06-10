(function(){

  'use strict';

  var body = $('body');
  var mainNav = $('.main-nav');


  $('button.menu, .main-nav-list, .headers').on('click', function(){
    // body.attr('data-nav') === 'show' ? 
    // body.attr('data-nav', 'hide') : 
    // body.attr('data-nav', 'show');
    mainNav.attr('data-nav') === 'show' ? 
    mainNav.attr('data-nav', 'hide') : 
    mainNav.attr('data-nav', 'show');

  });

  var makeBubble = function(num){
    for(var i=0; i < num; i++){
      var span = $('<span>contact<span />').addClass('bubble');
      var randomNumber = (Math.floor(Math.random() * 100)) + 'px';
      $(span).width(randomNumber).height(randomNumber);
      $('.bubble-wrapper').append(span);
    }
  };
  makeBubble(20);

}) ();