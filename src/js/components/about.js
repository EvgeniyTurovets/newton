document.addEventListener('DOMContentLoaded', function(){
    var secListBlock = document.getElementById('sec-list')
    if(secListBlock){
        
        var secList = secListBlock.querySelectorAll('.sec')
        var aboutPagItems = document.getElementById('about-pag').querySelectorAll('.about-pag__item')
        
        function secMonitor(){
            if(window.innerWidth > 1300){
                var yOffset = window.pageYOffset;
                var windowH = window.innerHeight
                var indexNewPagItem = 0;
                var indexOldSec = 0;
                var indexNewSec = 0;
                
                secList.forEach(function(sec, index){
                    if(yOffset + windowH > sec.offsetTop){
                        indexNewPagItem = index
                        if(sec.classList.contains('if-white')){
                            document.getElementById('about-pag').classList.add('white')
                        }else{
                            document.getElementById('about-pag').classList.remove('white')
                        }
                        
                        indexNewSec = index;
                    }
                })

                if(yOffset == 0){
                    indexNewPagItem = 0
                    if(secList[0].classList.contains('if-white')){
                        document.getElementById('about-pag').classList.add('white')
                    }else{
                        document.getElementById('about-pag').classList.remove('white')
                    }
                        
                    indexNewSec = 0;
                }
            
                if(indexNewPagItem != indexOldSec){
                    
                    indexOldSec = indexNewSec;
                    aboutPagItems.forEach(function(el, index){
                        
                        el.classList.remove('active')
                        
                    })
                    aboutPagItems[indexNewPagItem].classList.add('active')
                    
                }else{
                    if(yOffset == 0){
                        indexOldSec = indexNewSec;
                        aboutPagItems.forEach(function(el, index){
                            
                            el.classList.remove('active')
                            
                        })
                        aboutPagItems[indexNewPagItem].classList.add('active')
                    }
                }
            }
        }

        window.addEventListener('scroll', function(){
            secMonitor()
        })

        aboutPagItems.forEach((btn, index) => btn.addEventListener('click', function(){
            window.scrollTo({
                top: secList[index].offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }))
        
    }
})