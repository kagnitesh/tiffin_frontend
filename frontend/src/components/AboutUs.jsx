import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-16">
      <div className="flex-1 text-center items-center">
        <img
          src="about_us.png"
          alt="Special Tiffin"
          className="inline-block md:h-96 md:w-96 w-full"
        />
      </div>
      <div className="flex-1 relative">
        <h1 className=" text-3xl md:text-4xl text-gray-800 mb-4  md:w-2/3">
          About
          <span className="special-font ms-3 text-primary">us</span>
          <img
            className="absolute top-4 left-36 w-20 h-3"
            alt="Line decoration"
            src={"/Line1Gr.svg"}
          />
          {/* us */}
        </h1>
        <p className=" text-sm md:text-md text-gray-600 mb-6">
        We are a team of passionate food lovers who are committed to providing our customers with the best possible tiffin service experience. We use only the freshest ingredients and cook our food with love and care. We also offer a wide variety of dishes to choose from, so you can find something to satisfy your cravings.
        <br /><br />
        We are based in Ahmedabad, Gujarat. We offer a variety of subscription plans to suit your needs, and we also offer one-time orders.
        <br /><br />
        We are committed to providing our customers with excellent service. We are always available to answer your questions and help you with your order.
        </p>
        <div className="flex gap-4 mb-6">
          <button className="btn-order">Get Started</button>
        </div>
      </div>
    </div>
  );
}
