import { Link } from "react-router-dom";

function MigrationFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Migration Support</h3>
          <p>
            Empowering migrants for a better future in Germany. Connecting
            people with essential resources and support networks.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/legal-advice" className="hover:text-white">
                Legal Advice
              </Link>
            </li>
            <li>
              <Link to="/language-courses" className="hover:text-white">
                Language Courses
              </Link>
            </li>
            <li>
              <Link to="/job-search" className="hover:text-white">
                Job Search
              </Link>
            </li>
            <li>
              <Link to="/housing" className="hover:text-white">
                Housing Assistance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/our-mission" className="hover:text-white">
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-white">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/imprint" className="hover:text-white">
                Imprint
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        <p>
          In case of emergencies, please contact the emergency hotline 112 or
          visit telefonseelsorge.de for immediate support.
        </p>
        <hr className="my-6 border-gray-700" />
        <p>&copy; 2024 Migration Support Germany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default MigrationFooter;
