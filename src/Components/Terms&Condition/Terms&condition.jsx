import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">Terms and Conditions</h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                You accept these terms and conditions by using MoneyView ("the website" or "the service") and by accessing it.

            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Use of the Service</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Users can use MoneyView's platform to get paid to watch advertisements. By using the service, you consent to abiding by all relevant laws and regulations and using it for legitimate purposes.

            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">User Accounts</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                It can be necessary for you to register in order to use some of the service's features. You are accountable for all activities connected to your account and for keeping the information about it confidential.

            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Privacy</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                As outlined in our privacy policy, we gather and use personal data. You authorize the collection and use of your personal information as described in the terms of service by using the
                <Link className="text-red-500 text-xl" to="/PrivacyPolicy">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Intellectual Property</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Intellectual property laws protect all of the materials and content on the website, including but not limited to text, photos, logos, and software. Without our express written permission, you are not allowed to copy, distribute, or make derivative works.

            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to Terms and Conditions</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                MoneyView reserves the right to modify these terms and conditions at any time. Any updates will be posted here on this page, where you will be informed of any changes.

            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Please get in touch with us at if you have any questions regarding these terms and conditions.
                <Link className="text-red-500 text-xl" to="/contact">Contact</Link>.
            </p>
        </div>
    );
}

export default TermsAndConditions;
