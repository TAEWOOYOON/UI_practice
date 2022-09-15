const buttonMovie = document.querySelector('#button_movie');
const buttonDrama = document.querySelector('#button_drama');
const buttonEnt = document.querySelector('#button_ent');
const buttonThe = document.querySelector('#button_the');

const resultMovie = document.querySelector('.result_movie');
const resultDrama = document.querySelector('.result_drama');
const resultEnt = document.querySelector('.result_ent');
const resultThe = document.querySelector('.result_the');



const button_movie = document.querySelector('#button_movie');
const button_drama = document.querySelector('#button_drama');
const button_ent = document.querySelector('#button_ent');
const button_the = document.querySelector('#button_the');

function view_movie(){
    if (resultMovie.style.display == 'none') {
        button_movie.style.backgroundColor = 'firebrick';
        resultMovie.style.display = 'flex';
    }
    else{ 
        resultMovie.style.display = 'none';
        button_movie.style.backgroundColor = '#dcb088';
    }
}

function view_drama(){
    if (resultDrama.style.display == 'none') {
        button_drama.style.backgroundColor = 'firebrick';
        resultDrama.style.display = 'flex';
    }
    else{ 
        resultDrama.style.display = 'none';
        button_drama.style.backgroundColor = '#dcb088';
    }
}

function view_ent(){
    if (resultEnt.style.display == 'none') {
        button_ent.style.backgroundColor = 'firebrick';
        resultEnt.style.display = 'flex';
    }
    else{ 
        resultEnt.style.display = 'none';
        button_ent.style.backgroundColor = '#dcb088';
    }
}

function view_the(){
    if (resultThe.style.display == 'none') {
        button_the.style.backgroundColor = 'firebrick';
        resultThe.style.display = 'flex';
    }
    else{ 
        resultThe.style.display = 'none';
        button_the.style.backgroundColor = '#dcb088';
    }
}


buttonMovie.addEventListener('click', view_movie)
buttonDrama.addEventListener('click', view_drama)
buttonEnt.addEventListener('click', view_ent)
buttonThe.addEventListener('click', view_the)
