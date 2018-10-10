const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitle = function(){
  const result = this.films.map((film) => {
    return film.title;
  });
  return result
}
// One liner below
// return this.films.map(film => film.title);}

Cinema.prototype.findTitle = function(searchTitle){
  const result = this.films.find((film) =>{
    return film.title.toLowerCase() === searchTitle.toLowerCase()
  });
  return result
}


Cinema.prototype.findByGenre = function(genre){
  const result = this.films.filter((film) =>{
    return film.genre === genre
  });
  return result
}

Cinema.prototype.findByYear = function(year){
  const result = this.films.filter((film) => {
    return film.year === year;
  });
  return result
};

Cinema.prototype.checkByYear = function(year){
  const result = this.films.includes((film) => {
    return film.year === year;
  });
  return result

}

// Cinema.prototype.noFilmFound = function(year){
//   let state = 'Found';
//   if(this.findByYear(year) == []){
//     state = 'None';
//   };
//   return state
// }
Cinema.prototype.noFilmFound = function(year){
  const result = this.films.filter((film) => {
    return film.year !== year;
  });
  return "None"
};

Cinema.prototype.particularLength = function(length){
  const result = this.films.filter((film) =>{
    return film.length > length;
  });
  return result
};

Cinema.prototype.totalRunningTime = function(){
  const result = this.films.reduce((runningTotal, currentFilmLength) =>{
    return runningTotal + currentFilmLength.length;
  }, 0);
  return result
}

module.exports = Cinema;
