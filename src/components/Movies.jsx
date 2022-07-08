import { useEffect, useState } from "react"
import axios from 'axios'
import MovieCard from "./MovieCard"
import '../App.css'
import axiosInstance from "../network/config"



function Movies(props){

    

   
   
    return(
        <> 
           <h1> Movies List</h1>
            <div className="row ">
                {
                props.data.map(movie=>{
                    return (
                        <div className="col-md-2 mb-5" key={movie.original_title}> 
                        <MovieCard movie={movie}/> </div>)})
                
                }
                                        
            </div>
        </>



    )
}


export default Movies