import React from "react";

export default function AboutUs() {
  return (
    <>
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

          <div className="prose">
            <p>
              We are a team of passionate food lovers who are committed to providing our customers with the best possible tiffin service experience. We use only the freshest ingredients and cook our food with love and care. We also offer a wide variety of dishes to choose from, so you can find something to satisfy your cravings.
              <br /><br />
              We are based in Ahmedabad, Gujarat. We offer a variety of subscription plans to suit your needs, and we also offer one-time orders.
              <br /><br />
              We are committed to providing our customers with excellent service. We are always available to answer your questions and help you with your order.
            </p>
          </div>


          <div className="flex gap-4 mt-4">
            <a href="/menu" className="btn-order">Get Started</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 pt-8 pb-16 gap-4">
        <div className="prose flex-1">
          <h3>Our Mission</h3>
          <p>Our mission is to provide our customers with delicious, healthy, and affordable tiffin services. We want to make it easy for people to eat healthy meals on the go.</p>
            
          <h3>Our Values</h3>
          <p>
              We are committed to the following values:<br />
              Quality: We use only the freshest ingredients and cook our food with care.
              Service: We provide excellent customer service.
              Affordability: We offer our services at a competitive price.
              Sustainability: We are committed to sustainable practices.
          </p>
        </div>
        <div className="prose flex-1">
          <h3>Our Team</h3>
          <p>Our team is made up of experienced chefs and customer service representatives. We are passionate about our work and we are committed to providing our customers with the best possible experience.</p>
          
          <h3>Contact Us</h3>
          <p>
            We would love to hear from you! Please contact us if you have any questions or would like to place an order.
          </p>
          <p>
            You can reach us at:<br />
            Phone: <a href="tel:+91 9876543210">+91 9876543210</a>
          </p>
        </div>
      </div>

    </>
  );
}
