import React, { useRef, useState } from "react";

const SearchMovies = () => {
  let [movie, setMovie] = useState([]);
  let inputField = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    // let inputVal = inputField.current.value;

    let inputVal = inputField.current;

    if(inputVal.value===''||inputVal.value===null){
        alert('enter movie name')
        inputVal.style.cssText=`border:solid 2px red`
     } 
     else{
          let fetchApi = async () => {
            let movieUrl = await fetch(
              `https://www.omdbapi.com/?s=${inputVal.value}&apikey=f5d6e9e4`
            );
            let moviesData = await movieUrl.json();
            setMovie(moviesData.Search);
          };
          fetchApi();
    }

   
  };
  return (
    <>
      <div className="searchmovies">
        <div className="api-header head-fix">Search movies</div>
        <div className="searchField">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputField}
              type="text"
              placeholder="Enter movie name"
            />
            <button>Search</button>
          </form>
        </div>
        <div className="moviecard">
          {movie.map((movieObj) => {
            let { Title, Year, Poster } = movieObj;
            // console.log(movieObj);
            return (
              <>
                <div className="card">
                  <div className="poster">
                    <img src={Poster} alt="loading...." />
                  </div>
                  <div className="title">{Title}</div>
                  <div className="year">{Year}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchMovies;
