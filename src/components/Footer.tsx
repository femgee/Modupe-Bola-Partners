import { Scale, Mail, Phone, MapPin } from 'lucide-react';

type Page = 'home' | 'about' | 'people' | 'expertise' | 'contact';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-amber-600 p-2 rounded">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-lg font-bold text-white">Modupe-Bola Balogun & Partners</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Providing exceptional legal services with integrity, dedication, and expertise.
              Our commitment is to protect your interests and achieve the best possible outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-sm hover:text-amber-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="text-sm hover:text-amber-500 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('people')} className="text-sm hover:text-amber-500 transition-colors">
                  Our People
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('expertise')} className="text-sm hover:text-amber-500 transition-colors">
                  Practise Areas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-sm hover:text-amber-500 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+234 (081) 216 87698</span>
              </li>

                 <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+234 (805) 458 4008</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">oyebolabalogun20@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">dupsylaw2002@yahoo.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">SW9/320A, Ile Lawyer, along Odo Ona Elewe Raod, Orita Cahllenge<br /> Ibadan , Oyo State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Modupe-BolaBalogun & Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
