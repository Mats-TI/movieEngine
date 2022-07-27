import {React, useEffect,useState} from 'react'

const InfoWrapper=(thisProp)=>{
    const [movieName, setMovieName]=useState('primaryMovie')
    useEffect(()=>{
    })

    return(
        <div>
            {movieName}
        </div>
    )
}

export default InfoWrapper