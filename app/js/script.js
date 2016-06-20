(function(){

  'use strict';

  var mainNav = $('nav.main-nav'),
      mainNavAnchor = $('.main-nav-list a'),
      navController = $('.main-nav button, header .headers'),
      dataNav = 'data-nav';

  var getDataState = function(el, attrKey){
    var attrVal = $(el).attr(attrKey);
    return attrVal;
  };

  var changeDataState = function(el, attrKey, attrVal){
    el.attr(attrKey, attrVal);
  };

  navController.on('click', function(){
    var dataNavVal = getDataState(mainNav, dataNav);
    if(dataNavVal === 'hide'){
      changeDataState(mainNav, dataNav, 'show');
    }else if(dataNavVal === 'show'){
      changeDataState(mainNav, dataNav, 'hide');
    }
  });

  $(document).ready(function(){
    var currHref = window.location.href,
        mainNav = $('nav.main-nav'),
        mainNavButton = $('nav.main-nav button'),
        mainNavAnchor = $('.main-nav-list a'),
        mainNavAnchorArray = [],
        lastSegUlr = currHref.substr(currHref.lastIndexOf('/') + 1),
        lastSegUlrAnchor = lastSegUlr.split('#')[1];

    for(var i=0; i<mainNavAnchor.length; i++){
      mainNavAnchorArray.push(mainNavAnchor[i].text);
    }

    // if nav link name (ie: #bio) is in current url, hide nav
    if(mainNavAnchorArray.indexOf(lastSegUlrAnchor) > -1){
      changeDataState(mainNav, dataNav, 'hide');
    }

    mainNavAnchor.on('click', function(){
      changeDataState(mainNav, dataNav, 'hide');
    });
  });

  // contact section bubble animation.
  var makeBubble = function(num){
    for(var i=0; i < num; i++){
      var span = $('<span class="bubble">contact<span />');
      var randomNumber = (Math.floor(Math.random() * 100)) + 'px';
      $(span).width(randomNumber).height(randomNumber);
      $('.bubble-wrapper').append(span);
    }
  };
  makeBubble(20);

}) ();