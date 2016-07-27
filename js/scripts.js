var a = document.getElementsByTagName('a');


function addClass(elem) {
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }
    elem.classList.add('active');
};
