import {React, useEffect,useState} from 'react'
import './desktopStyle.css'

const InfoWrapper=(thisProp)=>{
    const [movieName, setMovieName]=useState('primaryMovie')
    const [imdbScore, setImdbScore]=useState(0.0);
    const [rtScore,setRTScore]=useState(0)
    const MS="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const [movieSummary, setMovieSummary]=useState(MS)
    const [stream1, setStream1]=useState('stream1')
    const [stream2, setStream2]=useState('stream2')

    useEffect(()=>{
        fetch('https://reqres.in/api/users/4').then((response)=>{
            return(response.json())
        }).then((data)=>{
            console.table(data.data)
            setMovieName(data.data.first_name)
        })
    })

    return(
        <div className='movieInfoWrapper'>
            <div className='movieInfoText'>
            <h1 className='stylizedName'>{movieName}</h1>
            <section className='reviews'><span>{`RT Score: ${rtScore}`}</span><span>{`IMDb Score: ${imdbScore}`}</span></section>
            <section className='movieSummary'>
                <h2>Summary</h2>
                <p>{movieSummary}</p>
            </section>
            <button className='trailerButton'>Watch Trailer</button>
            <p className='streamLinks'>Stream the movie at: <span>{stream1}</span><span>{stream2}</span></p>
            </div>
        </div>
    )
}

export default InfoWrapper