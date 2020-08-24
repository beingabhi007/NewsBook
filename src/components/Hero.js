import React, {useEffect, useState} from "react"  
import Axios from "axios"
import SingleNews from "../components/SingleNews";
import Loader from './Loader';
import Navbar from "./Navbar";

const Hero = () => {

 const [myNews,setMyNews] = useState([]);    
 const [loader,setLoader] = useState(true) 


useEffect(() => {

 const fetchData = async () => {
  const { data } = await Axios.get(`
  https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8GGV7oaG1gvN8oQBk538rND9xfltyUWP
  `);
  setMyNews(data.results);
  setLoader(false)
  
 }
 fetchData();
},[]);
    
if(loader){
    return <Loader />
}
else{
    return (
        <> 
       <Navbar/>
        { myNews.map( (news) => 
        (
 
     
 
         <SingleNews 
         title={news.title} 
         heroUrl={ (news.multimedia[0]?.url) ? (news.multimedia[0]?.url) : "https://i.pinimg.com/originals/b9/85/a3/b985a3573f0d87d8a7fbb5ad6be3e372.jpg" } 
         caption={news.multimedia[0]?.caption}
         publishDetail={news.published_date}
         abstract={news.abstract}
         live={news.short_url}
        /> 
 
        ))}
 
         </>
    )
}
} 


export default Hero;