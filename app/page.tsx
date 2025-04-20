export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navigation */}
      <header className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-blue-600 font-bold text-2xl">NeverMissHealth</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#why-it-matters" className="text-slate-700 hover:text-blue-600 transition-colors">Why It Matters</a>
          <a href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="/faq" className="text-slate-700 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
        <a href="/blog" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          Early Detection Saves Lives
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-800 mb-6 max-w-4xl">
          What if one email could save your life?
        </h1>
        
        <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl">
          NeverMissHealth reminds you of cancer checkups — before it&apos;s too late.
        </p>
        
        <div className="flex flex-col space-y-4 mb-12 max-w-md w-full">
          <div className="flex items-start space-x-3">
            <div className="text-green-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">We make it automatic</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-green-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Personalized reminders</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-green-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Based on trusted medical guidelines</p>
          </div>
        </div>
        
        <a href="/blog" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium flex items-center">
          See Your Risk Timeline
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        
        <p className="text-sm text-slate-500 mt-4">Normally $500. One-time payment. No app needed.</p>
      </section>

      {/* Data Sources Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-slate-500 mb-4">Built on data from:</p>
        <div className="flex flex-wrap justify-center gap-8">
          <span className="text-slate-700">American Cancer Society</span>
          <span className="text-slate-700">WHO</span>
          <span className="text-slate-700">NCCN</span>
          <span className="text-slate-700">USPSTF</span>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
        <a href="#how-it-works" className="text-blue-600 flex flex-col items-center">
          <span>Learn how it works</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Blog Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-white rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Health & Wellness Resources</h2>
        <div className="text-center mb-8">
          <a href="/blog" className="bg-blue-100 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-200 transition-colors inline-block">
            Visit Our Blog
          </a>
        </div>
      </section>
    </main>
  );
}
