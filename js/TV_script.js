const buttonMovie = document.querySelector('#button_movie');

const resultMovie = document.querySelector('.result_movie');



const button = document.querySelector('.bt');

function view_movie(){
    if (resultMovie.style.display == 'none') {
        button.style.backgroundColor = 'firebrick';
        resultMovie.style.display = 'flex';
    }
    else{ 
        resultMovie.style.display = 'none';
        button.style.backgroundColor = '#dcb088';
    }
}


buttonMovie.addEventListener('click', view_movie)
