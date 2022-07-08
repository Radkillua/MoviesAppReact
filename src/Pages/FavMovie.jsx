import React from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

export default function Movies() {
  const fav = useSelector((state) => state.fav);
  console.log("fav", fav)


  return (
    <div>
      <h1 className="text-center m-3">Hello Movies Page</h1>
      <div className="row row-cols-3 row-cols-md-4 g-4">
        {fav.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
