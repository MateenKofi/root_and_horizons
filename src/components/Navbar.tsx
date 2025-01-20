import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "home" },
    { title: "About", link: "about" },
    { title: "Gallery", link: "gallery" },
    { title: "Videos", link: "videos" },
    { title: "Contact", link: "contact" },
    { title: "Retrospect", link: "retrospect" },
  ];

  return (
    <nav className="fixed w-full bg-lime-300/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="./logo.ico" alt="AfriCulture" className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold text-african-brown">
                  Root And Horizons
                </h1>
                <h1 className="text-sm font-bold text-african-brown">
                  Assin Manso In Retrospect
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="text-african-brown hover:text-african-orange px-3 py-2 rounded-md cursor-pointer"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-african-brown hover:text-african-orange"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                smooth={true}
                duration={500}
                className="text-african-brown hover:text-african-orange block px-3 py-2 rounded-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
