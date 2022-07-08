import { Link } from "react-router-dom"
import MovieDetails from "../Pages/MovieDetails"
import '../App.css'
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addCurrentFavourite,
  removeCurrentFavourite,
} from "../storage/actions/FavoriteMovie";





function MovieCard({movie : {poster_path, title , overview ,id }}){


  const favourite = useSelector((state) => state.fav);
  // console.log(favourite)
  const isFavourite = favourite.some((favourite) => favourite.id === id);
  console.log(isFavourite)


  const dispatch = useDispatch();

  const addFavourite = () => {
    dispatch(
      addCurrentFavourite({ id: id, title: title, poster_path: poster_path })
    );
  };

  const removeFavourite = () => {
    dispatch(
      removeCurrentFavourite({ id: id, title: title, poster_path: poster_path })
    );
  };

 

  function AddOrRemove() {
    isFavourite ? removeFavourite() : addFavourite();}


    
        return(

          <div className="card h-100 text-white bg-dark">

<button
        onClick={() => {        
          if (isFavourite === true) {
            AddOrRemove()
          } else {
            AddOrRemove()          }
        }} 

      >
        {isFavourite ? (
          <FaStar
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              color: "red",
            }}
          />
        ) : (
          <FaRegStar
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              color: "white",
            }}

            
          />
        )}
      </button>

          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <p className="card-text ">{title}</p>
              </div>
              <Link to={`/MovieDetail/ ${id}`} className="btn btn-light " > Show Movie Details</Link>

			

          </div>
      
        
        )
    }
    

    export default MovieCard
    
