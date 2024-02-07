
import { useState,useEffect } from "react";
import axios from "axios";
import newsimage from '../../assets/newsimg.png'
const FetchNewsApi = () => {

  const [news, setNews] = useState(null);
  const [error,setErr]= useState(null);
  const [loading, setLoading] = useState(false)
  
  const NewsCategoryselection =()=>{

    const categoryArr = ['business','crime','education','entertainment','sports'];
    let categoryIndex = Math.floor(Math.random()* categoryArr.length)
    return categoryArr[categoryIndex];
  }

  const NewsApiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY
  
  useEffect(() => {
 
  fetchapi();
   
  }, []);

  const fetchapi=()=>{
    setLoading(true)
    const NewCategory =NewsCategoryselection();
    
    var url =`https://newsdata.io/api/1/news?apikey=${NewsApiKey}&country=in&language=en&category=${NewCategory}`
   
    
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then((data)=>{
            const index =Math.floor(Math.random()*data.results.length)
            
          setNews(data.results[index])
        }).catch((e)=>{setErr(e)})
        .finally(()=>{setLoading(false)});
  }

  const newsimgs = loading?newsimage:news?news.image_url :newsimage;
 
  return (
    <div className="newsApi" style={{ gridArea:'c5' }}>
     
      <div className="newImg"    >
        <img src= {newsimgs} alt=""  />
        <div className="newTitle">
         
          {loading?(<h1>Loading</h1>):news?(<p> {news.title} </p>):(<h1>{error}</h1>)}
         
          {loading?(<p>Loading</p>):news?(<p> {new Date(news.pubDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} </p>):(<p>{error}</p>)}
        </div>
      </div>
      <div  className="newdesc" >
      {loading?(<p>Loading</p>):news?(<p> {news.description} </p>):(<p>{error}</p>)}
       
      </div>
    </div>
  );
};

export default FetchNewsApi;
