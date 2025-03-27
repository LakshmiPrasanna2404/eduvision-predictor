
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the navbar should be transparent or solid
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Prediction', path: '/prediction' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/"
              className="text-xl font-semibold cursor-pointer transition-all hover:opacity-80"
            >
              <span className="text-primary">Edu</span>Vision
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium relative transition-all duration-300 ease-in-out',
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-slate-700 hover:text-primary',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300',
                    isActive(link.path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-all"
            >
              Log In
            </Link>
            <Link 
              to="/signup"
              className="px-4 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-all shadow-sm hover:shadow"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-smooth-appear">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium w-full text-left',
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col pt-2 space-y-2 border-t border-slate-200 mt-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-primary w-full text-left"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-3 px-4 py-2 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
