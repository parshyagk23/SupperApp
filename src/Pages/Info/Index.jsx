
import Actions from '../../assets/Actions.png'
import Drama from   '../../assets/Drama.png'
import Fantasy from '../../assets/Fantasy.png'
import Fiction from '../../assets/Fiction.png'
import Horrors from '../../assets/Horrors.png'
import Music from   '../../assets/Music.png'
import Romance from '../../assets/Romance.png'
import Thriller from'../../assets/Thriller.png'
import Western from '../../assets/Western.png'
import Box from "../../Components/MovieBox";
import Selected_Category from "../../Components/Category_Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Info = () => {

  const Entertainment_Category =[
    {
    id:"Action",
    color:'#FF5209',
    image: <img style={{  height: "90px" }} src={Actions} />,
    },
    {
    id:"Drama",
    color:'#D7A4FF',
    image: <img style={{  height: "90px" }} src={Drama} />,
    },
    {
      id:"Romance",
      color:'#148A08',
      image: <img style={{  height: "90px" }} src={Romance} />,
    },
    {
      id:"Thriller",
      color:'#84C2FF',
      image: <img style={{  height: "90px" }} src={Thriller} />,
    },
    {
      id:"Western",
      color:'#902500',
      image: <img style={{  height: "90px" }} src={Western} />,
    },
    {
      id:"Horrors",
      color:'#7358FF',
      image: <img style={{  height: "90px" }} src={Horrors} />,
    },
    {
    id:"Fantasy",
    color:'#FF4ADE',
    image: <img style={{  height: "90px" }} src={Fantasy} />,
    },
    {
      id:"Music",
      color:'#6CD061',
      image: <img style={{  height: "90px" }} src={Music} />,
      },
    {
    id:"Fiction",
    color:'#FF5209',
    image: <img style={{  height: "90px" }} src={Fiction} />,
    }, 
];
const [selectMovies,setselectMovies] = useState([])
const navigate= useNavigate();
  return (
    <main  className='info-main'
    >
      <section >
        <div className='category-box'>
        <div className="choose-text"  >
          <h2>Super App</h2>
          <h1>Choose Your Entertainment category</h1>
        </div>
        <div className="choosed-item" style={{marginTop:'30px'}} >
        <div className="items" >

            {selectMovies.map((select)=>
           
            
             <Selected_Category
                  key={select}  
                  data={select}
                  selectMovies={selectMovies}
                  setselectMovies={setselectMovies}
                  />
            )};
            
            </div>
            
            
        </div>
        {selectMovies.length<3? (
           <div className="min-category">
           <p>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="34"
               height="29"
               viewBox="0 0 34 29"
               fill="none"
             >
               <path
                 d="M19.4607 1.17524C19.2557 0.818091 18.9601 0.52136 18.6037 0.31501C18.2473 0.108661 17.8428 0 17.4309 0C17.0191 0 16.6146 0.108661 16.2582 0.31501C15.9018 0.52136 15.6062 0.818091 15.4011 1.17524L1.1988 25.3402C0.252252 26.9516 1.38728 29 3.22859 29H31.6312C33.4725 29 34.6096 26.9495 33.661 25.3402L19.4607 1.17524ZM17.4268 8.28781C18.5349 8.28781 19.4027 9.24471 19.2909 10.3487L18.566 17.6124C18.5416 17.8978 18.411 18.1636 18.2001 18.3573C17.9892 18.551 17.7132 18.6585 17.4268 18.6585C17.1404 18.6585 16.8644 18.551 16.6535 18.3573C16.4426 18.1636 16.312 17.8978 16.2876 17.6124L15.5627 10.3487C15.5367 10.0882 15.5655 9.82513 15.6473 9.57645C15.7291 9.32778 15.8621 9.099 16.0377 8.90485C16.2133 8.7107 16.4277 8.55549 16.6669 8.44922C16.9062 8.34294 17.165 8.28796 17.4268 8.28781ZM17.4309 20.7151C17.9803 20.7151 18.5071 20.9333 18.8955 21.3218C19.2839 21.7102 19.5022 22.237 19.5022 22.7863C19.5022 23.3357 19.2839 23.8625 18.8955 24.2509C18.5071 24.6393 17.9803 24.8576 17.4309 24.8576C16.8816 24.8576 16.3548 24.6393 15.9664 24.2509C15.5779 23.8625 15.3597 23.3357 15.3597 22.7863C15.3597 22.237 15.5779 21.7102 15.9664 21.3218C16.3548 20.9333 16.8816 20.7151 17.4309 20.7151Z"
                 fill="#FF0000"
               />
             </svg>
             <span style={{marginLeft:'12px'}} >Minimum 3 category required</span>
           </p>
         </div>
        ):(<></>) }
       
        </div>
      </section>
      
      <section className="category-section" >
        <div className="category-item">
        {Entertainment_Category.map((category)=>(
          <Box 
            key={category.id}
            data={category}
            selectMovies={selectMovies}
            setselectMovies={setselectMovies}
          />
        ))}
      
        </div>
      <div className="Nextpage">
        <button onClick={()=>{
          window.localStorage.setItem('selectMovies',JSON.stringify(selectMovies));
          navigate('/showcase')

        }} 
        disabled={selectMovies.length<3 }
        style={{  color: selectMovies.length<3 ? '#ffffff62': '#fff' }}
        >Next page</button>
      </div>
      </section>
    </main>
  );
      }
export default Info;


