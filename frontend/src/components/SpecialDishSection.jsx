import React from "react";
import ThaliCard from "./ThaliCard";
import SectionHeader from "./SectionHeader";

const SpecialDishSection = ( {className} ) => {
  const dasheraThaliPic = "/thaliPics/dasheraThaliPic.png"; 
  const GaneshChaturthiPic = "/thaliPics/GaneshChaturthiPic.png";
  const makarsankrantiPic = "/thaliPics/makarsankrantiPic.png";
  const navaratriPic = "/thaliPics/navaratriPic.png";

  const description =
    "The state-of-the-art facility has automated machinery, is installed with rust-free pipelines and faucets and uses only RO treated water.";

  return (    
      <div className={className}>
        <div className="pb-28 bg-primary pt-20">
          <div className="container mx-auto px-4 py-8">
            <SectionHeader text={description} color={'primary'} textColor={'white'} />
          </div>
        </div>
        <div className="px-4 md:px-0">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 xl:gap-10 overflow-x-auto md:overflow-visible mx-0 md:mx-16 lg:mx-16 xl:mx-56 -mt-24">
            <div className="">
              <ThaliCard
                title="Dashera"
                price="₹ 104"
                imageSrc={dasheraThaliPic}
                ratingCount={4}
              />
            </div>
            <div className="">
              <ThaliCard
                title="Chaturthi"
                price="₹ 104"
                imageSrc={GaneshChaturthiPic}
                ratingCount={3}
              />
            </div>
            <div className="">
              <ThaliCard
                title="Uttarayan"
                price="₹ 104"
                imageSrc={makarsankrantiPic}
                ratingCount={5}
              />
            </div>
            <div className="">
              <ThaliCard
                title="Navaratri"
                price="₹ 104"
                imageSrc={navaratriPic}
                ratingCount={5}
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default SpecialDishSection;
