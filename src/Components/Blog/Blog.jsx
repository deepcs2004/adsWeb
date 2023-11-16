import React from 'react';

function Blog() {
  const bgImage = 'https://mcdn.wallpapersafari.com/medium/31/17/fo1SHa.jpg';


  // // adsense coden
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6590336210731139";
  //   script.crossOrigin = "anonymous";

  //   document.head.appendChild(script);

  //   return () => {
  //     // Cleanup: Remove the script when the component is unmounted
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='w-full  bg-center'>
      <div className="max-w-3xl mx-auto p-4">
        <article className="bg-white font-mono rounded-lg shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4">The Art of Time Management</h1>
          <p className="text-sm text-gray-600 mb-4">Published on November 12, 2023</p>
          <img
            src="https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Time Management Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Discover the fundamentals of efficient time management and how it may increase your output. Learn useful techniques for establishing goals, assigning activities a priority, and breaking time-wasting behaviors.
          </p>
        </article>

        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-green-600 mb-4">The Future of E-Commerce</h1>
          <p className="text-sm text-gray-600 mb-4">Published on January 8, 2023</p>
          <img
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
            alt="E-Commerce Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Examine the newest developments in e-commerce trends and technology. Learn how online retail is changing with immersive shopping experiences and AI-driven customisation.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-purple-600 mb-4">Mastering the Art of Public Speaking</h1>
          <p className="text-sm text-gray-600 mb-4">Published on February 15, 2023</p>
          <img
            src="https://images.pexels.com/photos/2235/music-sound-communication-audio.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Public Speaking Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4 ">
          The ability to speak in public is useful in both personal and professional contexts. This article provides advice on overcoming nervousness associated with public speaking and giving engaging presentations.

          </p>
        </article>



        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-yellow-600 mb-4">Traveling on a Budget</h1>
          <p className="text-sm text-gray-600 mb-4">Published on April 10, 2023</p>
          <img
            src="https://images.pexels.com/photos/346767/pexels-photo-346767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Budget Travel Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          You don't have to spend a fortune to travel. Discover how to book inexpensive travel, locate reasonably priced lodging, and unearth hidden treasures in the places you've picked.

          </p>
        </article>

        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Navigating the World of Cryptocurrency</h1>
          <p className="text-sm text-gray-600 mb-4">Published on May 5, 2023</p>
          <img
            src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cryptocurrency Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Traditional finance has been disrupted by cryptocurrency. An overview of cryptocurrencies, their applications, and the benefits and drawbacks of investing in digital assets are given in this article.

          </p>
        </article>



        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-600 mb-4">The Power of Positive Thinking</h1>
          <p className="text-sm text-gray-600 mb-4">Published on August 10, 2023</p>
          <img
            src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Positive Thinking Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Your life can be significantly improved by adopting a positive outlook. Discover the science behind positivity and discover how to develop a positive outlook.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-red-600 mb-4">Building a Personal Brand Online</h1>
          <p className="text-sm text-gray-600 mb-4">Published on September 5, 2023</p>
          <img
            src="https://images.pexels.com/photos/457445/pexels-photo-457445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Personal Brand Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Building a personal brand is crucial in the digital age. Whether you want to pursue entrepreneurship or career advancement, this article explores the methods for developing and marketing your personal brand online.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-green-600 mb-4">Investing 101: Building Wealth for the Future</h1>
          <p className="text-sm text-gray-600 mb-4">Published on November 10, 2023</p>
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Investing Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Learn the fundamentals of investing and how to accumulate wealth over time. Important investment techniques, risk control, and the value of diversification are all covered in this article.

          </p>
        </article>


        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4">Budgeting Tips for Financial Freedom</h1>
          <p className="text-sm text-gray-600 mb-4">Published on November 18, 2023</p>
          <img
            src="https://images.pexels.com/photos/1620750/pexels-photo-1620750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Budgeting Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          To take charge of your finances, learn the art of budgeting. Examine useful advice for setting up and adhering to a budget that supports your financial objectives.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-purple-600 mb-4">Navigating Credit Scores: A Guide to Financial Health</h1>
          <p className="text-sm text-gray-600 mb-4">Published on November 25, 2023</p>
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Credit Score Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Recognize the significance of credit scores and discover how to keep your financial profile in good shape. This guide includes advice on how to raise your credit score and make wise financial choices.

          </p>
        </article>


        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-orange-600 mb-4">Side Hustles: Boosting Your Income Streams</h1>
          <p className="text-sm text-gray-600 mb-4">Published on october 2, 2023</p>
          <img
            src="https://images.pexels.com/photos/3408741/pexels-photo-3408741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Side Hustles Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Investigate the world of side gigs to find useful strategies for increasing your income. This post offers advice on selecting and optimizing the side project that's best for you.

          </p>
        </article>


        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-600 mb-4">Smart Saving: Strategies for Growing Your Money</h1>
          <p className="text-sm text-gray-600 mb-4">Published on october 10, 2023</p>
          <img
            src="https://images.pexels.com/photos/1676694/pexels-photo-1676694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Smart Saving Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          To increase your money over time, learn efficient saving techniques. Investing in savings accounts, creating an emergency fund, and managing your money are all covered in this guide.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Real Estate Investments: A Beginner's Guide</h1>
          <p className="text-sm text-gray-600 mb-4">Published on october 18, 2023</p>
          <img
            src="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Real Estate Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Learn the fundamentals of real estate investing and how to begin accumulating wealth via real estate. Risks, rewards, and important considerations are covered in this beginner's guide.

          </p>
        </article>


        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-red-600 mb-4">Mastering the Art of Negotiation for Financial Success</h1>
          <p className="text-sm text-gray-600 mb-4">Published on october 28, 2023</p>
          <img
            src="https://images.pexels.com/photos/3184612/pexels-photo-3184612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Negotiation Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Discover the keys to effective negotiation and how it affects your ability to make money. This article offers helpful advice on how to negotiate contracts, deals, and salaries.

          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-purple-600 mb-4">Cryptocurrency 101: Understanding the Future of Money</h1>
          <p className="text-sm text-gray-600 mb-4">Published on January 5, 2023</p>
          <img
            src="https://images.pexels.com/photos/5702908/pexels-photo-5702908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cryptocurrency Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Discover the world of cryptocurrencies and their impact on how money will be used in the future. The fundamentals of blockchain, Bitcoin, and altcoins are covered in this beginner's guide.

          </p>
        </article>





      </div>
    </div>
  );
}

export default Blog;
