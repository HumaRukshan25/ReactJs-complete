import React from "react";

const Mcard = (data) => {
  console.log(data);

  let {
    movieName,
    movieActor,
    movieActress,
    movieRating,
    movieImgUrl,
    movieDesc
  } = data;
  return (
    <>
      <div className="m-card">
        <div className="container">
          <div className="image">
            <img src={movieImgUrl} alt="" />
            <div className="title">{movieName}</div>
          <table>
            <tr>
              <th>Actor:</th>
              <th>{movieActor}</th>
            </tr>
            <tr>
              <th>Actress:</th>
              <th>{movieActress}</th>
            </tr>
            <tr>
              <th>Rating:</th>
              <th>{movieRating}</th>
            </tr>
            <tr>
              <th>Description:</th>
              <th>{movieDesc}</th>
            </tr>
          </table>
          </div>
          
          {/* <div className="desc">{movieDesc}</div> */}
        </div>
      </div>
    </>
  );
};

export default Mcard;
