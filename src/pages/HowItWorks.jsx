function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-8">How It Works</h1>
      <ol className="list-decimal list-inside space-y-6 max-w-2xl">
        <li>
          <span className="font-bold">Submit Your Requirements:</span> Tell us about the role you're hiring for and what skills you need.
        </li>
        <li>
          <span className="font-bold">Interview Top Talent:</span> We shortlist and introduce you to the best candidates for the role.
        </li>
        <li>
          <span className="font-bold">Hire and Grow:</span> Choose your ideal team member and start working immediately.
        </li>
      </ol>
    </div>
  );
}

export default HowItWorks;