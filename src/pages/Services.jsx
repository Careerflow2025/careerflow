function Services() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2">Virtual Assistants</h2>
          <p>Skilled remote assistants for administration, scheduling, and customer support tasks.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2">IT Professionals</h2>
          <p>Experienced developers, engineers, and tech specialists to support your IT projects.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2">Designers</h2>
          <p>Creative graphic, web, and UI/UX designers to bring your brand vision to life.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2">Admin Support</h2>
          <p>Reliable administrative and operational support staff for your growing business.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;