import Header from "@/components/Header";
import Footer from "./Footer";

export function RefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow px-4 py-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">
          Return, Refund, and Delivery Policy
        </h1>
        <p className="mb-6">
          At DailyDose, we are committed to providing quality products and
          services. This policy outlines our terms for returns, refunds, and
          delivery to ensure a transparent and satisfying customer experience.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Delivery Policy</h2>
          <h3 className="text-xl font-semibold mb-2">
            1.1 Shipping and Delivery Times
          </h3>
          <p>
             We prepare and deliver fresh tiffins with care to meet your schedule. Orders are processed and delivered within 45-60 miniutes.
          </p>
          <h3 className="text-xl font-semibold mb-2">1.2 Shipping Fees</h3>
          <p>
            Shipping fees are calculated at checkout and depend on the delivery
            location and selected shipping method.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            1.3 Tracking Information
          </h3>
          <p>
            Once your order is shipped, we will provide a tracking number via
            email.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
          <h3 className="text-xl font-semibold mb-2">2.1 Refund Eligibility</h3>
          <p>
            Refunds will be issued for eligible returned items upon receipt and
            inspection. Refunds will be credited to the original payment method
            within 5-10 business days.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            2.2 Non-Refundable Situations
          </h3>
          <p>
            Shipping fees are non-refundable unless the return is due to our
            error.
          </p>
          <h3 className="text-xl font-semibold mb-2">2.3 Partial Refunds</h3>
          <p>
            Partial refunds may be issued for items returned in
            less-than-perfect condition, at our discretion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            3. Damaged or Defective Items
          </h2>
          <p>
            If you receive a damaged or defective item, contact us immediately
            at dailydosetiffin2022@gmail.com with your order number and photos
            of the damage. We will offer a replacement, exchange, or full refund
            based on the situation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Cancellations</h2>
          <h3 className="text-xl font-semibold mb-2">
            4.1 Order Cancellation by Customer
          </h3>
          <p>
            You may cancel your order before it is shipped by contacting us at
            dailydosetiffin2022@gmail.com. If the order has already been
            shipped, it cannot be canceled, but you may return it under our
            Return Policy.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            4.2 Order Cancellation by DailyDose
          </h3>
          <p>
            We reserve the right to cancel orders in the event of pricing
            errors, stock issues, or suspected fraudulent activity.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have questions about our refund policy, please email us at
            dailydosetiffin2022@gmail.com or call us at +91 88497 13343.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
