import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticlesList from "../../containers/ArticlesList";
import ArticleDetails from "../../containers/ArticleDetails";
import "./index.scss";

const Home = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const [period, setPeriod] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPopularArticles();
    }, [])

    useEffect(() => {
        fetchPopularArticles();
    }, [period])

    const fetchPopularArticles = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=DehHULYr2LZ3Uu614DQjQwmYxMMLPGEC`);
            setArticles(data.results);
            setSelectedArticle(data.results[0])
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    }

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    }

    return (
        <>
            <header className="mainHeading">
                <h1>The NY Times</h1>
                <label>
                    Period:
                    <select value={period} onChange={handlePeriodChange}>
                        <option value="1">1 Day</option>
                        <option value="7">7 Days</option>
                        <option value="30">30 Days</option>
                    </select>
                </label>
            </header>
            {loading ? "Loading...": <main>
                <ArticlesList articles={articles} handleArticleClick={handleArticleClick} selectedArticle={selectedArticle} />
                <ArticleDetails article={selectedArticle} />
            </main>}
        </>
    )
}

export default Home;