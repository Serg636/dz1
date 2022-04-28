"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,



    countFilms: function () {
    
        do {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", 10);
    
            if (Number.isInteger(Number(personalMovieDB.count)) && Number(personalMovieDB.count) > 0 && Number(personalMovieDB.count) <= 100) {
                return personalMovieDB.count;
            } else {
                alert("Введите корректное значение");
            }
    
        } while (true);
    },
    


    detectPersonalLevel: function () {
        (personalMovieDB.count <= 10) ? alert("Просмотрено слишком мало фильмов"):
            (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? alert("Вы классический зритель") :
            (personalMovieDB.count >= 30) ? alert("Вы киноман") : alert("Произошла ошибка");
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == ""){
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (elem, index) {
            console.log(`Любимый жанр №${index+1} - это ${elem}`); } );
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            let nameOfFilms = prompt('Один из последних просмотренных фильмов?', '');
            if (nameOfFilms == null || nameOfFilms.length < 1 || nameOfFilms.length > 50) {
                i--;
                alert("Повторите еще раз");
                continue;
            }
            let movieRating;
            let bool;
            do {
                bool = true;
                movieRating = prompt('На сколько оцените его?', 10);


                if (Number.isInteger(Number(movieRating)) && Number(movieRating) > 0 && Number(movieRating) <= 10) {
                    bool = false;
                } else {
                    alert("Введите корректное значение");
                }
            } while (bool);

            personalMovieDB.movies[nameOfFilms] = movieRating;
        }
    },

    showMyBD: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyBD: function(hidden) {

        if (!hidden) { 
            this.privat = true;
        }         else { this.privat = false;}
            
        console.log(personalMovieDB);
    }
    

};

personalMovieDB.count = personalMovieDB.countFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyBD(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyBD(personalMovieDB.privat);