// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(element => element.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter((element) => {
    if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
      return element;
    }
  })
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  };
  const averageScore = movies.reduce((accumulator, currentValue) => {
    if (typeof currentValue.score === "number") {
      return accumulator += currentValue.score;
    } else {
      return accumulator += 0;
    }
  }, 0)
  const result = averageScore / movies.length;
  return Math.round(result * 100) /100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((element) => {
    if (element.genre.includes("Drama")) {
      return element;
    }
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesArrayCopy = [...movies];
  const numericalOrder = moviesArrayCopy.sort((current, next) => {
    if (current.year < next.year) {
      return -1;
    } else if (next.year < current.year) {
      return 1;
    } else {
      if (current.title < next.title) {
        return -1;
      } else if (next.title < current.title) {
        return 1;
      }
      return 0;
    }
  });
  return numericalOrder;
};
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesArrayCopy = [...movies];
  const alphabeticalOrder = moviesArrayCopy.sort((movie1, movie2) => {
    if (movie1.title < movie2.title) {
      return -1;
    } else if (movie2.title < movie1.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return alphabeticalOrder.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
