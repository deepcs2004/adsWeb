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
            src="https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Timemanagement-1686159523483.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
            alt="Time Management Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Learn the essential principles of effective time management and how it can boost your productivity. Discover practical strategies for prioritizing tasks, setting goals, and eliminating time-wasting habits.
          </p>
        </article>

        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-green-600 mb-4">The Future of E-Commerce</h1>
          <p className="text-sm text-gray-600 mb-4">Published on January 8, 2023</p>
          <img
            src="https://www.velocityconsultancy.com/wp-content/uploads/2018/04/post-20-img-1.jpg"
            alt="E-Commerce Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Explore the latest trends and technologies shaping the future of e-commerce. From AI-driven personalization to immersive shopping experiences, discover how online retail is evolving.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-purple-600 mb-4">Mastering the Art of Public Speaking</h1>
          <p className="text-sm text-gray-600 mb-4">Published on February 15, 2023</p>
          <img
            src="https://thebrew.co.uk/wp-content/uploads/2023/03/shutterstock_1746589040.jpg"
            alt="Public Speaking Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4 ">
            Public speaking is a valuable skill in both personal and professional life. This article offers tips on conquering public speaking anxiety and delivering compelling presentations.
          </p>
        </article>



        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-yellow-600 mb-4">Traveling on a Budget</h1>
          <p className="text-sm text-gray-600 mb-4">Published on April 10, 2023</p>
          <img
            src="https://www.travelandleisure.com/thmb/MriQxOVvVJ1MLNgWUXbGl8L2rGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Backpacker-BUDGET0323-eeaf531276694f93966baa8fbcd2730d.jpg"
            alt="Budget Travel Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Traveling doesn't have to break the bank. Learn how to plan budget-friendly trips, find affordable accommodations, and discover hidden gems in your chosen destinations.
          </p>
        </article>

        <article className="bg-white rounded-lg font-mono shadow-md p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Navigating the World of Cryptocurrency</h1>
          <p className="text-sm text-gray-600 mb-4">Published on May 5, 2023</p>
          <img
            src="https://pcsite.co.uk/wp-content/uploads/sites/7/2023/10/DALL%C2%B7E-2023-10-27-09.58.11-3D-render-of-a-table-with-various-cryptocurrency-coins-like-Bitcoin-Ethereum-and-Litecoin.-Above-the-coins-hover-holographic-charts-graphs-and-dat-1.png"
            alt="Cryptocurrency Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Cryptocurrency has disrupted traditional finance. This article provides an introduction to cryptocurrency, its uses, and the risks and rewards of investing in digital assets.
          </p>
        </article>



        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-600 mb-4">The Power of Positive Thinking</h1>
          <p className="text-sm text-gray-600 mb-4">Published on August 10, 2023</p>
          <img
            src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/07/10072023_The-power-of-Positive-Thinking.jpg?resize=740%2C740&ssl=1"
            alt="Positive Thinking Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Positive thinking can have a profound impact on your life. Explore the science of positivity and learn how to cultivate an optimistic mindset.
          </p>
        </article>

        <article className="bg-white rounded-lg shadow-md font-mono p-6 mb-8 transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-semibold text-red-600 mb-4">Building a Personal Brand Online</h1>
          <p className="text-sm text-gray-600 mb-4">Published on September 5, 2023</p>
          <img
            src="https://www.thethrive.in/wp-content/uploads/2022/10/26.jpg"
            alt="Personal Brand Image"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            In the digital age, personal branding is essential. This article delves into the strategies for creating and promoting your personal brand online, whether for career advancement or entrepreneurship.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Blog;
