export default function test() {
  return (
    <>
      <div className="bg-gray-50">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img
                    src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                    alt="Graphio"
                    className="h-8 w-auto"
                  />
                  <span className="ml-2 text-xl font-semibold">Graphio</span>
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-custom">
                  Services
                </a>
                <a href="#" className="text-custom font-medium">
                  Our Work
                </a>
                <a href="#" className="text-gray-600 hover:text-custom">
                  Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-custom">
                  Resources
                </a>
                <button className="!rounded-button bg-custom text-white px-6 py-2 font-medium hover:bg-custom/90">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {" "}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Recent Works
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Explore our portfolio of innovative digital solutions. While web
              development is our specialty, we also create stunning video
              content. See how we've helped businesses transform their digital
              presence and achieve growth through technology and creativity.
            </p>{" "}
          </div>
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <a
                href="#"
                className="border-b-2 border-custom text-custom px-1 py-4 font-medium"
              >
                Web Design & Development
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 font-medium"
              >
                Video Production
              </a>
            </nav>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="-"
                  alt="Conservation Project"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Web Design & Development
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Wildlife Conservation Platform
                </h3>
                <p className="mt-2 text-gray-600">
                  A comprehensive digital platform for wildlife conservation
                  efforts, featuring donation integration and volunteer
                  management.
                </p>{" "}
              </div>
            </div>

            <div className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              {" "}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="-" alt="Educational Platform"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Web Design & Development
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Global Education Platform
                </h3>{" "}
                <p className="mt-2 text-gray-600">
                  An interactive learning management system designed for
                  international students and educators.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="!rounded-button border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">
              Load More Projects
            </button>
          </div>
        </main>

        <footer className="bg-gray-900 mt-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <img
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Graphio"
                  className="h-8 w-auto mb-4"
                />{" "}
                <p className="text-gray-400">
                  Creative solutions for digital success. We transform ideas
                  into exceptional digital experiences.
                </p>{" "}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {" "}
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Video Production
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Digital Marketing
                    </a>
                  </li>{" "}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8">
              {" "}
              <p className="text-center text-gray-400">
                &copy; 2024 Graphio Creative Studio. All rights reserved.
              </p>
            </div>{" "}
          </div>
        </footer>
      </div>
    </>
  );
}
