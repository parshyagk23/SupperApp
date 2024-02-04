
import { useState,useEffect } from "react";
import axios from "axios";
import newsimage from '../assets/newsimg.png'
const NewsApi = () => {

  const [news, setNews] = useState(null);
  const [error,setErr]= useState(null);
  const [loading, setLoading] = useState(false)
  const NewsCategoryselection =()=>{

    const categoryArr = ['general','business','entertainment','health','seience','sports','technology'];
    let categoryIndex = Math.floor(Math.random()* categoryArr.length)
    return categoryArr[categoryIndex];
  }

  const NewsApiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const NewCategory =NewsCategoryselection();
       
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${NewCategory}&apiKey=${NewsApiKey}`);
        // Check if response.data is not null before accessing results
          
          const index =Math.floor(Math.random()*38)
          setNews(response.data.articles[index])
      } catch (error) {
        setErr(error);
      }finally{
        setLoading(false)
      }
    };
  fetchData()
   
  }, []);

  const newsimgs = loading?newsimage:news?news.urlToImage :newsimage;
  
 
  return (
    <div className="newsApi" style={{ gridArea:'c5' }}>
     
      <div className="newImg"    >
        <img src= {newsimgs} alt=""  />
        <div className="newTitle">
         
          {loading?(<h1>Loading</h1>):news?(<h1> {news.title} </h1>):(<h1>{error}</h1>)}
         
          {loading?(<p>Loading</p>):news?(<p> {new Date(news.publishedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} </p>):(<p>{error}</p>)}
        </div>
      </div>
      <div  className="newdesc" >
      {loading?(<p>Loading</p>):news?(<p> {news.description} </p>):(<p>{error}</p>)}
       
      </div>
    </div>
  );
};

export default NewsApi;
