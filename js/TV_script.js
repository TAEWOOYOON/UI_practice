const startButtonAll = document.querySelector('#start_button_all');
const StartButtonEBS = document.querySelector('#start_button_EBS');
const resultAll = document.querySelector('.result_all');
const resultEBS = document.querySelector('.result_EBS');


function view(){
        resultAll.style.display == 'flex';
    
}

startButtonAll.addEventListener("click", view);