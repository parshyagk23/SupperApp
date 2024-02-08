import './Component.css'
import userimg from '../assets/userprofile.png'
const Userinfo = () => {
  const userData = JSON.parse(window.localStorage.getItem('userInfo'))
  const SelectedMovie = JSON.parse(window.localStorage.getItem('selectMovies'))
  
  return (
    <main className='userinfo' style={{gridArea:'c1'}} >
      <div className='mainsection' >
      <section style={{gridArea:'s1'}} className="userimg">
       <div>
        <img src={userimg}  alt="" />
       </div>
      </section>
      
      <section style={{gridArea:'s2' ,height:'90px'}} className='secction2'>
        <div className='userdata' >
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p style={{fontSize:'25px', fontWeight:'600'}} >{userData.username}</p>
        </div>
        </section>
        <section style={{gridArea:'s3' , height:"143px"}} className='section3'>
        <div className='movie' style={{ gridTemplateColumns:`${SelectedMovie.length<=2?'1fr 1fr':'1fr 1fr 1fr'}` }}>
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
