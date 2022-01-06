// const config = {
//     api_key: 'bda5eecdda766f71f3fd5fe13fe0ce92'
//     api_base_url: "https://api.themoviedb.org/3/"
// }

let movieData = async () => {
  console.log("working");
  let data = [];
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=bda5eecdda766f71f3fd5fe13fe0ce92&page=$1"
    );
    const responseData = await response.json();
    data = responseData?.results;
  } catch (error) {}
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let movies = data[i];
    document.body.innerHTML += `<div class="movie"><img class="movie-image" src="https://image.tmdb.org/t/p/w1280${movies.backdrop_path}"  />
    <div class="movie-info">
      <h3 class="movie-name">${movies.title}</h3>
      <span class="rating">${movies.vote_average}</span>
    </div>
    <div class="overview">
      <h3 class="overview-text">${movies.overview}</h3>
    </div>
    </div>`;
  }
  // return data;
};

movieData();
