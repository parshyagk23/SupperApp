import React, { useEffect, useState } from 'react'
import axios from "axios";
const FetchMovieApi = ({category}) => {
  
    const [Movie,Setmovie] = useState(null)
    const [error,Seterror] = useState(null)
    const [loading,Setloading] = useState(false)
    useEffect(()=>{
        const FetchMovieData=  async ()=>{
          Setloading(true)
          try{

            const fetchingMovie = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=e0506a27&s=${category}`)
            const responce = fetchingMovie
            const data = responce.data
            Setmovie(data.Search.slice(0,4))
          }catch (e) {
            Seterror(e)
          }finally{
            Setloading(false)
          }
        }
        FetchMovieData()

    },[])
    // console.log(Movie)

  return (
    <section>
      <div>
        <h2 style={{ color:'#878787', padding:'20px 0' }} >{category}</h2>
        <div className='moviecategory' >
          {loading?(<p style={{paddingTop: '5px'}}>Loading</p>):Movie?(<>

              {Movie.map((movie,index)=>(
                <div key={index}  >
                    <img src={movie.Poster} alt="" width='100%' height='100%' style={{ borderRadius:"9px" }} />
                </div>
              ))}
          
          </>):(<p style={{paddingTop: '5px'}}>{error}</p>)} 
        </div>
      </div>
    </section>
  )
}

export default FetchMovieApi