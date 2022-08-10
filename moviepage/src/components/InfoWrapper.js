import {React, useEffect,useState} from 'react'
import {useGlobalStore} from './globalStates'

const InfoWrapper=(thisProp)=>{
    const [movieName, setMovieName]=useState('primaryMovie')
    const someVar=useGlobalStore((state)=>state.someGlobalVar)

    useEffect(()=>{
        fetch('https://reqres.in/api/users/2').then((response)=>{
            return(response.json())
        }).then((data)=>{
            setMovieName(data.data.avatar)
        })
    })

    return(
        <div>
            <img src={movieName} alt='' />
            <h1>{someVar}</h1>
        </div>
    )
}

export default InfoWrapper