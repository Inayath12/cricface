import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
          <h1 className="text-4xl font-display font-black text-zinc-900 mb-8">REFUND POLICY</h1>
          
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Final Sale Policy</h2>
              <p>
                Due to the premium nature of professional sports equipment and the specific craftsmanship 
                involved in each Cricface bat, all sales are considered final. We do not offer refunds 
                for change of mind or personal preference once a product has been dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Replacements</h2>
              <p>
                Defective or damaged items are eligible for replacement within 7 days of delivery. 
                To be eligible, you must provide:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proof of purchase</li>
                <li>Clear photographs or videos of the defect/damage</li>
                <li>The item must be in its original, unused condition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Process</h2>
              <p>
                If you encounter any issues with your order, please contact us immediately via WhatsApp 
                at +91 9705646297. Our team will review your case and guide you through the replacement 
                process if applicable.
              </p>
            </section>

            <section className="pt-8 border-t border-zinc-100">
              <p className="text-sm italic">
                Cricface reserves the right to refuse a replacement if the product shows signs of 
                misuse, improper knocking-in, or damage caused by the user.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
