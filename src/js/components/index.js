document.addEventListener('DOMContentLoaded', function () {
  let header = document.getElementById('header')
  window.addEventListener('scroll', () => {
    headerFix()
  })

  function headerFix() {
    if (window.pageYOffset > 0) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  }
  headerFix()

  let burger = document.getElementById('burger')
  let burgerfFag = true;
  burger.addEventListener('click', () => {
    if(burgerfFag){
      burgerfFag = false;
      burger.closest('.header-menu').classList.toggle('active')
      header.classList.toggle('burger-open')
      
      if (window.innerWidth > 991) {
        slideToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block')
      } else {
        fadeToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block')
      }

      setTimeout(function(){
        burgerfFag = true;
      },300 )
    }
    
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-menu') && burger.closest('.header-menu').classList.contains('active')) {
      burger.closest('.header-menu').classList.remove('active')
      slideUp(burger.closest('.header-menu').querySelector('.header__nav'), 300,)
    }
    if (!e.target.closest('.header__flat')) {
      slideUp(header__flat.querySelector('.header__flat__list'), 300,)
    }
  })

  let header__flat = document.getElementById('header__flat')

  header__flat.addEventListener('click', () => {
    slideToggle(header__flat.querySelector('.header__flat__list'), 300, 'block')
  })


  let header__nav = document.getElementById('header__nav')
  function refreshHeader() {
    if (window.innerWidth > 991) {
      document.querySelector('.header__wrap__right').prepend(header__flat)
      document.querySelector('.header__wrap__right').prepend(document.querySelector('.header__phone'))
    } else {
      header__nav.prepend(header__flat)
      header__nav.prepend(document.querySelector('.header__phone'))

    }
  }
  refreshHeader()
  window.addEventListener('resize', () => {
    refreshHeader()
    footerWidth()
  })

  // const swiper = new Swiper('.sec2__slider', {
  //   // If we need pagination
  //   spaceBetween: 20,
  //   speed: 500,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 6000,
  //   },
  // });

  new Swiper('#partition__slider-1', {
    pagination: {
      el: '.partition__pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 6000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });

  new Swiper('#partition__slider-2', {
    pagination: {
      el: '.partition__pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 6000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });

  new Swiper('#sec5-slider', {
    pagination: {
      el: '.custom-pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
    autoplay: {
      delay: 7000,
    },
  });

  new Swiper('#sec7-slider', {
    pagination: {
      el: '.custom-pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
  });

  


  //footer drop
  let footerBtns = document.querySelectorAll('.footer__drop__btn');

  function footerWidth() {
    footerBtns.forEach((elem) => {
      let footerDropParent = elem.parentElement;
      let footerDropBox = footerDropParent.querySelector('.footer__drop__box');

      if (window.innerWidth < 600) {
        elem.addEventListener('click', () => {
          footerDropParent.classList.toggle('active');
          slideToggle(footerDropBox, 300, 'block');
        })
      } else {
        footerDropParent.classList.remove('active');
        footerDropBox.removeAttribute('style');
      }
    })
  }
  footerWidth()


  new Swiper('#calcSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
  });
  
  var openCalcBtn = document.querySelectorAll('.open-calc-modal')

  if(openCalcBtn.length){
    
    openCalcBtn.forEach(btn => btn.addEventListener('click', function(){
      document.getElementById('calc-modal').classList.add('active')
    }))

    document.querySelector('.calc-modal__close').addEventListener('click', function(){
      document.getElementById('calc-modal').classList.remove('active')
    })
  }
})



