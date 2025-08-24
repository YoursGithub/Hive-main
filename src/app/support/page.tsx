import React from 'react'

function Support() {
  return (
    <>
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">NearHive Support</h1>
        <p className="text-lg">We’re here to help you every step of the way</p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">What is NearHive?</h3>
              <p className="text-gray-600 mt-2">
                NearHive is a platform that helps local stores go online and sell their products easily at affordable prices.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg">How do I contact support?</h3>
              <p className="text-gray-600 mt-2">
                You can reach out to us anytime via email at <span className="font-semibold">support@nearhive.in</span> or by filling the contact form below.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Is NearHive free to use?</h3>
              <p className="text-gray-600 mt-2">
                NearHive offers affordable pricing with no hidden charges. You only pay for what you use.
              </p>
            </div>
          </div>
        </section>

        {/* Support Info */}
        <section className="text-center">
          <h2 className="text-xl font-semibold mb-2">Need quick help?</h2>
          <p className="text-gray-600">📧 support@nearhive.in</p>
          <p className="text-gray-600">📞 +91 98765 43210</p>
        </section>
      </main>
    </div>
    </>
  )
}

export default Support