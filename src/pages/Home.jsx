import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Hire Smarter. Work Globally.
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-center max-w-2xl">
        CareerFlow connects you with top Virtual Assistants, IT Professionals, Designers, and Admin Support — worldwide.
      </p>
      <Link to="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition">
        Hire Talent
      </Link>
    </div>
  );
}

export default Home;