import React from 'react';


const SectionHeader4 = ({ text, color, textColor }) => {
  
  return (
    <div className={`bg-${color} text-center text-${textColor} p-4`}>
      <div className="relative mx-auto md:w-[500px] h-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-${textColor} text-2xl md:text-3xl font-medium leading-none`}>Collaborate</span>
          <span className={`text-${textColor} text-2xl md:text-3xl leading-none mx-4 special-font text-primary`}>With</span> 
          <span className={`text-${textColor} text-2xl md:text-3xl font-medium leading-none`}>Us</span>
        </div>
        
        {/* Decorative lines */}
        <img
          className="absolute top-4 right-0 w-12 md:w-20 h-3"
          alt="Line decoration"
          src={'/Line1Gr.svg'}
        />
        <img
          className="absolute top-4 left-0 w-12 md:w-20 h-3"
          alt="Line decoration"
          src={'/Line2Gr.svg'}
        />
      </div>
      <p className="font-light text-xl text-center md:w-[500px] mt-4 mx-auto text-gray-400">{text}</p>
    </div>
  );
};

export default SectionHeader4;
