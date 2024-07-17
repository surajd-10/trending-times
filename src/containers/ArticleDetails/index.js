import React from "react";
import "./index.scss";

const ArticleDetails = ({article})=>{
    const {title, abstract, published_date, byline, media, url} = article || {};
    return (
        <div className="details">
            {article? <iframe data-testid="article-iframe" id="articleDetails" width="100%" height="100%" src={url}></iframe>
            // article ? 
            // <><h2>{title}</h2>
            // <p>{abstract}</p>
            // <p>Published Date: {published_date}</p>
            // <p>By: {byline}</p>
            // <div style={{width: "100%"}}>
            //     <img src={media[0]?.["media-metadata"][2].url} alt={media[0]?.caption} />
            // </div>
            // <a href={url} target="_blank" rel="noopener noreferrer">
            //     Read More
            // </a></>
            : "No Data To Display"} 
        </div>
    )
}

export default ArticleDetails;