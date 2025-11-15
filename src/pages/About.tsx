import { Scale, Award, Users, Shield, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Cases Won', value: '1000+' },
    { label: 'Expert Attorneys', value: '2+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const values = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Unwavering commitment to fairness and the rule of law in every case',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, ethical representation built on trust and transparency',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior legal outcomes through expertise and dedication',
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Your goals and interests are at the heart of everything we do',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Our Firm
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
             Over a decade of legal excellence, trusted counsel, and unwavering dedication to justice
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all"
              >
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Legacy
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>
                  At Modupe-Bola & Partners, we are a husband-and-wife legal team dedicated to 
                  delivering exceptional legal counsel with integrity, precision, and personalized attention. 
                  Our practice is built upon a foundation of mutual respect, professional synergy, 
                  and a shared commitment to advocating for our clients’ best interests.
                </p>
                <p>
                  With a combined breadth of experience across diverse areas of law, 
                  we offer a collaborative approach that leverages our complementary strengths. 
                  This partnership enables us to provide well-rounded legal solutions, strategic insight, 
                  and consistent representation throughout every stage of your legal matter.
                </p>
                <p>
                  We understand that legal issues often carry significant personal and financial weight. 
                  That is why we prioritize clear communication, transparency, and responsiveness—ensuring 
                  our clients feel informed, supported, and empowered. Whether navigating complex litigation, 
                  drafting critical agreements, or resolving sensitive family matters, 
                  we approach each case with diligence, discretion, and care.
                </p>
                <p>
                  Our clients benefit from the continuity and cohesion of working directly with the same trusted 
                  professionals from consultation to resolution. We take pride in cultivating long-term 
                  relationships grounded in trust, professionalism, and results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                <TrendingUp className="h-20 w-20 text-amber-600" />
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                <Award className="h-20 w-20 text-slate-700" />
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                <BookOpen className="h-20 w-20 text-slate-700" />
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
                <Scale className="h-20 w-20 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Modupe-Bola & Partners?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Experience, expertise, and a proven track record of success. We don't just practice law—
            we build lasting relationships and deliver results that matter.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Proven Results</h3>
              <p className="text-slate-300 text-sm">
                98% client satisfaction with thousands of successful case outcomes
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Expert Team</h3>
              <p className="text-slate-300 text-sm">
                Attorneys with specialized knowledge across multiple practice areas
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Personal Service</h3>
              <p className="text-slate-300 text-sm">
                Direct access to senior partners and personalized attention to your case
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
