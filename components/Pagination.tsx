interface PaginationProps {
  slug: string;
  pageNumber: number;
  lastPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ slug, pageNumber, lastPage }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        className={`flex items-center justify-center px-4 py-2 border border-blue-200 rounded-md text-blue-600 hover:bg-blue-50 transition-colors ${pageNumber ? '' : 'pointer-events-none opacity-40 bg-gray-50'}`}
        href={pageNumber ? `${slug}?page=${pageNumber}` : '#'}
        aria-disabled={!pageNumber}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </a>
      
      <div className="px-4 font-medium text-gray-700 bg-blue-50 rounded-md">
        Page {pageNumber + 1} of {lastPage}
      </div>
      
      <a
        className={`flex items-center justify-center px-4 py-2 border border-blue-200 rounded-md text-blue-600 hover:bg-blue-50 transition-colors ${
          pageNumber >= lastPage - 1 ? 'pointer-events-none opacity-40 bg-gray-50' : ''
        }`}
        href={pageNumber >= lastPage - 1 ? '#' : `${slug}?page=${pageNumber + 2}`}
        aria-disabled={pageNumber >= lastPage - 1}
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
