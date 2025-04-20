import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { type Metadata } from 'next';
import { BlogClient } from 'seobot';
import Link from 'next/link';
import './blog.css';

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
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="http://nevermisshealth.com/" className="text-2xl font-bold text-blue-600 flex items-center">
            <span className="mr-2">NeverMissHealth</span>
          </a>
          <nav className="flex space-x-6">
            <a href="http://nevermisshealth.com/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Health & Wellness Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay informed about preventive healthcare, cancer screenings, and wellness tips to take control of your health journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((article: any) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {lastPage > 1 && (
          <div className="mt-12">
            <Pagination slug="/blog" pageNumber={pageNumber} lastPage={lastPage} />
          </div>
        )}
      </div>

      <footer className="bg-blue-700 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NeverMissHealth</h3>
              <p className="text-blue-100">Early detection saves lives. Get personalized cancer screening reminders based on trusted medical guidelines.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="http://nevermisshealth.com/" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
                <li><Link href="/blog" className="text-blue-100 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Data Sources</h3>
              <ul className="space-y-2 text-blue-100">
                <li>American Cancer Society</li>
                <li>World Health Organization</li>
                <li>NCCN Guidelines</li>
                <li>USPSTF Recommendations</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-600 text-center text-blue-100">
            <p>&copy; {new Date().getFullYear()} NeverMissHealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
