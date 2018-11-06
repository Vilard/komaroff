// "use srtict"
window.onload = function (){
	$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.nav-color-main').addClass('scroll');
    }
    else {
        $('.nav-color-main').removeClass('scroll')
    }
	});
	const dropdown = document.querySelector('.menu-li');
    function addClassFunSix() {
        this.classList.toggle("clickMenu");
    }  
    dropdown.addEventListener('click', addClassFunSix);
}

