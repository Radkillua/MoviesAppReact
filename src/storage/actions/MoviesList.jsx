
import axios from 'axios'
import axiosInstance from '../../network/config'
import { useParams } from "react-router-dom"
import LanguageContext from '../../context/language';



export const getMovieList=(contextLang)=>(dispatch)=>{

     return   axios.get(`https://api.themoviedb.org/3/movie/popular`, {
       params:{
          api_key:"52ab4034c3414677f4b17c77d2a1824e",
          language:contextLang 

          
         },
             }).then((res)=> 
                    dispatch({
                    type:"GET-MOVIES-LIST",
                    payload:res.data.results

                    })
             )
               .catch((error)=>console.log("error",error))
 
    
}



export const getMovieDetails=(params, contextLang) =>(dispatch)=>{

  axiosInstance.get(`/${params.id}`, {
    params:{
     api_key:"52ab4034c3414677f4b17c77d2a1824e",
     language:contextLang 

    
    } 

      }).then((res)=>
      dispatch({
        type:"GET-MOVIES-DETAILS",
        payload:res.data
      }) )
        .catch((error)=>console.log("error",error))
 
}