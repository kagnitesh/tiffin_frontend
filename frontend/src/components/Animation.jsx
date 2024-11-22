import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react'

export default function Animation() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
      // Fetch the JSON file from the public folder
      fetch("/Loader.json")
        .then((response) => response.json())
        .then((data) => setAnimationData(data))
        .catch((error) => console.error("Error loading animation:", error));
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen bg-transparent">
        {animationData ? (
          <Lottie 
            animationData={animationData} 
            loop={true} // Set to true for looping
            style={{ width: 300, height: 300 }} // Adjust size as needed
          />
        ) : (
          <p>Loading...</p> // Display a loading message or spinner while fetching
        )}
      </div>
    );
}
