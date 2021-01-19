const pom = document.querySelector('.pom');

const pomodoro = document.querySelector('.pom .pomodoro');
const backbox = document.querySelector('.pom .options div');
const sbreak = document.querySelector('.pom .sbreak');
const lbreak = document.querySelector('.pom .lbreak');
const setting = document.querySelector('.pom .setting');

let pmin = document.querySelector('.pom .pmin');
let psec = document.querySelector('.pom .psec');

const start = document.querySelector('.pom .main .mainback .start');
const pause = document.querySelector('.pom .main .mainback .pause');
const reset = document.querySelector('.pom .main .mainback .reset');

let pomomin = document.querySelector('.pom #pomomin');
let smin = document.querySelector('.pom #smin');
let lmin = document.querySelector('.pom #lmin');

const settingbox = document.querySelector('.pom .settingbox');
const close = document.querySelector('.pom .close');
const apply = document.querySelector('.pom .apply');

const acolor = document.querySelector('.pom .acolor');
const bcolor = document.querySelector('.pom .bcolor');
const ccolor = document.querySelector('.pom .ccolor');

const font1 = document.querySelector('.pom .font1');
const font2 = document.querySelector('.pom .font2');
const font3 = document.querySelector('.pom .font3');

let pomominValue = pomomin.value;
let sminValue = smin.value;
let lminValue = lmin.value;

// **********************setting button**********************

setting.addEventListener('click', () => {
    settingbox.classList.add('appear');
})

pomomin.addEventListener('input', () => {
    pomominValue = pomomin.value;
})

smin.addEventListener('input', () => {
    sminValue = smin.value;
})

lmin.addEventListener('input', () => {
    lminValue = lmin.value;
})

acolor.addEventListener('click', () => {
    r.style.setProperty('--pink', pink);
    acolor.classList.add('active');
    bcolor.classList.remove('active');
    ccolor.classList.remove('active');
})

bcolor.addEventListener('click', () => {
    r.style.setProperty('--pink', cyan);
    acolor.classList.remove('active');
    bcolor.classList.add('active');
    ccolor.classList.remove('active');
})

ccolor.addEventListener('click', () => {
    r.style.setProperty('--pink', purple);
    acolor.classList.remove('active');
    bcolor.classList.remove('active');
    ccolor.classList.add('active');
})

font1.addEventListener('click', () => {
    pom.style.fontFamily = 'sans-serif';
    font1.classList.add('active');
    font2.classList.remove('active');
    font3.classList.remove('active');
})

font2.addEventListener('click', () => {
    pom.style.fontFamily = 'serif';
    font1.classList.remove('active');
    font2.classList.add('active');
    font3.classList.remove('active');
})

font3.addEventListener('click', () => {
    pom.style.fontFamily = 'monospace';
    font1.classList.remove('active');
    font2.classList.remove('active');
    font3.classList.add('active');
})

apply.addEventListener('click', () => {
    settingbox.classList.remove('appear');
    defaultsetting();
})

// ***********settings************
let r = document.querySelector(':root');
let rs = getComputedStyle(r);
const pink = rs.getPropertyValue('--pink');
const cyan = rs.getPropertyValue('--cyan');
const purple = rs.getPropertyValue('--purple');


// default settings ***********************

let slimit = 0;
let interval;
let basemin = pomominValue;
let mlimit = basemin; 

pmin.innerHTML = mlimit;

if(pmin.innerHTML <9){
    pmin.innerHTML = '0' + mlimit;
}

const defaultsetting = () => {
    basemin = pomominValue;
    mlimit = basemin; 
    
    pmin.innerHTML = mlimit;

    if(pmin.innerHTML <9){
        pmin.innerHTML = '0' + mlimit;
    }
}


pomodoro.addEventListener('click', () => {
    basemin = pomominValue; 
    mlimit = basemin; 
    pmin.innerHTML = mlimit;
    slimit = 0;

    if(pmin.innerHTML <9){
        pmin.innerHTML = '0' + mlimit;
    }

    if(interval != 'undefined'){
        resetfun(basemin);
    }

    backbox.style.left = 'calc(0.3rem + 0%)';
    pomodoro.classList.add('active');
    sbreak.classList.remove('active');
    lbreak.classList.remove('active');
    start.classList.remove('off');
    pause.classList.add('off');
    reset.classList.add('off');
})

sbreak.addEventListener('click', ()  => {
    basemin = sminValue; 
    mlimit = basemin; 
    pmin.innerHTML = mlimit;
    slimit = 0;

    if(pmin.innerHTML <9){
        pmin.innerHTML = '0' + mlimit;
    }
    if(interval != 'undefined'){
        resetfun(basemin);
    }

    backbox.style.left = 'calc(0.3rem + 33%)';
    sbreak.classList.add('active');
    pomodoro.classList.remove('active');
    lbreak.classList.remove('active');
    start.classList.remove('off');
    pause.classList.add('off');
    reset.classList.add('off');
})

lbreak.addEventListener('click', ()  => {
    basemin = lminValue; 
    mlimit = basemin; 
    pmin.innerHTML = mlimit;
    slimit = 0;

    if(pmin.innerHTML <9){
        pmin.innerHTML = '0' + mlimit;
    }
    if(interval != 'undefined'){
        resetfun(basemin);
    }

    backbox.style.left = 'calc(0.3rem + 66%)';
    lbreak.classList.add('active');
    pomodoro.classList.remove('active');
    sbreak.classList.remove('active');
    start.classList.remove('off');
    pause.classList.add('off');
    reset.classList.add('off');
})


// reset function*****************

const resetfun = (basemin) => {
    interval = clearInterval(interval);
    psec.innerHTML = '00';
    pmin.innerHTML = basemin;

    if(pmin.innerHTML <9){
      pmin.innerHTML = '0' + basemin;
    }
}

// Main timer function*******************

const starttimer = () => {

    if(mlimit < 10){
        pmin.innerHTML = '0' + mlimit;
    }

    if(slimit < 10){
        psec.innerHTML = '0' + slimit;
    }

    if(mlimit > 9){
        pmin.innerHTML = mlimit;
    }

    if(slimit > 9){
        psec.innerHTML = slimit;
    }

    slimit--;

    if(slimit < 0){
        mlimit--;
        slimit = 59;
    }
}


// start-pause-reset button events ******************

start.addEventListener('click', () => {

    start.classList.add('off');
    pause.classList.remove('off');
    reset.classList.remove('off');
    if(psec.innerHTML == '00' && psec.innerHTML == mlimit){
        slimit = 59;
        mlimit--;
    }
    
    interval = setInterval(starttimer, 1000);

});

pause.addEventListener('click', () => {

    start.classList.remove('off');
    pause.classList.add('off');
    interval = clearInterval(interval);

});

reset.addEventListener('click', () => {

    start.classList.remove('off');
    pause.classList.add('off');
    reset.classList.add('off');
    interval = clearInterval(interval);
    psec.innerHTML = '00';
    pmin.innerHTML = basemin;

    if(pmin.innerHTML <9){
      pmin.innerHTML = '0' + basemin;
    }

});

