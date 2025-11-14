import { Building2, Users, Home, FileText, Briefcase, Scale, TrendingUp, Heart } from 'lucide-react';

export default function Expertise() {
  const practiceAreas = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Comprehensive legal support for business formation, governance, compliance, mergers and acquisitions, and commercial transactions.',
      services: [
        'Business entity formation',
        'Corporate governance',
        'Mergers & acquisitions',
        'Contract negotiation',
        'Securities compliance',
      ],
    },
    {
      icon: Scale,
      title: 'Litigation',
      description: 'Aggressive representation in civil litigation, from pre-trial negotiations through trial and appeals in state and federal courts.',
      services: [
        'Commercial disputes',
        'Contract litigation',
        'Business torts',
        'Class action defense',
        'Appellate advocacy',
      ],
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      description: 'Protection and enforcement of patents, trademarks, copyrights, and trade secrets for innovators and content creators.',
      services: [
        'Patent prosecution',
        'Trademark registration',
        'Copyright protection',
        'IP litigation',
        'Licensing agreements',
      ],
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Full-service real estate legal counsel for residential and commercial transactions, development, and property disputes.',
      services: [
        'Property acquisitions',
        'Commercial leasing',
        'Zoning & land use',
        'Real estate litigation',
        'Title disputes',
      ],
    },
    {
      icon: Users,
      title: 'Employment Law',
      description: 'Strategic counsel on workplace matters, employment agreements, compliance, and dispute resolution for employers and employees.',
      services: [
        'Employment contracts',
        'Workplace discrimination',
        'Wage & hour compliance',
        'Wrongful termination',
        'Executive compensation',
      ],
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate representation in divorce, custody, support, and other family matters with a focus on mediation and resolution.',
      services: [
        'Divorce proceedings',
        'Child custody',
        'Spousal support',
        'Prenuptial agreements',
        'Adoption services',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Tax Law',
      description: 'Expert guidance on tax planning, compliance, audits, and disputes with federal and state tax authorities.',
      services: [
        'Tax planning & strategy',
        'IRS audit defense',
        'Tax controversy',
        'Estate tax planning',
        'Business tax compliance',
      ],
    },
    {
      icon: Briefcase,
      title: 'Estate Planning',
      description: 'Comprehensive estate planning services to protect your assets and ensure your wishes are carried out for future generations.',
      services: [
        'Wills & trusts',
        'Estate administration',
        'Probate services',
        'Asset protection',
        'Charitable giving',
      ],
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Practice Areas
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal services across multiple practice areas, delivered by specialists who understand your unique needs
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-slate-200 p-8 hover:border-amber-500 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-600 transition-colors flex-shrink-0">
                      <Icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                      Key Services
                    </h4>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-slate-700">
                          <span className="text-amber-600 mr-2 font-bold">•</span>
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Industry Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our attorneys have deep experience serving clients across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financial Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Banks, investment firms, fintech startups, and insurance companies
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technology</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Software companies, hardware manufacturers, and digital platforms
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Healthcare</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hospitals, medical practices, pharmaceutical companies, and healthcare providers
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Real Estate & Construction</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developers, contractors, property managers, and real estate investors
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Manufacturing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Industrial manufacturers, supply chain companies, and distributors
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Retail & E-commerce</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Brick-and-mortar retailers, online marketplaces, and consumer brands
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want To Learn More About How We Help Clients in Risk?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
           Attracts thousands of individuals and businesses, all of whom (98%) have successfully dealt with their legal conundrums with our timely...
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
