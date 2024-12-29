import React, { useState } from "react";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    companyName: "",
    contactType: "query",
    details: "",
    rating: 0,
  });

  const [loading, setLoading] = useState(false); // Loading state for the submit button
  const [formSubmitted, setFormSubmitted] = useState(false); // To track form submission
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const [errors, setErrors] = useState({
    mobile: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newErrors = { ...errors };

    if (name === "mobile") {
      // Validate mobile number: check if it's numeric and exactly 10 digits
      if (!/^\d{10}$/.test(value)) {
        newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      } else {
        newErrors.mobile = "";
      }
    }

    setErrors(newErrors);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const StarRating = ({ rating, setRating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= rating
                  ? "text-yellow-500 text-3xl"
                  : "text-gray-400 text-3xl"
              }
              onClick={() => setRating(index)}
              aria-label={`Rate ${index} stars`}
            >
              <span className="text-lg leading-none">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if there are any validation errors before proceeding
    if (Object.values(errors).some((error) => error !== "")) {
      return; // If there are errors, prevent submission
    }

    setLoading(true); // Start loading
    setErrorMessage(""); // Reset error message on form submit

    // Prepare the request payload
    const payload = {
      json: {
        name: formData.fullName,
        email: formData.email,
        phone_no: formData.mobile,
        company_name: formData.companyName,
        message: formData.details,
        email_type: formData.contactType,
        // Include rating only if contactType is feedback
        ...(formData.contactType === "feedback" && { rating: formData.rating }),
      },
      password: "Zikasha@123", // Set your API password here
    };

    try {
      // Send the POST request to the backend API
      const response = await axios.post(
        url + '/api/send-email', // Replace with your API endpoint
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Show success message
      console.log("Email sent successfully", response.data);
      setFormSubmitted(true); // Mark form as submitted
    } catch (error) {
      // Handle any error
      console.error("Error sending email", error);
      setErrorMessage(
        "Email sending failed. Please try again or send an email manually to our support email : dailydosetiffin2022@gmail.com."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-xl mx-4 md:mx-auto p-4 bg-white my-16 border shadow-lg rounded-2xl ">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mo. Number
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-2">{errors.mobile}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactType"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Type
            </label>
            <select
              name="contactType"
              id="contactType"
              value={formData.contactType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="query">Query</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          {formData.contactType === "feedback" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <StarRating
                rating={formData.rating}
                setRating={(rating) => setFormData({ ...formData, rating })}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details
            </label>
            <textarea
              name="details"
              id="details"
              rows="4"
              required
              value={formData.details}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading || Object.values(errors).some((error) => error !== "")} // Disable if loading or errors exist
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-600">
            Thank you for contacting us!
          </h3>
          <p className="text-gray-600">We will get back to you soon.</p>
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 text-center text-red-600">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
