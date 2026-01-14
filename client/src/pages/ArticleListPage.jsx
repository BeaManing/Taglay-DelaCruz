import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import axios from 'axios'; // we'll use axios to call backend
import '../styles/ArticleList.css';

const ArticleListPage = () => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch articles from backend
  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/articles');
      setArticleData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Delete article
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/articles/${id}`);
      setArticleData(articleData.filter(a => a._id !== id)); // remove from state
    } catch (err) {
      console.error(err);
    }
  };

  // Edit article (simple example: redirect to edit page)
  const handleEdit = (article) => {
    // navigate to edit page or open modal
    console.log('Edit article:', article);
  };

  return (
    <div className="article-page-container">
      <h1 className="page-title">Articles</h1>

      {isLoading ? (
        <p className="loading-text">Loading Articles...</p>
      ) : articleData.length > 0 ? (
        <ArticleList articles={articleData} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        <h2>No Articles Available</h2>
      )}
    </div>
  );
};

export default ArticleListPage;
