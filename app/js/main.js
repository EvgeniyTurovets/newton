"use strict";

var fadeOut = function fadeOut(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'opacity';
  target.style.transitionDuration = duration + 'ms';
  target.style.opacity = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('opacity');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var fadeIn = function fadeIn(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";
  target.style.opacity = 0;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = displayBlock;
  target.style.display = display;
  target.style.transitionProperty = "opacity";
  target.style.transitionDuration = duration + 'ms';
  window.setTimeout(function () {
    target.style.opacity = 1;
    window.setTimeout(function () {
      target.style.removeProperty('opacity');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }, 1);
};

var fadeToggle = function fadeToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

  if (window.getComputedStyle(target).display === 'none') {
    return fadeIn(target, duration, displayBlock);
  } else {
    return fadeOut(target, duration);
  }
};

var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = displayBlock;
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration, displayBlock);
  } else {
    return slideUp(target, duration);
  }
};
"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    headerFix();
  });

  function headerFix() {
    if (window.pageYOffset > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  headerFix();
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    burger.closest('.header-menu').classList.toggle('active');
    slideToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'flex');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.header-menu')) {
      burger.closest('.header-menu').classList.remove('active');
      slideUp(burger.closest('.header-menu').querySelector('.header__nav'), 300);
    }
  });
});
"use strict";
//# sourceMappingURL=main.js.map
