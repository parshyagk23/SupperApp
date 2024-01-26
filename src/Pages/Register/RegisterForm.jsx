import React from 'react'
import styled from 'styled-components'

const RegisterForm = () => {
  return (
    <FormData>
      
                <div>
                <input type="text" name="name" id="" placeholder="Name"   />
               
                </div>
                <div>
                <input type="text" name="username" id="" placeholder="UserName"   />
                
                </div>
                <div>
                <input type="email" name="email" id="" placeholder="Email"  />
                
                </div>
                <div>
                <input type="number" name="mobile" id="" placeholder="Mobile"   />
                
                </div>
                <div className="check" >
                <input type="checkbox" name="" id="" placeholder="Name"  /> <p>Share my registration data with Superapp</p>
                
                </div>
               
                

                <button  type="submit" >Sign up</button>
           
    </FormData>
  )
}

export default RegisterForm

const FormData = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 21px;
    
     div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
     
     input{
        width: 518px;
        height: 55px;
        outline: none;
        border: none;
        border-radius: 4px;
        background: #292929;
        padding: 20px;
        font-family: 'DM Sans';
        font-size: 21px;
        font-weight: 400;
        color: #7c7c7c;
    }
    .check{
        display: flex;
        flex-direction:row;
        align-self: baseline;
        margin-left: 50px;
      
    }
    .checkerr{
        color:#f00;
        font-family: 'DM Sans';
        font-size:20px ;
        font-weight: 300;
        line-height: 27px;
        letter-spacing: .4px;
        width: 518px;
    }
    .check input{
        width: 50px;
        height: 20px;
    }
    
     button{
        all: unset;
        width: 518px;
        height: 55px;
        border-radius: 28px;
        background: #72DB73;
        font-family: 'Roboto';
        font-size: 29px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 1.6px;
        color: white;
        text-align: center;
        cursor: pointer;
    }



`