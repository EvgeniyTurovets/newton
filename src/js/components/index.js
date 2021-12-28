document.addEventListener('DOMContentLoaded', function(){
    let header = document.getElementById('header')
    window.addEventListener('scroll', ()=>{   
        headerFix()
    })

    function headerFix(){
        if(window.pageYOffset > 0){
            header.classList.add('scroll')
        }else{
            header.classList.remove('scroll')
        }
    }
    headerFix()

    let burger = document.getElementById('burger')
    burger.addEventListener('click', ()=>{
        burger.closest('.header-menu').classList.toggle('active')
        header.classList.toggle('burger-open')
        if(window.innerWidth > 991){
            slideToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block')
        }else{
            fadeToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block')
        }
       
    })

    document.addEventListener('click', (e)=>{
        if(!e.target.closest('.header-menu') && burger.closest('.header-menu').classList.contains('active')){
            burger.closest('.header-menu').classList.remove('active')
            slideUp(burger.closest('.header-menu').querySelector('.header__nav'), 300,)
        }
        if(!e.target.closest('.header__flat')){
            slideUp(header__flat.querySelector('.header__flat__list'), 300,)
        }
    })

    let header__flat = document.getElementById('header__flat')
    
    header__flat.addEventListener('click', ()=>{
        slideToggle(header__flat.querySelector('.header__flat__list'), 300, 'block')
    })
    

    let header__nav = document.getElementById('header__nav')
    function refreshHeader(){
        if(window.innerWidth > 991){
            document.querySelector('.header__wrap__right').prepend(header__flat)
            document.querySelector('.header__wrap__right').prepend(document.querySelector('.header__phone'))
        }else{
            header__nav.prepend(header__flat)
            header__nav.prepend(document.querySelector('.header__phone'))
           
        }
    }
    refreshHeader()
    window.addEventListener('resize', ()=>{
        refreshHeader()
    })

    const swiper = new Swiper('.sec2__slider', {      
        // If we need pagination
        spaceBetween: 20,
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
        },
    });
})

