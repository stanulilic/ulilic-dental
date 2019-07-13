
var hamburger = document.getElementById("hamburger");
var nav = document.getElementById("navigation");

hamburger.addEventListener('click', function(){
    if (nav.classList.contains('hide')){
        nav.classList.remove('hide');
        nav.classList.add('show');
    }

    else if(nav.classList.contains('show')){
        nav.classList.remove('show');
        nav.classList.add('hide');
    }
})