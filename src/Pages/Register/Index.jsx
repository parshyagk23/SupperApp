
import RegisterForm from "../../Components/RegisterForm";
const Register = () => {
  return (
    <>
    <main className="register-main" style={{ }}>
        <section
        
          className="bgimgsection"
        >
          <div className="Rockimg">
            <h1>Discover new things on Superapp</h1>
          </div>
        </section>
        <section className="registerform">
          <div className="AppTitle">
            <h1>Super App</h1>
            <p>Create your new account</p>
          </div>
          <RegisterForm />
          <div className="term-privacy">
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <span> Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span> Privacy Policy</span>
            </p>
          </div>
        </section>
    </main>
    </>
  );
};
export default Register;


