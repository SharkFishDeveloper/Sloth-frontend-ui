const Nothing = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto text-center border border-gray-200">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-3-3v6"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Content Available</h2>
          <p className="text-gray-600">It looks like there is nothing here right now. Check back later!</p>
        </div>
      </div>
    );
  };
  
  export default Nothing;
  