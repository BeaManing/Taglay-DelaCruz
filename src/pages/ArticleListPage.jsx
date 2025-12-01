import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import articles from '../../article-content';
import '../styles/ArticleList.css';

const ArticleListPage = () => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticleData(articles); // load articles
      setIsLoading(false);
    }, 800); // simulate delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="article-page-container">
      <h1 className="page-title">Articles</h1>

      {isLoading ? (
        <p className="loading-text">Loading Articles...</p>
      ) : articleData.length > 0 ? (
        <ArticleList articles={articleData} />
      ) : (
        <h2>No Articles Available</h2>
      )}
    </div>
  );
};

export default ArticleListPage;
