import React from "react" 


const SingleNews = ({title, heroUrl, caption="",publishDetail,abstract,live}) => {
    return(
        <> 
        <br/><br/>
        <div className="row" style={{margin: "0"}}>
        <div className="col-lg-10 mx-auto">
      <p className="text-center" id="text1">{title}</p> 
      <p id="text2">{abstract}</p>
      </div></div>
      <br/> 

      <div className="row" style={{margin: "0"}} >
      <div className="col-lg-8 mx-auto" >
      <img src={heroUrl}  
      width="100%" 
      height="60%"
      alt="heroimage"/> 
      <span>{caption}</span> <br/>
      <span>Published at {publishDetail}</span>
      <span className="float-right" ><a href={live}>Read more...</a></span>
      </div>  
      </div>
     

        </>
    )
} 

export default SingleNews;