import { useState, useEffect } from "react";

const WetherApi = () => {
  const [wether, setWether] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(()=>{
    const invervalID = setInterval(()=>{
      setCurrentTime(new Date());
    },1000)
    return ()=> clearInterval(invervalID)
  },[])
  const FormatCurrentTime = `${currentTime.toLocaleDateString().replace(/\//g, '-')} ${currentTime.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  })}`;


  // const CurrentTime=()=>{
  //   const date = new Date();
  //   var currentHours = date.getHours();  
  //   var currentMinutes = date.getMinutes(); 
  //   let newformat = currentHours>=12 ?"PM":"AM"; 
  //   // currentHours = currentHours % 12;
  //   return currentHours+":"+currentMinutes+" "+ newformat;
  // }
  useEffect(() => {
    setLoading(true);
    fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=metric&include=current&key=DK67UUXACAS8CBC94VNVZVS6G&contentType=json"
    )
    .then((res)=>res.json())
    .then((data)=>setWether(data))
    .catch((err)=> setError(setError(err)))
    .finally(()=> setLoading(false))
  }, []);
  return (
    <main>
      <div className="wetherinfo">
        <div className="Datetime">
          {/* {loading? (<h1>Loading...</h1>): wether?(<h1>{wether.days[0].datetime}</h1>):(<>{error}</>)} */}
          <h1>{FormatCurrentTime}</h1>
          
        </div>
        <div className="forcast">
          <div className="forcasts" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="57"
              viewBox="0 0 62 57"
              fill="none"
            >
              <path
                d="M14.0581 39.3627C12.212 39.3627 10.3839 38.9991 8.6783 38.2926C6.97269 37.5861 5.42294 36.5506 4.11752 35.2452C1.48112 32.6088 0 29.033 0 25.3046C0 21.5761 1.48112 18.0004 4.11752 15.364C6.75393 12.7276 10.3297 11.2465 14.0581 11.2465C16.8697 4.63918 23.3365 0 30.9278 0C40.5717 0 48.4724 7.47891 49.2034 16.9541L50.6092 16.8697C53.5919 16.8697 56.4525 18.0546 58.5616 20.1637C60.6708 22.2729 61.8557 25.1335 61.8557 28.1162C61.8557 31.099 60.6708 33.9596 58.5616 36.0687C56.4525 38.1778 53.5919 39.3627 50.6092 39.3627H47.7976C47.0519 39.3627 46.3367 39.0665 45.8094 38.5392C45.2822 38.0119 44.9859 37.2968 44.9859 36.5511C44.9859 35.8054 45.2822 35.0902 45.8094 34.563C46.3367 34.0357 47.0519 33.7395 47.7976 33.7395H50.6092C52.1006 33.7395 53.5309 33.147 54.5854 32.0924C55.64 31.0379 56.2324 29.6076 56.2324 28.1162C56.2324 26.6248 55.64 25.1945 54.5854 24.14C53.5309 23.0854 52.1006 22.493 50.6092 22.493H44.9859V19.6813C44.9859 15.9529 43.5048 12.3772 40.8684 9.74077C38.232 7.10436 34.6563 5.62324 30.9278 5.62324C23.8988 5.62324 18.135 10.7404 17.0384 17.4039C16.1106 17.0665 15.0984 16.8697 14.0581 16.8697C11.821 16.8697 9.6756 17.7584 8.09376 19.3402C6.51191 20.9221 5.62324 23.0675 5.62324 25.3046C5.62324 27.5417 6.51191 29.6871 8.09376 31.2689C9.6756 32.8508 11.821 33.7395 14.0581 33.7395H16.8697C17.6154 33.7395 18.3306 34.0357 18.8578 34.563C19.3851 35.0902 19.6814 35.8054 19.6814 36.5511C19.6814 37.2968 19.3851 38.0119 18.8578 38.5392C18.3306 39.0665 17.6154 39.3627 16.8697 39.3627H14.0581ZM30.9278 25.3046H39.3627L33.7395 36.5511H39.3627L28.8191 56.2324L30.9278 42.1743H23.8988L30.9278 25.3046Z"
                fill="white"
              />
            </svg>
            {loading? (  <p style={{paddingTop: '10px'}} >Loading..</p>): wether?(<p style={{paddingTop: '10px'}} >{wether.days[0].conditions}</p>):(<p style={{paddingTop: '10px'}} >{error}</p>)}
            
          </div>
          <div className="line" ></div>
          <div  className="forcasts" >
            {loading? (<h1>Loading...</h1>): wether?(<h1>{wether.days[0].temp}°C</h1>):(<>{error}</>)}
            {/* <h1> 24°C</h1> */}
            <div style={{display: 'flex',
                        paddingTop: '12px'}}     >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 12 21"
                fill="none"
              >
                <path
                  d="M6.89453 13.1158V6.89178C6.89453 6.64831 6.79782 6.41482 6.62566 6.24266C6.4535 6.07051 6.22001 5.97379 5.97654 5.97379C5.73307 5.97379 5.49958 6.07051 5.32742 6.24266C5.15526 6.41482 5.05855 6.64831 5.05855 6.89178V13.1158C4.78106 13.276 4.55033 13.506 4.38928 13.783C4.22824 14.06 4.14249 14.3743 4.14055 14.6947C4.14055 15.1817 4.33399 15.6486 4.6783 15.993C5.02262 16.3373 5.48961 16.5307 5.97654 16.5307C6.46347 16.5307 6.93046 16.3373 7.27478 15.993C7.61909 15.6486 7.81253 15.1817 7.81253 14.6947C7.81059 14.3743 7.72484 14.06 7.5638 13.783C7.40275 13.506 7.17202 13.276 6.89453 13.1158ZM10.1075 11.0227V4.1378C10.1075 3.0422 9.67228 1.99147 8.89757 1.21677C8.12287 0.442062 7.07214 0.00683594 5.97654 0.00683594C4.88094 0.00683594 3.83021 0.442062 3.05551 1.21677C2.2808 1.99147 1.84557 3.0422 1.84557 4.1378V11.0227C1.2111 11.7417 0.77531 12.6139 0.581324 13.553C0.387338 14.492 0.441873 15.4655 0.739533 16.377C1.03719 17.2885 1.56767 18.1066 2.27848 18.7502C2.98929 19.3938 3.85581 19.8407 4.79233 20.0466C5.18137 20.1353 5.57781 20.1875 5.97654 20.2027C7.04199 20.2076 8.086 19.9035 8.98206 19.327C9.87813 18.7506 10.5878 17.9267 11.025 16.9551C11.4622 15.9834 11.6083 14.9059 11.4454 13.8529C11.2826 12.8 10.8178 11.8169 10.1075 11.0227ZM8.27152 17.513C7.54112 18.1606 6.58337 18.4915 5.60896 18.433C4.63455 18.3745 3.7233 17.9312 3.07568 17.2008C2.42806 16.4704 2.09711 15.5127 2.15565 14.5383C2.21418 13.5639 2.6574 12.6526 3.3878 12.005C3.47454 11.92 3.54355 11.8186 3.59082 11.7067C3.63809 11.5948 3.66269 11.4747 3.6632 11.3532V4.1378C3.6632 3.52914 3.90499 2.9454 4.33538 2.51501C4.76578 2.08461 5.34951 1.84282 5.95818 1.84282C6.56685 1.84282 7.15058 2.08461 7.58098 2.51501C8.01137 2.9454 8.25316 3.52914 8.25316 4.1378V11.4267C8.25367 11.5481 8.27827 11.6683 8.32554 11.7802C8.37282 11.892 8.44182 11.9934 8.52856 12.0784C8.90379 12.4409 9.19747 12.8792 9.39003 13.3641C9.58258 13.849 9.6696 14.3694 9.64528 14.8905C9.62096 15.4117 9.48586 15.9217 9.24898 16.3865C9.0121 16.8514 8.67888 17.2604 8.27152 17.5864V17.513Z"
                  fill="white"
                />
              </svg>
              {loading? (<p>Loading...</p>): wether?(<p>{wether.days[0].pressure} mbar pressure</p>):(<>{error}</>)}
              {/* <p>1010 mbar pressure</p> */}
            </div>
          </div>
          <div className="line" ></div>
          <div  className="forcasts">
            <div style={{display: 'flex',
                        }}  >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
              >
                <path
                  d="M0.953303 8.50094C0.700471 8.50094 0.457995 8.4005 0.279216 8.22172C0.100437 8.04294 0 7.80046 0 7.54763C0 7.2948 0.100437 7.05232 0.279216 6.87355C0.457995 6.69477 0.700471 6.59433 0.953303 6.59433H12.3929C12.741 6.59407 13.0823 6.49854 13.3799 6.31811C13.6776 6.13767 13.9201 5.87921 14.0813 5.57074C14.2425 5.26227 14.3162 4.91556 14.2944 4.5682C14.2725 4.22084 14.1561 3.88608 13.9575 3.6002C13.759 3.31433 13.486 3.08825 13.1682 2.94647C12.8503 2.8047 12.4997 2.75263 12.1544 2.79593C11.809 2.83922 11.4821 2.97621 11.2091 3.19206C10.936 3.40791 10.7273 3.69438 10.6055 4.02041C10.5675 4.14426 10.5048 4.25908 10.421 4.35786C10.3372 4.45664 10.2341 4.53731 10.1181 4.59493C10.0021 4.65256 9.87556 4.68594 9.74622 4.69303C9.61688 4.70013 9.48745 4.68079 9.36583 4.63619C9.24421 4.5916 9.13296 4.52269 9.03886 4.43367C8.94476 4.34465 8.8698 4.23738 8.81853 4.11842C8.76727 3.99946 8.74079 3.8713 8.74071 3.74177C8.74062 3.61223 8.76694 3.48404 8.81805 3.36502C9.05976 2.71146 9.47593 2.13663 10.0214 1.70297C10.5668 1.2693 11.2206 0.993386 11.9118 0.905184C12.6031 0.816983 13.3052 0.919869 13.9421 1.20267C14.5789 1.48547 15.1261 1.93737 15.5242 2.50928C15.9223 3.0812 16.156 3.75126 16.2001 4.44669C16.2441 5.14211 16.0968 5.83631 15.774 6.45388C15.4513 7.07145 14.9655 7.58878 14.3694 7.94967C13.7733 8.31056 13.0898 8.50122 12.3929 8.50094H0.953303ZM16.2061 14.2208H2.85991C2.60708 14.2208 2.3646 14.3212 2.18582 14.5C2.00704 14.6787 1.90661 14.9212 1.90661 15.1741C1.90661 15.4269 2.00704 15.6694 2.18582 15.8481C2.3646 16.0269 2.60708 16.1274 2.85991 16.1274H16.2061C16.5542 16.1276 16.8955 16.2231 17.1932 16.4036C17.4908 16.584 17.7333 16.8425 17.8945 17.1509C18.0557 17.4594 18.1294 17.8061 18.1076 18.1535C18.0858 18.5008 17.9693 18.8356 17.7707 19.1215C17.5722 19.4074 17.2992 19.6334 16.9814 19.7752C16.6635 19.917 16.3129 19.9691 15.9676 19.9258C15.6222 19.8825 15.2953 19.7455 15.0223 19.5296C14.7493 19.3138 14.5405 19.0273 14.4187 18.7013C14.3808 18.5774 14.318 18.4626 14.2342 18.3638C14.1504 18.265 14.0473 18.1844 13.9313 18.1268C13.8153 18.0691 13.6888 18.0357 13.5594 18.0287C13.4301 18.0216 13.3007 18.0409 13.179 18.0855C13.0574 18.1301 12.9462 18.199 12.8521 18.288C12.758 18.377 12.683 18.4843 12.6317 18.6033C12.5805 18.7222 12.554 18.8504 12.5539 18.9799C12.5538 19.1095 12.5802 19.2376 12.6313 19.3567C12.873 20.0102 13.2891 20.5851 13.8346 21.0187C14.38 21.4524 15.0338 21.7283 15.725 21.8165C16.4163 21.9047 17.1184 21.8018 17.7553 21.519C18.3921 21.2362 18.9393 20.7843 19.3374 20.2124C19.7355 19.6405 19.9693 18.9704 20.0133 18.275C20.0574 17.5796 19.91 16.8854 19.5873 16.2678C19.2645 15.6502 18.7787 15.1329 18.1826 14.772C17.5865 14.4111 16.903 14.2205 16.2061 14.2208ZM22.8793 4.68772C22.1007 4.68973 21.3414 4.92924 20.7026 5.37427C20.0638 5.81929 19.576 6.44863 19.3044 7.17823C19.2533 7.29725 19.227 7.42545 19.227 7.55498C19.2271 7.68451 19.2536 7.81267 19.3049 7.93163C19.3561 8.05059 19.4311 8.15786 19.5252 8.24688C19.6193 8.3359 19.7305 8.40481 19.8522 8.4494C19.9738 8.494 20.1032 8.51334 20.2325 8.50624C20.3619 8.49915 20.4884 8.46577 20.6044 8.40814C20.7204 8.35052 20.8235 8.26985 20.9073 8.17107C20.9911 8.0723 21.0539 7.95748 21.0918 7.83362C21.2136 7.50759 21.4224 7.22112 21.6954 7.00527C21.9684 6.78942 22.2953 6.65243 22.6407 6.60914C22.986 6.56585 23.3366 6.61791 23.6545 6.75969C23.9724 6.90146 24.2453 7.12754 24.4439 7.41342C24.6424 7.69929 24.7589 8.03405 24.7807 8.38141C24.8025 8.72878 24.7288 9.07548 24.5676 9.38395C24.4064 9.69242 24.1639 9.95088 23.8663 10.1313C23.5686 10.3118 23.2273 10.4073 22.8793 10.4075H1.90661C1.65377 10.4075 1.4113 10.508 1.23252 10.6868C1.05374 10.8655 0.953303 11.108 0.953303 11.3608C0.953303 11.6137 1.05374 11.8562 1.23252 12.0349C1.4113 12.2137 1.65377 12.3141 1.90661 12.3141H22.8793C23.8906 12.3141 24.8605 11.9124 25.5756 11.1973C26.2907 10.4822 26.6925 9.51226 26.6925 8.50094C26.6925 7.48961 26.2907 6.5197 25.5756 5.80459C24.8605 5.08947 23.8906 4.68772 22.8793 4.68772Z"
                  fill="white"
                />
              </svg>
              {loading? (<p>Loading...</p>): wether?(<p>{wether.days[0].windspeed} km/h Wind</p>):(<p>{error}</p>)}
              {/* <p>3.7km/h Wind</p> */}
            </div>
            <div  style={{display: 'flex',
                        paddingTop: '20px',gap: '11px'}} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="22"
                viewBox="0 0 15 22"
                fill="none"
              >
                <path
                  d="M13.7068 11.7558C12.1649 6.6851 7.62706 1.27338 7.39636 0.999956C7.36033 0.960509 7.31648 0.929002 7.2676 0.907445C7.21871 0.885889 7.16588 0.874756 7.11245 0.874756C7.05903 0.874756 7.00619 0.885889 6.95731 0.907445C6.90843 0.929002 6.86457 0.960509 6.82854 0.999956C6.59785 1.27338 2.0592 6.68432 0.516549 11.7558C0.200405 12.7959 0 13.8236 0 14.7875C0 18.7087 3.19095 21.8988 7.11206 21.8988C11.0332 21.8988 14.2226 18.7087 14.2226 14.7875C14.2234 13.8236 14.0229 12.7967 13.7068 11.7558ZM7.11284 21.1562C3.60108 21.1562 0.744141 18.2993 0.744141 14.7883C0.744141 13.8352 0.956199 12.8052 1.29487 11.7566C2.64411 7.58149 6.09761 3.09101 7.11284 1.82876C8.12807 3.09101 11.5816 7.58149 12.9293 11.7566C13.2679 12.806 13.48 13.8352 13.48 14.7883C13.48 18.2993 10.6238 21.1562 7.11284 21.1562Z"
                  fill="white"
                />
                <path
                  d="M3.12649 11.7559C2.73811 12.7424 2.47867 13.7304 2.47867 14.6299C2.47867 15.8589 2.96687 17.0375 3.83588 17.9065C4.70488 18.7755 5.8835 19.2637 7.11246 19.2637C8.34142 19.2637 9.52005 18.7755 10.3891 17.9065C11.2581 17.0375 11.7463 15.8589 11.7463 14.6299C11.7463 13.7304 11.4868 12.7424 11.0984 11.7559H3.12649Z"
                  fill="white"
                />
              </svg>
              {loading? (<p>Loading...</p>): wether?(<p>{wether.days[0].humidity} % Humidity</p>):(<p>{error}</p>)}
              {/* <p>83% Humidity</p> */}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default WetherApi;
