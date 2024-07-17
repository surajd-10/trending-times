import React from "react";
import "./index.scss";

const Article = ({article, selectedArticle, handleArticleClick}) => {
    const { title, abstract, media } = article;
    return (
        <article className={article.id === selectedArticle.id ? "selected" : ""} onClick={() => handleArticleClick(article)}>
            <h3>{title}</h3>
            <p>{abstract}</p>
            <img src={media[0]?.["media-metadata"][0].url} alt={media[0]?.caption} height={media[0]?.["media-metadata"][0].height} width={media[0]?.["media-metadata"][0].width} />
        </article>
    )
}

export default Article;