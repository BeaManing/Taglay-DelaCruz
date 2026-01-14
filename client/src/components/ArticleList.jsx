import { Link } from 'react-router-dom';
import '../styles/ArticleList.css';
import peepingCat from '../components/catSide.png';

const ArticleList = ({ articles, onDelete, onEdit }) => {
  return (
    <>
      {articles.map(article => (
        <div key={article._id || article.name} className="article-card-wrapper">
          <div className="article-card">
            <Link to={`/articles/${article.name}`} className="article-card-link">
              <div className="article-title">{article.title}</div>
              <div className="article-author">By {article.name}</div>
              <div className="article-content">
                <p>{article.content[0].substring(0, 150)}...</p>
              </div>
            </Link>

            {/* Edit and Delete buttons */}
            <div className="article-card-actions">
              <button className="edit-btn" onClick={() => onEdit(article)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(article._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <img src={peepingCat} alt="Peeping cat" className="peeping-cat" />
    </>
  );
};

export default ArticleList;
