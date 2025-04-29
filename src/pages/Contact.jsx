function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-6 text-center max-w-2xl">
        Ready to hire top remote talent? Get in touch with CareerFlow today.
      </p>
      <a
        href="mailto:contact@careerflow.co.uk"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
      >
        Email Us
      </a>
    </div>
  );
}

export default Contact;