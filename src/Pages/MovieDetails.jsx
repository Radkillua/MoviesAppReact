import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import '../App.css'
import axiosInstance from "../network/config"
import {useSelector , useDispatch} from 'react-redux'
import { getMovieDetails } from "../storage/actions/MoviesList"
import { useContext } from "react";
import LanguageContext from '../context/language';



function MovieDetails(){

   const params= useParams()
   console.log(params)
   const {contextLang}=useContext(LanguageContext)


const movieDetail=useSelector((state)=> state.listOfMovie.moviesDetails)
const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getMovieDetails(params, contextLang))
  },[])



    return(

        <div className="card Crdlone col-md-3 m-auto text-white bg-dark mt-2 ">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title  ">{movieDetail.title}</h5>
                            <p className="card-text mt-5">{movieDetail.overview}</p>
                        </div>
            </div>
    )
}

export default MovieDetails