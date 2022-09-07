const startButtonAll = document.querySelector('#start_button_all');
const startButtonEBS = document.querySelector('#start_button_EBS');
const startButtonMBC = document.querySelector('#start_button_MBC');
const startButtonKBS = document.querySelector('#start_button_KBS');
const startButtonSBS = document.querySelector('#start_button_SBS');
const startButtonTBC = document.querySelector('#start_button_TBC');
const startButtonJTBC = document.querySelector('#start_button_JTBC');
const startButtonYTN = document.querySelector('#start_button_YTN');
const startButtonOCN = document.querySelector('#start_button_OCN');
const startButtonA = document.querySelector('#start_button_channelA');

const resultAll = document.querySelector('.result_all');
const resultEBS = document.querySelector('.result_EBS');
const resultMBC = document.querySelector('.result_MBC');
const resultKBS = document.querySelector('.result_KBS');
const resultSBS = document.querySelector('.result_SBS');
const resultTBC = document.querySelector('.result_TBC');
const resultJTBC = document.querySelector('.result_JTBC');
const resultYTN = document.querySelector('.result_YTN');
const resultOCN = document.querySelector('.result_OCN');
const resultA = document.querySelector('.result_channelA');


function view_1(){
    if (resultAll.style.display == 'none') {
        resultAll.style.display = 'flex';
    }
    else{ 
        resultAll.style.display = 'none';
    }
}
function view_2(){
    if (resultEBS.style.display == 'none') {
        resultEBS.style.display = 'flex';
    }
    else{
        resultEBS.style.display = 'none';
    }
}
function view_3(){
    if (resultMBC.style.display == 'none') {
        resultMBC.style.display = 'flex';
    }
    else{
        resultMBC.style.display = 'none';
    }
}
function view_4(){
    if (resultKBS.style.display == 'none') {
        resultKBS.style.display = 'flex';
    }
    else{
        resultKBS.style.display = 'none';
    }
}
function view_5(){
    if (resultSBS.style.display == 'none') {
        resultSBS.style.display = 'flex';
    }
    else{
        resultSBS.style.display = 'none';
    }
}
function view_6(){
    if (resultTBC.style.display == 'none') {
        resultTBC.style.display = 'flex';
    }
    else{
        resultTBC.style.display = 'none';
    }
}
function view_7(){
    if (resultJTBC.style.display == 'none') {
        resultJTBC.style.display = 'flex';
    }
    else{
        resultJTBC.style.display = 'none';
    }
}
function view_8(){
    if (resultYTN.style.display == 'none') {
        resultYTN.style.display = 'flex';
    }
    else{
        resultYTN.style.display = 'none';
    }
}
function view_9(){
    if (resultOCN.style.display == 'none') {
        resultOCN.style.display = 'flex';
    }
    else{
        resultOCN.style.display = 'none';
    }
}
function view_10(){
    if (resultA.style.display == 'none') {
        resultA.style.display = 'flex';
    }
    else{
        resultA.style.display = 'none';
    }
}
startButtonAll.addEventListener('click', view_1)
startButtonEBS.addEventListener('click', view_2)
startButtonMBC.addEventListener('click', view_3)
startButtonKBS.addEventListener('click', view_4)
startButtonSBS.addEventListener('click', view_5)
startButtonTBC.addEventListener('click', view_6)
startButtonJTBC.addEventListener('click', view_7)
startButtonYTN.addEventListener('click', view_8)
startButtonOCN.addEventListener('click', view_9)
startButtonA.addEventListener('click', view_10)
