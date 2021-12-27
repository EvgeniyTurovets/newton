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
        slideToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'flex')
    })

    document.addEventListener('click', (e)=>{
        if(!e.target.closest('.header-menu')){
            burger.closest('.header-menu').classList.remove('active')
            slideUp(burger.closest('.header-menu').querySelector('.header__nav'), 300,)
        }
    })
})

