import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import '../App.css'
import axiosInstance from "../network/config"
import Movies from "../components/Movies"
import LanguageSwitcher from "../components/LanguageSwitcher"
import {useSelector , useDispatch} from 'react-redux'
import { getMovieList } from "../storage/actions/MoviesList"
import { useContext } from "react";
import LanguageContext from '../context/language';




function SelectMovie(){
    const {contextLang}=useContext(LanguageContext)

    const movies=useSelector((state)=> state.listOfMovie.moviesList)
    const dispatch=useDispatch()

      useEffect(()=>{
          dispatch(getMovieList(contextLang))
      },[])
   
    
  



   
    return(
        <> 
           <Movies data={movies}/>
        </>



    )
}


export default SelectMovie