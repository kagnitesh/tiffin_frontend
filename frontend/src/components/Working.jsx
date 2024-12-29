import React from "react";
import SectionHeader2 from "./SectionHeader2";
import { SectionCard } from "./SectionCard";
import SectionHeader3 from "./SectionHeader3";
import TestimonialSlider from "./TestimonialSlider";

export default function Working() {
  const text =
    "Open your phone, book your tiffin, and we'll deliver it to you on time—fresh, healthy, and hassle-free!";
  const client =
    "In addition to a wide variety of products, customers can utilize a plethora of in-house services.";

    const testimonials = [
        {
            name: "Aayushyamaan shah Rajkot",
            role: "Customer",
            image: "testimonials/aayushyamaan-shah.png",
            quote: "I’ve been enjoying their tiffin service for months, and it’s the best decision I’ve made! The meals are fresh, balanced, and always delivered on time. It feels like home-cooked food every day.",
            rate:5
        },
        {
            name: "Hem bhatt surat Gujarat",
            role: "Customer",
            image: "testimonials/hem-bhatt.png",
            quote: "As someone with a hectic work routine, this tiffin service has been a lifesaver. No more worrying about lunch – the meals are delicious and always ready when I need them.",
            rate:4.5
        },
        {
            name: "Hitesh Kumar  Himachal Pradesh",
            role: "Customer",
            image: "testimonials/hiteshkumar-himachal.png",
            quote: "I love the variety and quality of the meals. It’s like having a home-cooked meal at the office every day. The service is super reliable, and I highly recommend it!",
            rate:5
        },
        // More testimonials
    ];
    
  return (
    <>
      <div className=" bg-white">
        <div className="container mx-auto px-4 py-8 mt-16">
          <SectionHeader2 text={text} color={"white"} textColor={"#111111"} />
        </div>
        <div className="flex flex-col px-4 my-8 md:flex-row justify-center gap-8 items-center">
          <SectionCard
            svgPath="SVG1.svg" // Provide the actual path
            title="Choose Option"
            content="Choose from our menu and place your order easily."
          />
          <SectionCard
            svgPath="SVG2.svg" // Provide the actual path
            title="Order In Process"
            content="Your selected tiffin is being packed and prepared for delivery."
          />
          <SectionCard
            svgPath="SVG3.svg" // Provide the actual path
            title="Delivery"
            content="Your tiffin will be delivered on time, fresh and ready to enjoy."
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 my-16">
        <SectionHeader3 text={client} color={"white"} textColor={"#111111"} />

        <TestimonialSlider testimonials={testimonials} />
      </div>
      <div className="px-4 md:px-0"></div>
    </>
  );
}
