// les variables 
var sp, btn_start, bt_stop, t, ms, s, mn, h;

// fonction
window.onload = function () {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

// Le compteur

function update_chrono() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }

    if (mn == 60) {
        mn = 0;
        h += 1
    }
    // valeur de span
    // 0 permet de selectionner le premier span

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// mettre en place la fonction du boutton start

function start(){
    // cette ligne de code execute la function update_chrono()
    // tout mes 100 ms 
    t =setInterval(update_chrono,100);
    btn_start.disabled = true

}

//stoper les chronometre

function stop() {
    clearInterval(t); //supression de l'interval t créer
    btn_start.disabled = false ;
} 

function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
