const ContactForm =()=> {
  return (
    <div id="contact" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#22d3ee]"></div>
        <div className="h-1/2 bg-white"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white text-lg">Drop us a message and we'll get back to you.</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Form Section */}
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                    placeholder="Paul Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                    placeholder="paulsmith@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                    placeholder="Hi, do you have a moment to talk..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-32 px-6 py-3 bg-lime-400 font-semibold text-white rounded-md transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1a237e] p-8 text-white">
              <h2 className="text-2xl font-bold mb-8">Reach Us</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 mb-2">Email</p>
                  <a href="mateenabdullopato@gmail.com" className="text-white hover:text-gray-300">
                    mateenabdullopato@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">Phone</p>
                  <a
              className="btn btn-neutral text-white btn-sm mt-2"
              href="tel:+233543983427"
            >
                  <p>0543983427 ( 19 am - 6 pm GMT )</p>
                  </a>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">Address</p>
                  <p>Digital Address: BS-3115-2524</p>
                  <p>Street Name: Sunyani - Berekum Road</p>
                  <p>Region: Bono</p>
                  <p>District: 
                  Sunyani</p>
                  <p>Community: 
                  Fiapre</p>
                  <p>Postal Area: 
                  Sunyani 3115</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactForm

