import './Component.css'
const Selected_Category =({ key,  data, selectMovies,setselectMovies })=>{
    const HandleClick = ()=>{
        if(selectMovies.includes(data)){
            setselectMovies((prev)=> prev.filter((item)=> item!= data));
        }else{
            setselectMovies((prev)=>[...prev ,data])
        }
    }
    return (
        
        <div className="selected-ent"  >
            <li key={key}></li>
            <div>
                <p>{data} </p><span onClick={HandleClick} >X</span>
            </div>
        </div>
    )
}

export default Selected_Category

