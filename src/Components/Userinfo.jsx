import './Component.css'

const Userinfo = () => {
  const userData = JSON.parse(window.localStorage.getItem('userInfo'))
  const SelectedMovie = JSON.parse(window.localStorage.getItem('selectMovies'))
  
  return (
    <main className='userinfo' style={{gridArea:'c1'}} >
      <div className='mainsection' >
      <section style={{gridArea:'s1'}} className="userimg">
       <div>
        <img src='/src/assets/userprofile.png'  alt="" />
       </div>
      </section>
      
      <section style={{gridArea:'s2'}} className='secction2'>
        <div className='userdata' >
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p style={{fontSize:'25px', fontWeight:'600'}} >{userData.username}</p>
        </div>
        </section>
        <section style={{gridArea:'s3'}} className='section3'>
        <div className='movie' style={{ gridTemplateColumns:`${SelectedMovie.length<=5?'1fr 1fr':'1fr 1fr 1fr'}` }}>
          {SelectedMovie.map((movie)=>(

          <div key={movie} className='selectedmovie' >
             {movie}
          </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  )
}

export default Userinfo
