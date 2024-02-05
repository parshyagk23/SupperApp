import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Component.css'
const RegisterForm = () => {
  const [formValues, SetfromValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  const navigate= useNavigate();
  const handleSubmit = () => {
    let isErrors = false;
    if (formValues.name.trim().length == 0) {
      setErrors((prev) => {
        return { ...prev, name: "Name field is required" };
      });
      isErrors=true;
      
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formValues.username.trim().length == 0) {
      setErrors((prev) => {
        return { ...prev, username: "Username field is required" };
      });
      isErrors=true;
    } else {
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }
    if (formValues.email.trim().length == 0) {
      setErrors((prev) => {
        return { ...prev, email: "Email field is required" };
      });
      isErrors=true;
    } else {
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formValues.mobile.trim().length == 0) {
      setErrors((prev) => {
        return { ...prev, mobile: "Mobile field is required" };
      });
      isErrors=true;
    } else {
      setErrors((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formValues.registerbox === false) {
      setErrors((prev) => {
        return { ...prev, registerbox: "Please check the box" };
      });
      isErrors=true;
    } else {
      setErrors((prev) => {
        return { ...prev, registerbox: null };
      });
    }
    if(isErrors){
      (true)
      return;
    }else{
      window.localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate('/Info');
    }
  };
  return (
    <section className="FormData" 
     >
      <div className="inputindex" >
        <input
          type="text"
          name="name"
          value={formValues.name}
          placeholder="Name"
          onChange={(e) => {
            SetfromValues((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <p>{errors.name}</p>
      </div>
      <div className="inputindex">
        <input
          type="text"
          name="username"
          value={formValues.username}
          placeholder="UserName"
          onChange={(e) => {
            SetfromValues((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
        />
        <p>{errors.username}</p>
      </div>
      <div className="inputindex">
        <input
          type="text"
          name="email"
          value={formValues.email}
          placeholder="Email"
          onChange={(e) => {
            SetfromValues((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <p>{errors.email}</p>
      </div>
      <div className="inputindex">
        <input
          type="text"
          name="mobile"
          value={formValues.mobile}
          placeholder="Mobile"
          onChange={(e) => {
            SetfromValues((prev) => {
              return { ...prev, mobile: e.target.value };
            });
          }}
        />
        <p>{errors.mobile}</p>
      </div>
      <div  >
        <div className="check">
        <input
          type="checkbox"
          name="registerbox"
          id="registerbox"
          placeholder="Name"
          value={formValues.registerbox}
          onChange={(e) => {
            SetfromValues((prev) => {
              return { ...prev, registerbox: e.target.checked };
            });
          }}
        />
        <label htmlFor="registerbox">
          Share my registration data with Superapp
        </label>
        </div>
        <p className="checkerr" > {errors.registerbox} </p>
      </div>

      <button onClick={handleSubmit} type="submit">
        Sign up
      </button>
    </section>
  );
};

export default RegisterForm;
