import styled from "styled-components"

const Selected_Category =({data, selectMovies,setselectMovies })=>{
    const HandleClick = ()=>{
        if(selectMovies.includes(data)){
            setselectMovies((prev)=> prev.filter((item)=> item!= data));
        }else{
            setselectMovies((prev)=>[...prev ,data])
        }
    }
    return (
        <Selected>
            <div>
                <p>{data} </p><span onClick={HandleClick} >X</span>
            </div>
        </Selected>
    )
}

export default Selected_Category

const Selected = styled.div`

     div{
        width: 192px;
        display: flex;
        padding:10px;
        gap: 25px;
        border-radius: 31px;
        background: #148A08;  
        text-align:center ;
    }

   div p{
        width: 112px;
        color: #fff;
        font-family: 'Roboto';
        font-size: 25px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.5px;
    }
    div span{
        color:#085C00;
        font-size: 25px;
        font-weight: 400;
        cursor: pointer;
     }
`