import React from 'react'

export default function About() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className='w-full'>
                <img 
                src="https://github.com/deepcs2004/my-image/blob/main/%E2%80%94Pngtree%E2%80%94money%20background_200823.jpg?raw=true" 
                alt="Image" 
                
                />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 mb-8">
                Welcome to <strong className="font-bold">MoneyView</strong>, where you can turn your time into earnings by simply watching ads. Our mission is to provide a user-friendly platform for individuals looking to make money while enjoying advertisements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
                We started this platform with a simple idea: why not get rewarded for the time you spend viewing ads? With the rise of online advertising, we saw an opportunity to create a win-win situation for both users and advertisers. By watching ads on our platform, you not only earn money but also help businesses promote their products and services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8">
                Earning money through <strong className="font-bold">MoneyView</strong> is easy. Simply sign up, log in, and start watching ads. You'll accumulate earnings with each ad view. We offer a seamless and secure payment process to ensure you receive your earnings on time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-4">
                We value your feedback and questions. If you have any inquiries or suggestions, please don't hesitate to get in touch with our support team at <a className="text-blue-500 hover:underline" href="mailto:support@moneyview.com">support@moneyview.cloud</a>.
            </p>
        </div>);
}