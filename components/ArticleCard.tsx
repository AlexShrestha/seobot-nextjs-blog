import Link from "next/link";

interface ArticleProps {
  article: any;
};

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <li
      key={article.id}
      className="border-b border-blue-100 py-8 hover:bg-blue-50 rounded-lg px-4 transition-all duration-200"
    >
      <div className="flex flex-wrap gap-2 items-center w-full text-sm text-blue-600">
        <span>
          Published{" "}
          {new Date(
            article.publishedAt || article.createdAt
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        {article.readingTime ? (
          <span>{` • ${article.readingTime}`} min read</span>
        ) : null}
      </div>
      <Link
        href={`/blog/${article.slug}`}
        className="block mt-2 mb-3 font-semibold text-xl text-slate-800 hover:text-blue-700 transition-colors"
      >
        {article.headline}
      </Link>
      <div className="text-slate-600 text-sm sm:text-base line-clamp-2 line mb-4 block">
        {article.metaDescription}
      </div>
      <div className="flex flex-wrap justify-between gap-3 items-center">
        <div className="flex flex-wrap gap-2">
          {(article.tags || []).splice(0, 3).map((t: any, ix: number) => (
            <a
              key={ix}
              href={`/blog/tag/${t.slug}`}
              className="bg-blue-100 px-3 py-1 rounded-full text-xs text-blue-700 hover:bg-blue-200 transition-colors"
            >
              {t.title}
            </a>
          ))}
        </div>
        <Link
          href={`/blog/${article.slug}`}
          className="flex items-center text-sm text-blue-600 hover:text-blue-500 font-medium bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
        >
          Read More →
        </Link>
      </div>
    </li>
  );
};

export default ArticleCard;
