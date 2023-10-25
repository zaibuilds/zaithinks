window.onload = function(){
    window.setTimeout(function() {
        document.getElementById('loading_text').style.visibility = 'visible';
        document.getElementById('loading_text').style.animation = 'fadeInAnimation ease 5s';
        document.getElementById('loading_text').style.animation.iterationcount = '1';
        document.getElementById('loading_text').animation.fill.mode = 'forwards';
    }, 2000);
}