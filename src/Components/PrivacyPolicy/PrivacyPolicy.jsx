import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">Privacy Policy</h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                This Privacy Policy describes how MoneyView ("we," "our," or "us") collects, uses, and shares your personal information when you use our website and services. By using our website, you consent to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                MoneyView may collect the following types of information:
            </p>

            <ul className="list-disc pl-6">
                <li>Personal Information: This may include your name, email address, and other contact information provided by you when using our services.</li>
                <li>Usage Data: We may collect information about your interaction with our website, such as the pages you visit, the time and date of your visits, and your device information.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Use Your Information</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                We may use your personal information for the following purposes:
            </p>

            <ul className="list-disc pl-6">
                <li>Provide, maintain, and improve our services.</li>
                <li>Send you updates, newsletters, and promotional materials.</li>
                <li>Monitor and analyze usage patterns to enhance the user experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Sharing Your Information</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                MoneyView never share your personal information with any third-party. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Security</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                We take reasonable measures to protect your information, but please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to this Privacy Policy</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Contact us at [Your Contact Information] if you have any questions about this Privacy Policy.
            </p>
        </div>
    );
}

export default PrivacyPolicy;
