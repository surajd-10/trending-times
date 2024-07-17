import React from "react";
import Article from "../../components/article";
import "./index.scss";

const ArticlesList = ({ articles, handleArticleClick, selectedArticle }) => {
    return (
        <div className="articlesList">
            {
                articles.map((article) => {
                    return (
                        <Article key={article.id} article={article} selectedArticle={selectedArticle} handleArticleClick={handleArticleClick}/>
                    )
                })
            }
        </div>
    )
}

export default ArticlesList;