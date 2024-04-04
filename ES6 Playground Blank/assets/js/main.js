//Ejercicio 1

import { songs } from "./songs.js";
console.log("Ex 1 ", songs);

//Ejercicio 2

const songsTitles = songs.map((song) => {
  return song.title.toUpperCase();
});
console.log("Ex 2 ", songsTitles);

//Ejercicio 3

var songsBefore1975 = songs.filter((song) => {
  if (song.year < 1975) {
    return song;
  }
});

songsBefore1975 = songsBefore1975.map((song) => {
  return song.title;
});
console.log("Ex 3 ", songsBefore1975);

//Ejercicio 4

const { title: firstSong, ...restData } = songs[0];
console.log("Ex 4 ", firstSong);

//Ejercicio 5

const findCalifornia = songs.find((song) => {
  return song.title === "Hotel California" ? song : false;
});
console.log("Ex 5 ", findCalifornia);

//Ejercicio 6

console.log("Ex 6 Falta");

//Ejercicio 7

const songsNewArray = songs.map((song) => {
  return `${song.title} - ${song.artist} (${song.year})`;
});
console.log("Ex 7 ", songsNewArray);

//Ejercicio 8

const allBeatleSongs = songs.filter((song) => {
  if(song.artist === "The Beatles"){
    const {title, ...restData} = song;
    return title;
  }
})
console.log("Ex 8 ", allBeatleSongs);

//Ejercicio 9

/*const yearPassedBetweenAllSongs = songs.reduce((accumulator, song) => {
  return accumulator < song.year ? accumulator : song.year;
});

console.log(yearPassedBetweenAllSongs)*/

const totalYearsBetweenSongs = songs.reduce((accumulator, song) => {
  if(song.year < accumulator.minYear) {
    accumulator.minYear = song.year; // Update the minimum year
  }
  if(song.year > accumulator.maxYear) {
    accumulator.maxYear = song.year; // Update the maximum year
  }
  return accumulator;
}, { minYear: Infinity, maxYear: -Infinity });

const yearPassedBetweenAllSongs = totalYearsBetweenSongs.maxYear - totalYearsBetweenSongs.minYear;
console.log("Ex 9 ", yearPassedBetweenAllSongs);

//Ejercicio 10

const averageYear = songs.reduce((accumulator, song) => {
  return accumulator + Number(song.year) / songs.length;
}, 0);
console.log("Ex 10 ", averageYear);

//Ejercicio 11

var auxLongest = [];
auxLongest[0] = 0;

const findLongest = songs.map((song) => {
  if(song.title.length > auxLongest[0]){
    auxLongest[0] = song.title.length;
    auxLongest[1] = song;
  }
  return auxLongest;
});
console.log("Ex 11 ", auxLongest);

//Ejercicio 12

/*oa{title, ...restData} = songs[0];
console.log("Ex 12 ");*/

const { title: firstSongEx12, artist: artistSong, year: yearSong ,...restData2 } = songs[0];
console.log(`Ex 12 ${firstSongEx12} - ${artistSong} (${yearSong})`);

//Ejercicio 13

const arrayWithoutFirstElement = songs.slice(1);
console.log("Ex 13 ", arrayWithoutFirstElement);

//Ejercicio 14

console.log("Ex 14 Falta");

//Ejercicio 15

var aux5Characters = 0;
const checkOver5Characters = (arr) => {
  if(arr.title.length >= 5){
    return arr.title;
  }
}

let check = songs.every(checkOver5Characters);
console.log("Ex 15 ", check);

//Ejercicio 16

const check1980 = (songs) => songs.year > 1979 || songs.year < 1990;

console.log(songs.some(check1980));

//Ejercicio 17

const beatleTemplateLiteral = songs.filter((song) => {
  if(song.artist === "The Beatles"){
    console.log(`Ex 17 ${song.artist} released ${song.title} in (${song.year})`);
  }
})

//Ejercicio 18

const songsArtistArray = songs.map((song) => {
  return song.artist;
});
console.log("Ex 3 ", songsArtistArray);

//Ejercicio 19

