"use strict";

let numberOfFilms;

function countFilms() {


    do {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 10);


        if (Number.isInteger(Number(numberOfFilms)) && Number(numberOfFilms) > 0 && Number(numberOfFilms) <= 100) {
            alert("Все ОК");
            return numberOfFilms;
        } else {
            alert("Введите корректное значение");
        }

    } while (true);
}

numberOfFilms = countFilms();

let personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i<2; i++) {

        let nameOfFilms = prompt('Один из последних просмотренных фильмов?', ' ');
       let movieRating;
        let bool;
       do{
        bool = true;
        movieRating = prompt('На сколько оцените его?', 10);   


        if (Number.isInteger(Number(movieRating)) && Number(movieRating) > 0 && Number(movieRating) <= 10) {
            bool = false;
            
        } else {
            alert("Введите корректное значение");
        }
        }while(bool);

        personalMovieDB.movies[nameOfFilms] = movieRating;
        

    }



console.log(personalMovieDB);


document.write(numberOfFilms);



