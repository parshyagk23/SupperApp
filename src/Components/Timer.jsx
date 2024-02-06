import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [key, setkey] = useState(true);

  const HandleHoursIncrease = () => {
    setHours(hours + 1);
  };
  const HandleHoursDecrease = () => {
    setHours(hours - 1);
  };
  const HandleMinutesIncrease = () => {
    if (minutes == 59) {
      setMinutes(0);
      OnCLickHoursIncrease();
      return;
    }
    setMinutes(minutes + 1);
  };
  const HandleMinutesDecrease = () => {
    if (minutes == 0) {
      if (hours == 0) return;
      setHours(hours - 1);
      setMinutes(59);
      return;
    }
    setMinutes(minutes - 1);
  };
  const HandleSecIncrease = () => {
    if (seconds == 59) {
      setSeconds(0);
      HandleMinutesIncrease();
      return;
    }
    setSeconds(seconds + 1);
  };
  const HandleSecDecrease = () => {
    if (seconds == 0) {
      setSeconds(59);
      HandleMinutesDecrease();
      return;
    }
    setSeconds(seconds - 1);
  };
  const HandlePlaying = () => {
    setPlaying(!isPlaying);
  };
  const children = (remainingTime) => {
    
    let hour = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
    let minute = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
    let second = (remainingTime % 60).toString().padStart(2, '0');
    if (remainingTime < 0) {
      hour=(0).toString().padStart(2, '0');
      minute=(0).toString().padStart(2, '0');
      second=(0).toString().padStart(2, '0');
      return (
        <div style={{ textAlign: "center"  }}>
          <div style={{ fontSize:'25px', color:"#FFF", fontWeight:'600' }} >
            Time's up
          </div>
          <p style={{ fontSize: "20px",color:"#FFF" }}>every interation click on reset</p>
        </div>
      );
    }

    return (<div style={{textAlign: "center" ,fontSize:'30px', color:"#FFF", fontWeight:'600' }} >{hour}:{minute}:{second}</div>)
    
  };
  const HandleReset = () => {
    setkey((prevkey) => !prevkey);
    setHours(0) ,setMinutes(0), setSeconds(0)
  };
  return (
    <div className="timer" style={{ gridArea: "c4" }}>
      <section className="countdowntimer">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={hours * 3600 + minutes * 60 + seconds}
          colors={["#e11818", "#F7B801", "#A30000", "#FF6A6A"]}
          colorsTime={[7, 5, 2, 0]}
          key={key}
          onComplete={() => {
            setPlaying(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          }}
          strokeWidth={12}
        >
         
          {({ remainingTime }) => children(remainingTime)}
        </CountdownCircleTimer>
      </section>
      <section className="timerseciton">
        <div className="timerbtn" >
          <div className="btnHMS" >
            <p>Hours</p>
            <button onClick={HandleHoursIncrease}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                  fill="#949494"
                />
              </svg>
            </button>
            <h1>{hours}</h1>
            <button onClick={HandleHoursDecrease} disabled={hours == 0}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                  fill="#949494"
                />
              </svg>
            </button>
          </div>
          <div className="btnHMS">
          <p>Minutes</p>
            <button onClick={HandleMinutesIncrease}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                  fill="#949494"
                />
              </svg>
            </button>
            <h1>{minutes}</h1>
            <button onClick={HandleMinutesDecrease}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                  fill="#949494"
                />
              </svg>
            </button>
          </div>
          <div className="btnHMS">
          <p>Seconds</p>
            <button onClick={HandleSecIncrease}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                  fill="#949494"
                />
              </svg>
            </button>
            <h1> {seconds}</h1>
            <button onClick={HandleSecDecrease}>
              <svg
                width="27"
                height="15"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                  fill="#949494"
                />
              </svg>
            </button>
          </div>
        </div  >
        <div className="startstop" >

        {isPlaying ? (
          <button onClick={HandlePlaying}>Stop</button>
        ) : (
          <button onClick={HandlePlaying}>Start</button>
        )}
        <button onClick={HandleReset}>reset</button>
        </div>
      </section>
    </div>
  );
};

export default Timer;
