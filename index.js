window.onload = function(){
    window.setTimeout(function() {
        document.getElementById('enter_playground').style.visibility = 'visible';
        document.getElementById('enter_playground').style.animation = 'fadeInAnimation ease 5s';
        document.getElementById('enter_playground').style.animation.iterationcount = '1';
        document.getElementById('enter_playground').animation.fill.mode = 'forwards';
    }, 2000);
}
