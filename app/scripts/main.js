'use strict';

var offCanvasNav = false;

function shouldShowOffCanvasNav(){
  offCanvasNav ? offCanvasNav = false : offCanvasNav = true;
}

function toggleLeftNav(){
  shouldShowOffCanvasNav();
  $('body').toggleClass('show-left-nav');
}

function toggleRightNav(){
  shouldShowOffCanvasNav();
  $('body').toggleClass('show-right-nav');
}
