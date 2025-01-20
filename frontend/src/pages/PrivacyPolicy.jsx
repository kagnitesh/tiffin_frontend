import Header from "@/components/Header";
import React from "react";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow px-4 py-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy for DailyDose
        </h1>
        <p className="mb-6">
          Welcome to DailyDose! At DailyDose, we are committed to protecting
          your privacy. This Privacy Policy outlines how we collect, use, and
          safeguard your personal information when you visit our website or use
          our services.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect personal and non-personal information to enhance your
            experience. Personal information includes your name, email, and
            contact details, while non-personal information includes browsing
            behavior and device data.
          </p>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-8">
            <li>
              Personal Information: When you sign up, subscribe, or contact us,
              we may collect information such as your name, email address, phone
              number, or any other information you provide.
            </li>
            <li>
              Non-Personal Information: This includes browser type, device type,
              IP address, pages visited, and usage patterns collected through
              cookies and similar technologies.
            </li>
            <li>
              User Content: Any content you upload or submit to the site, such
              as comments or reviews.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to provide and improve our services,
            communicate updates, and personalize your experience. We ensure your
            data is handled securely and only for intended purposes. We use your
            information to:
          </p>
          <ul className="list-disc ml-8">
            <li>Provide and maintain our services.</li>
            <li>Personalize your experience on our website.</li>
            <li>
              Communicate with you, including sending newsletters or responding
              to inquiries.
            </li>
            <li>Improve our website, content, and offerings.</li>
            <li>
              Comply with legal obligations or enforce our Terms of Service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            DailyDose uses cookies and similar technologies to improve user
            experience and website performance, understand site traffic and
            visitor behavior, and offer personalized content and advertisements.
            You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            4. How We Share Your Information
          </h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties, except in the following cases:
          </p>
          <ul className="list-disc ml-8">
            <li>
              With trusted service providers who assist us in operating our
              website and conducting business (e.g., hosting services, email
              delivery).
            </li>
            <li>
              To comply with legal requirements, enforce our Terms of Service,
              or protect the rights of DailyDose and others.
            </li>
            <li>
              If required as part of a merger, acquisition, or sale of assets,
              with appropriate safeguards.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. Contact us at dailydosetiffin2022@gmail.com to exercise
            your rights.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
