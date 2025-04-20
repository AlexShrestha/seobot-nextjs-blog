import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { type Metadata } from 'next';
import { BlogClient } from 'seobot';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Never Miss Health Blog';
  const description = 'Stay informed about preventive healthcare, cancer screenings, and wellness tips to take control of your health journey.';
  return {
    title,
    description,
    metadataBase: new URL('https://nevermisshealth.com'),
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: 'https://nevermisshealth.com/blog',
    },
    twitter: {
      title,
      description,
    },
  };
}

async function getPosts(page: number) {
  const key = '04ad1a7e-507a-463a-8466-6ade6ce0adc8'; // Using the provided API key
  const client = new BlogClient(key);
  return client.getArticles(page, 10);
}

export const fetchCache = 'force-no-store';

export default async function Blog({ searchParams: { page } }: { searchParams: { page: number } }) {
  const pageNumber = Math.max((page || 0) - 1, 0);
  const { total, articles } = await getPosts(pageNumber);
  const posts = articles || [];
  const lastPage = Math.ceil(total / 10);

  return (
    <section className="max-w-3xl my-8 lg:mt-10 mx-auto px-4 md:px-8 text-slate-800 tracking-normal">
      <div className="mb-8">
        <h1 className="text-4xl my-4 font-black text-teal-600">Health & Wellness Blog</h1>
        <p className="text-slate-600">Stay informed about preventive healthcare, cancer screenings, and wellness tips to take control of your health journey.</p>
      </div>
      <ul>
        {posts.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
      {lastPage > 1 && <Pagination slug="/blog" pageNumber={pageNumber} lastPage={lastPage} />}
    </section>
  );
}
