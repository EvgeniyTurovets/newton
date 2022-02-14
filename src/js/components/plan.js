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
var rangeSlider = document.querySelectorAll('.new-range-slider')
rangeSlider.forEach(function(el, index){
    var sufix = el.getAttribute('data-sufix');
    var slider = new Slider(el, {
        isDate: false,
        min:  Number(el.getAttribute('data-min')),
        max: Number(el.getAttribute('data-max')),
        start: Number(el.getAttribute('data-start')),
        end: Number(el.getAttribute('data-end')),
        overlap: true
    });
    var handleLeft = el.closest('.input-range').querySelector('.input-range__start')
    var handleRight = el.closest('.input-range').querySelector('.input-range__end')
    var inputStart = el.closest('.input-range').querySelector('.input-start')
    var inputEnd = el.closest('.input-range').querySelector('.input-end')
    
  
    function rangeChange(data){
        var divideVal = data.right.toDivide()
        handleRight.innerHTML = ''
        handleRight.insertAdjacentHTML('afterbegin', '<span>'+divideVal+' '+sufix+'</span>')

        var divideVal = data.left.toDivide()
        handleLeft.innerHTML = ''
        handleLeft.insertAdjacentHTML('afterbegin', '<span>'+divideVal+' '+sufix+'</span>')

        inputStart.value = data.left
        inputEnd.value = data.right
    }
    rangeChange(slider.getInfo())
    slider.subscribe('moving', function(data) {
        rangeChange(data)
    });
  
})

