import Header from "@/components/Header";
import React from "react";
import Footer from "./Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow px-4 py-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By using DailyDose, you confirm that you are at least 18 years old
            (or the legal age of majority in your jurisdiction) or have the
            permission of a parent or legal guardian to use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Any changes will be posted on this page with an updated
            effective date. Continued use of the website after modifications
            constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Use of the Website</h2>
          <p>
            You agree to use DailyDose only for lawful purposes and in
            compliance with these Terms. You are prohibited from:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Posting or sharing any unlawful, defamatory, obscene, or harmful
              content.
            </li>
            <li>
              Attempting to gain unauthorized access to our systems or interfere
              with the functionality of the website.
            </li>
            <li>
              Engaging in any activity that disrupts or harms the experience of
              other users.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
          <p>If you create an account on DailyDose:</p>
          <ul className="list-disc pl-6">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You must provide accurate and complete information during
              registration.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            5. Intellectual Property
          </h2>
          <p>
            All content on DailyDose, including text, images, graphics, logos,
            and software, is the property of DailyDose or its licensors and is
            protected by intellectual property laws. You may not reproduce,
            distribute, or use any content without prior written consent from
            DailyDose.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
          <p>
            By submitting or posting content to DailyDose, you grant us a
            non-exclusive, royalty-free, perpetual, and worldwide license to
            use, reproduce, modify, and distribute your content. You are
            responsible for ensuring that your content does not violate the
            rights of others.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            7. Third-Party Links and Services
          </h2>
          <p>
            DailyDose may contain links to third-party websites or services. We
            are not responsible for the accuracy, content, or practices of these
            external sites. Your use of third-party websites is at your own risk
            and subject to their terms and conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            8. Disclaimer of Warranties
          </h2>
          <p>
            DailyDose is provided "as is" and "as available," without any
            warranties of any kind, express or implied. We do not guarantee the
            accuracy, completeness, or reliability of any content on the
            website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            9. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, DailyDose and its
            affiliates, employees, and agents are not liable for any indirect,
            incidental, or consequential damages arising from your use of the
            website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold DailyDose harmless from any claims,
            damages, or expenses arising out of your use of the website or your
            violation of these Terms and Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to
            DailyDose at any time, without notice, for any violation of these
            Terms or any other reason.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of India. Any disputes shall be resolved in
            the courts of India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:
          </p>
          <address>
            <p>Email: dailydosetiffin2022@gmail.com</p>
            <p>Phone: +91 88497 13343</p>
          </address>
        </section>
      </main>

      <Footer />
    </div>
  );
}
