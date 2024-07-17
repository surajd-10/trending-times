import React from "react";
import "./index.scss";

const ArticleDetails = ({article})=>{
    return (
        <div className="details">
            {/* <iframe width="100%" height="100%" src={article.url}></iframe> */}
            {article ? 
            <><h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <p>Published Date: {article.published_date}</p>
            <p>By: {article.byline}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
            </a></>: "No Data To Display"}
        </div>
    )
}

export default ArticleDetails;