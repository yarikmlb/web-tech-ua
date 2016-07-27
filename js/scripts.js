function addClass(elem) {
    var a = document.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }
    elem.classList.add('active');
    return document.getElementById(elem);
};
var name = addClass();