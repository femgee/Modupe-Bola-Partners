import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'people' | 'expertise' | 'contact';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' as Page },
    { name: 'About', id: 'about' as Page },
    { name: 'Our People', id: 'people' as Page },
    { name: 'Practice Areas', id: 'expertise' as Page },
    { name: 'Contact Us', id: 'contact' as Page },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="bg-amber-600 p-2 rounded">
              <Scale className="h-7 w-7 text-white" />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-white tracking-tight">
                Modupe-Bola Balogun & Partners
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-amber-500 bg-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                } px-4 py-2 text-sm font-medium transition-all duration-200 rounded`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-amber-500 bg-slate-800'
                    : 'text-slate-300 hover:bg-slate-800'
                } block w-full text-left px-3 py-3 text-base font-medium transition-all duration-200 rounded`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
