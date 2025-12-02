import { Link } from 'react-router-dom';
import '../styles/ArticleList.css';
import peepingCat from '../components/catSide.png';

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <Link key={article.name} to={`/articles/${article.name}`} className="article-card-link">
          <div className="article-card">
            <div className="article-title">{article.title}</div>
            <div className="article-author">By {article.name}</div>
            <div className="article-content">
              <p>{article.content[0].substring(0, 150)}...</p>
            </div>
          </div>
        </Link>
      ))}

      <img src={peepingCat} alt="Peeping cat" className="peeping-cat" />
    </>
  );
};

export default ArticleList;
