import React from "react";
import "./index.scss";

const ArticleDetails = ({article})=>{
    const {title, abstract, published_date, byline, media, url} = article || {};
    return (
        <div className="details">
            {/* <iframe width="100%" height="100%" src={article.url}></iframe> */}
            {article ? 
            <><h2>{title}</h2>
            <p>{abstract}</p>
            <p>Published Date: {published_date}</p>
            <p>By: {byline}</p>
            <img src={media[0]?.["media-metadata"][2].url} alt={media[0]?.caption} height={media[0]?.["media-metadata"][2].height} width={media[0]?.["media-metadata"][2].width} />
            <a href={url} target="_blank" rel="noopener noreferrer">
                Read More
            </a></>: "No Data To Display"}
        </div>
    )
}

export default ArticleDetails;