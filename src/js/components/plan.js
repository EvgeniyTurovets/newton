Number.prototype.toDivide = function() {
	var int = String(Math.trunc(this));
	if(int.length <= 3) return int;
	var space = 0;
	var number = '';

	for(var i = int.length - 1; i >= 0; i--) {
		if(space == 3) {
			number = ' ' + number;
			space = 0;
		}
		number = int.charAt(i) + number;
		space++;
	}

	return number;
}

var myRangeSlider = document.querySelectorAll('.range-slider')
myRangeSlider.forEach(function(el, index){
    var handle;
    var sufix = '';
    rangesliderJs.create(el, {
        onInit: (value, percent, position) => {
            handle =  el.closest('.input-range').querySelector('.rangeslider__handle')
            sufix = el.getAttribute('data-sufix')
            if(sufix == null){
                sufix = ''
            }

            var divideVal = value.toDivide()
            handle.innerHTML = '' 
            handle.insertAdjacentHTML('afterbegin', '<span>'+divideVal+' '+sufix+'</span>')
        },
        onSlide:(value, percent, position) =>{
            var divideVal = value.toDivide()
            handle.innerHTML = '' 
            handle.insertAdjacentHTML('afterbegin', '<span>'+divideVal+' '+sufix+'</span>')
        },
    });

})
