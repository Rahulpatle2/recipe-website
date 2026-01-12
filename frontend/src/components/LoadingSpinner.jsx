import React from 'react';

const LoadingSpinner = () => {
  return (
    // Outer container to center the spinner vertically and horizontally
    <div className="flex items-center justify-center min-h-[60vh]">
        
      {/* The Spinner itself */}
      <div 
        className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin"
        // This creates the colored "spinning" part.
        // border-t-green-500 sets the top border to green.
        // The other borders are gray-200.
        style={{ borderTopColor: '#22c55e' }} // Using hex for Tailwind green-500
      ></div>
      
    </div>
  );
};

export default LoadingSpinner;