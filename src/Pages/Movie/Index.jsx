import { useNavigate } from "react-router-dom";
import FetchMovieApi from "../../Components/Api/FetchMovieApi"
import profileimg from '../../assets/profile.jpg';

const Movie =()=>{

    const navigate = useNavigate()
    const MovieCategory = JSON.parse(window.localStorage.getItem('selectMovies'))
    
    // console.log(MovieCategory)
    return(
        <main  style={{ width:'90vw', margin:'0 auto 20px', fontFamily:'Roboto' }}>
        <div className="header" >
            <h1>Super App</h1>

            <img src={profileimg} alt="" width='81px' height='81px' onClick={()=>{navigate('/showcase')}} />
        </div>
        <div>
            <h3 style={{fontSize:'25px', fontWeight:'600', color:'#FFF'}} >
            Entertainment according to your choice
            </h3>
        </div>
           {MovieCategory.map((category)=>(

            <div key={category} >
                <FetchMovieApi category={category} />
            </div>
           ))}
        </main>
    )
}
export default Movie