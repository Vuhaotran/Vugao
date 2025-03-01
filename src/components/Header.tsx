
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang Chủ", path: "/" },
    { name: "Lệnh", path: "/commands" },
    { name: "Trạng Thái", path: "/status" },
    { name: "Wiki", path: "/wiki" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-bot-primary flex items-center justify-center text-white font-bold text-lg">
            O
          </div>
          <span className="text-xl font-bold">Omh Bot</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot%20applications.commands"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thêm Bot
          </a>
          <a
            href="https://discord.gg/omhbot"
            className="btn-discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tham Gia
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg absolute w-full py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 px-4 text-lg font-medium rounded-md ${
                  location.pathname === item.path
                    ? "bg-bot-primary/10 text-bot-primary"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot%20applications.commands"
                className="btn-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thêm Bot
              </a>
              <a
                href="https://discord.gg/omhbot"
                className="btn-discord text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tham Gia
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
