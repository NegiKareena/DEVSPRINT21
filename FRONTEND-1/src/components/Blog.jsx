import React from 'react';

function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700 ">Gardening Basics</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Blog1.jpg"
            alt="Beginner Gardening Tips"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Beginner Friendly Home Gardening Tips</h2>
            <p className="text-gray-600 mb-4">July 3, 2024</p>
            <p className="text-gray-700 mb-4">Get started with these beginner-friendly tips for home gardening. Learn how to choose the right plants, prepare your soil, and maintain your garden...</p>
            <a href="https://miraclegro.com/en-us/gardening-101/10-top-gardening-tips-for-beginners.html" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Blog2.jpg"
            alt="Air Purifier Plants"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Air Purifier Plants for Your Home</h2>
            <p className="text-gray-600 mb-4">July 2, 2024</p>
            <p className="text-gray-700 mb-4">Discover the best air purifier plants to keep your indoor air clean and fresh. These plants not only beautify your home but also improve air quality...</p>
            <a href="https://www.hgtv.com/design/remodel/interior-remodel/10-best-plants-for-cleaning-indoor-air-pictures" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Blog3.jpg"
            alt="Spider Mites"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">How to Get Rid of Spider Mites on Plants</h2>
            <p className="text-gray-600 mb-4">July 1, 2024</p>
            <p className="text-gray-700 mb-4">Spider mites can be a nightmare for plant owners. Learn effective methods to identify and eliminate these pests from your plants...</p>
            <a href="https://www.masterclass.com/articles/spider-mites-on-plants" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Blog4.jpg"
            alt="Reuse Broken Pots"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">How to Reuse Your Broken Plant Pots</h2>
            <p className="text-gray-600 mb-4">June 30, 2024</p>
            <p className="text-gray-700 mb-4">Don't throw away your broken plant pots. Discover creative ways to reuse and recycle them in your garden...</p>
            <a href="https://sanjoserecycles.org/reuse-broken-planters/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Banner.jpg"
            alt="Indoor Gardening"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">5 Steps to Keep Gardening Indoors</h2>
            <p className="text-gray-600 mb-4">June 29, 2024</p>
            <p className="text-gray-700 mb-4">Gardening indoors can be a rewarding experience. Follow these 5 simple steps to create and maintain a beautiful indoor garden...</p>
            <a href="https://www.allthatgrows.in/blogs/posts/indoor-gardening-guide" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="Blog6.jpg"
            alt="Outdoor Garden"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">How to Maintain Your Outdoor Garden</h2>
            <p className="text-gray-600 mb-4">June 28, 2024</p>
            <p className="text-gray-700 mb-4">Keeping an outdoor garden healthy and thriving requires attention and care. Here are some tips to help you maintain your garden throughout the seasons...</p>
            <a href="https://www.bhg.com/gardening/yard/garden-care/ten-steps-to-beginning-a-garden/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
