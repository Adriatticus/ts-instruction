import { Movie } from "./movie.class";

console.log("Welcome to the movie app");

let m1: Movie = new Movie(1, "A movie", 2000, "PG", "Director");

console.log(m1.details);
