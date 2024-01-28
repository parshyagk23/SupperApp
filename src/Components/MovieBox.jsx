import styled from "styled-components"

function Box({data,setselectMovies,selectMovies}){
    const HandleClick = ()=>{
        
            if(selectMovies.includes(data.id)){
                setselectMovies((prev)=> prev.filter((item)=> item!= data.id));
            }else{
                setselectMovies((prev)=>[...prev ,data.id])
          }
        
        
    }
    return(
        <Databox selectMovies={selectMovies} data={data} >
        <div data={data} style={{background:data.color}} onClick={HandleClick}  >
            <h1>{data.id}</h1>
            {data.image}
        </div>
        </Databox>
    )
}
export default Box

const Databox= styled.div`

    div{
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border: ${(props) =>  props.selectMovies.includes(props.data.id)
            ? " 6px solid #11B800"
            : ""};
       cursor: pointer;
    }
    h1{
        color: white;
        font-family: "DM Sans";
        font-size: 25px;
        font-weight: 500;
    }
   
    
`