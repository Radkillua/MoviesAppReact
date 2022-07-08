import React, { useContext } from "react";
import LanguageContext from "../context/language";

export default function ContextLanguageSwitcher(){
   
const {contextLang, setContextLang}=useContext(LanguageContext)
    const changeAppLanguage=()=>{
        setContextLang(contextLang ==="en" ?  "ar" : "en")
    }


    return(
        <div>
            <h2> Current Language is : {contextLang}</h2>
            <button className="btn btn-info" onClick={()=>changeAppLanguage()}> Change LANGUAGE</button>
        </div>
    )

}



