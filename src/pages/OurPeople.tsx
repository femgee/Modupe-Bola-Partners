import { Mail, Linkedin } from 'lucide-react';
import bolaImage from '../assets/black lawyer copy.jpg';
import modupeImage from '../assets/lady lawyer.jpg';

export default function OurPeople() {
  const partners = [
    {
      name: 'Oyebola A. Balogun',
      title: 'Partner',
      expertise: 'Media and Entertainment Law, Hotel and Hospitality, Maritime Law, Energy Law, Civil and Criminal Mitigation',
      bio: 'With over 10 years of experience, Jonathan has led some of the most complex corporate transactions in the industry. His strategic vision has guided the firm to become a leader in corporate law.',
      education: 'Nigeria Law School',
      email: 'B.Balogung@modupe-bola.comoyebaolbalogun20@gmail.com',
      tel_no:'08121687698',
      image: bolaImage,
    },
    {
      name: 'Modupe Balogun',
      title: 'Partner',
      expertise: 'Corporate and Business Law, Property Law, Intellectual and Immigration Law, Energy Law',
      bio: 'Modupe specializes in patent law and trademark protection, helping innovators and companies protect their most valuable assets. She has successfully argued before federal courts nationwide.',
      education: 'Nigeria Law School,',
      email: 'dupsylaw2002@yahoo.com',
      Tel_No: '08054584008',
      image: modupeImage,
    },
   
  ];


  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Legal Team
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meet the exceptional attorneys who bring decades of experience, dedication, and expertise to every case
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Partners</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto">
              Our partners are recognized leaders in their fields with proven track records of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      loading="lazy"
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-2">{partner.title}</p>
                    <p className="text-slate-600 font-medium mb-4">{partner.expertise}</p>
                    <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                      {partner.bio}
                    </p>
                    <p className="text-slate-500 text-sm mb-4">{partner.education}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={`mailto:${partner.email}`}
                        className="flex items-center text-slate-600 hover:text-amber-600 transition-colors text-sm"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </a>
                      <a
                        href="#"
                        className="flex items-center text-slate-600 hover:text-amber-600 transition-colors text-sm"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            We're always looking for exceptional legal talent to join our growing firm.
            If you're passionate about the law and committed to excellence, we'd love to hear from you.
          </p>
          <a
            href="mailto:dupsylaw2002@yahoo.com"
            href="mailto:oyebolabalogun20@gmail.com"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
