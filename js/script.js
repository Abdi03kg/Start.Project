"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Сколько фильмов вы уже посмотрели?", "");
const b = prompt("Один из последних просмотренных фильмов?", "");
const c = prompt("Сколько фильмов вы уже посмотрели?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
