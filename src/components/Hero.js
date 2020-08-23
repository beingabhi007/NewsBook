import React, {useEffect, useState} from "react"  
import Axios from "axios"
import SingleNews from "../components/SingleNews";
import Loader from './Loader';

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
       
        { myNews.map( (news) => 
        (
 
     
 
         <SingleNews 
         title={news.title} 
         heroUrl={news.multimedia[0]?.url} 
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