import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">Terms and Conditions</h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                By accessing and using MoneyView ("the website" or "the service"), you agree to comply with and be bound by the following terms and conditions:
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Use of the Service</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                MoneyView provides a platform for users to earn money by watching ads. You agree to use the service for lawful purposes and in compliance with all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">User Accounts</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                To access certain features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and are liable for all activities associated with your account.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Privacy</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                We collect and process personal information as described in our Privacy Policy. By using the service, you consent to the collection and use of your personal information as outlined in the <Link className="text-red-500 text-xl" to="/PrivacyPolicy">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Intellectual Property</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                All content and materials on the website, including but not limited to text, images, logos, and software, are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to Terms and Conditions</h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                MoneyView may update these terms and conditions from time to time. You will be notified of any changes by posting the new terms and conditions on this page.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
                If you have any questions about these terms and conditions, please contact us at <Link className="text-red-500 text-xl" to="/contact">Contact</Link>.
            </p>
        </div>
    );
}

export default TermsAndConditions;
