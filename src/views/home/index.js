import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticlesList from "../../containers/ArticlesList";
import ArticleDetails from "../../containers/ArticleDetails";
import "./index.scss";

const Home = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchPopularArticles = async () => {
            try {
                const { data } = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=DehHULYr2LZ3Uu614DQjQwmYxMMLPGEC");
                setArticles(data.results);
                setSelectedArticle(data.results[0])
            } catch (error) {
                console.error(error);
            }
        }
        fetchPopularArticles();
    }, [])

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    }

    return (
        <>
            <header className="mainHeading"><h1>The NY Times</h1></header>
            <main>
                <ArticlesList articles={articles} handleArticleClick={handleArticleClick} selectedArticle={selectedArticle} />
                <ArticleDetails article={selectedArticle} />
            </main>
        </>
    )
}

export default Home;