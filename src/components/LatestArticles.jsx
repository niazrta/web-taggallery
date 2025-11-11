import React from 'react';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const LatestArticles = ({ articles, currentArticleId }) => {
  const filteredArticles = articles.filter(article => article.id !== currentArticleId).slice(0, 4);

  return (
    <div className="w-full mt-12">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Artikel Terbaru Lainnya</h3>
      <div className="space-y-4">
        {filteredArticles.map(article => (
          <Link 
            to={`/artikel/${article.slug}`} 
            key={article.id} 
            className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <img 
              src={article.banner_url || `${apiUrl}/storage/${article.banner}`}
              alt={article.title}
              className="w-36 h-24 object-cover rounded-md flex-shrink-0"
            />
            <h4 className="font-semibold text-white text-base md:text-lg">{article.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;