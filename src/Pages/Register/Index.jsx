
import styled from "styled-components"
import RegisterForm from "../../Components/RegisterForm";


const Register =()=>{
   
    return(
        <>
        <MainEle>

        <Section1 >
            <div className="Rockimg">
            <h1>Discover new things on Superapp</h1>
            </div>

        </Section1>
        <Section2 >
            <div className="AppTitle" >
                <h1>Super App</h1>
                <p>Create your new account</p>
            </div>
           <RegisterForm />
            <div className="term-privacy">
                <p>By clicking on Sign up. you agree to Superapp <span> Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span> Privacy Policy</span></p>
            </div>
        </Section2>
        </MainEle>
        </>
    )

}
export default Register

const MainEle = styled.main`
    display: flex;
    background-color: #000;
`

const Section1 =styled.section`
    width: 600px;
    
    background: url('images/Rock.png'), lightgray 0px -49.673px / 100% 113.358% no-repeat;
    .Rockimg{
        margin: 550px 84px 0px 62px;
    }
    .Rockimg h1{
        color: #FFF;
        font-family: 'Roboto',sans-serif;
        font-size: 45px;
        font-style: normal;
        font-weight: 900;
        line-height: 141.688%; /* 77.928px */
        letter-spacing: 1.1px;
    }
    
`

const Section2 =styled.section`
    color: white;
    width: 680px;
    margin: 0 auto;
    
    .AppTitle{
        display: flex;
        align-items: center;
        flex-direction: column;
        /* margin-top: 10px; */
    }
    .AppTitle h1{
        color: #72db73;
        font-family: 'Single Day',cursive;
        font-size: 65px;
        font-weight: 400;
        line-height: 94px;
    }
    .AppTitle p{
        font-family: 'DM Sans';
        font-size: 25px;
        font-weight: 400;
        line-height: 35px;
        margin-bottom: 20px;
    }
    
    .term-privacy{
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;
        width: 518px;
        margin: 0 auto;
        margin-top: 25px;
        color:#7c7c7c;
        font-family:'Roboto' ;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: .5px;
        margin-bottom: 20px;
    }
    .term-privacy span{
        color: #72DB73;
    }
    
`
