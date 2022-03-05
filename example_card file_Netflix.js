//Netflix movie file (картотека фільмів Нетфлікс)
var NetflixsMovies = {
"The Witcher (Відьмак)": {
releaseDate: 2020,seasons: 1,genre: ["fantasy", "thriller", "historical"]
},
"Altered Carbon (Видозмінений вуглець)": {
releaseDate: 2019, seasons: 2, genre: ["fantasy", "detective", "action"]
},
"Lucifer (Люцифер)": {
releaseDate: 2019, seasons: 5, genre: ["fantasy", "comedy", "detective"]
}
};

//if we want to get info (якщо бажаємо отримати інфо)
var Witcher = NetflixsMovies["The Witcher (Відьмак)"];
Witcher.genre

//when you need to add a new movie (коли треба добавити новий фільм)
var Discovery = {
releaseDate: 2019, seasons: 3, genre: ["fantasy", "adventures", "space"]
};
NetflixsMovies["Discovery (Дискавері)"] = Discovery;

//make a list of all movies (скласти перелік усіх фільмів)
Object.keys(NetflixsMovies);
