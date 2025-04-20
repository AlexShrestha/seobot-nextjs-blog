import Link from "next/link";

interface ArticleProps {
  article: any;
};

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {article.featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.featuredImage} 
            alt={article.headline} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-blue-600 mb-2">
          <span>
            {new Date(article.publishedAt || article.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          {article.readingTime && (
            <span className="ml-2">{` • ${article.readingTime} min read`}</span>
          )}
        </div>
        
        <Link
          href={`/blog/${article.slug}`}
          className="block mb-3 font-bold text-xl text-gray-800 hover:text-blue-700 transition-colors line-clamp-2"
        >
          {article.headline}
        </Link>
        
        <div className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-4 flex-grow">
          {article.metaDescription}
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {(article.tags || []).slice(0, 3).map((t: any, ix: number) => (
              <Link
                key={ix}
                href={`/blog/tag/${t.slug}`}
                className="bg-blue-50 px-3 py-1 rounded-full text-xs text-blue-700 hover:bg-blue-100 transition-colors"
              >
                {t.title}
              </Link>
            ))}
          </div>
          
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium group"
          >
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
