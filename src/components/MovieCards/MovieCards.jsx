import React from "react";
import "./movies.css";
import { movieData } from "./movieData";
import Mcard from "./Mcard";

const MovieCards = () => {
  console.log(movieData);

  return (
    <>
      <div className="moviecards">
        <div className="header">Movie Poster </div>
        <div className="card">
          {movieData.map((elem) => {
            let {
              movieName,
              movieActor,
              movieActress,
              movieRating,
              movieImgUrl,
              movieDesc,
            } = elem;
            // console.log(elem.movieName);
            console.log(movieName);
            return (
              <>
                <Mcard
                  movieName={movieName}
                  movieActor={movieActor}
                  movieActress={movieActress}
                  movieRating={movieRating}
                  movieImgUrl={movieImgUrl}
                  movieDesc={movieDesc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
