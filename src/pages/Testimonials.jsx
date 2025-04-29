function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-8">What Our Clients Say</h1>
      <div className="space-y-8 max-w-3xl">
        <div className="p-6 border rounded-lg shadow-md">
          <p className="italic">"CareerFlow helped us hire an incredible Virtual Assistant in less than a week. Highly recommended!"</p>
          <p className="font-bold mt-2">— Sarah L., London</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <p className="italic">"Our new remote developer has been a huge asset to our team, thanks to CareerFlow’s fast process."</p>
          <p className="font-bold mt-2">— James M., New York</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;