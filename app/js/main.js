
var hamburger = document.getElementById("hamburger");
var nav = document.getElementById("navigation");
var closeIcon = document.getElementById('close-nav-icon');
var openIcon = document.getElementById('open-nav-icon');

hamburger.addEventListener('click', function(){
    if (nav.classList.contains('hide')){
        nav.classList.remove('hide');
        openIcon.classList.add('hide_element');
        closeIcon.classList.remove('hide_element');
        nav.classList.add('show');
    }

    else if(nav.classList.contains('show')){
        nav.classList.remove('show');
        nav.classList.add('hide');
        openIcon.classList.remove('hide_element');
        closeIcon.classList.add('hide_element');
    }
})