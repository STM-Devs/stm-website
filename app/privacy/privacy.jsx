import React from 'react'

const Privacy = () => {
    return (

        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
            <p className="text-center text-sm text-gray-500">Last updated: 14th April 2026.</p>

            <div className="space-y-8 mt-8">
                <section>
                    <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                    <p>We collect personal information like name, email, and phone number, as well as non-personal data such as your browsing history on our site.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                    <p>Your information is used to provide the services you requested and to improve our user experience.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">3. How We Protect Your Information</h2>
                    <p>We use encryption and other security measures to protect your data. However, no method of data transmission over the Internet is completely secure.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
                    <p>We do not share your personal information with third parties unless required by law or for providing our services.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">5. Cookies</h2>
                    <p>We use cookies to improve your experience on our website. You can adjust your browser settings to control cookie usage.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">6. Your Rights</h2>
                    <p>You have the right to access, update, or delete your personal information at any time. Please contact us for assistance.</p>
                </section>
            </div>
        </div>
    );
}

export default Privacy;