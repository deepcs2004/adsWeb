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
                Welcome to <strong className="font-bold">MoneyView</strong>, where watching advertisements can earn you money during your free time. Our goal is to giv people who want to earn money while watching adverts an easy-to-use platform.

            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
                Our basic concept when we launched this platform was, "Why not get compensated for the time you spend watching ads?" We saw a chance to establish a win-win scenario for users and advertisers with the rise of online advertising. On our platform, you can earn money by watching advertisements while also assisting businesses in promoting their goods and services.

            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8">
                Money-making opportunities with <strong className="font-bold">MoneyView</strong> is Simple. Just register, log in, and begin viewing advertisements. With each ad view, you will earn money. To guarantee that you receive your earnings on time, we provide a simple and secure payment procedure.

            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-4">
                We appreciate your inquiries and comments. Do not hesitate to contact our support team at with any questions or recommendations.
                <a className="text-blue-500 hover:underline" href="mailto:support@moneyview.com">support@moneyview.cloud</a>.
            </p>
        </div>);
}
