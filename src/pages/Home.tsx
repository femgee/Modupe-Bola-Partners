import { Scale, ArrowRight, Award, Users, TrendingUp, Shield } from 'lucide-react';
import lawJusticeImage from '../assets/Law and Justice.jpg';

interface HomeProps {
  setCurrentPage: (page: 'about' | 'people' | 'expertise' | 'contact') => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const stats = [
    { icon: TrendingUp, label: 'Years of Excellence', value: '10+' },
    { icon: Award, label: 'Cases Won', value: '1000+' },
    { icon: Users, label: 'Expert Attorneys', value: '2+' },
    { icon: Shield, label: 'Client Satisfaction', value: '98%' },
  ];

  const handleNavigation = (page: 'about' | 'people' | 'expertise' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${lawJusticeImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-slate-800/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-amber-600 p-4 rounded-xl shadow-2xl">
              <Scale className="h-16 w-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Modupe-Bola & Partners
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
             “When your lawyers trust each other implicitly, you can trust them completely".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('contact');
              }}
              className="group bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => handleNavigation('expertise')}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl"
            >
              Our Practice Areas
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all"
                >
                  <Icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Modupe-Bola & Partners?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
           A husband-and-wife legal team brings a rare level of trust and synergy to their practice. Their personal bond translates into professional cohesion—clients benefit from a unified front, seamless communication, and a shared commitment to excellence.
    </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-amber-500 transition-all hover:shadow-lg">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Two Minds, One Mission</h3>
              <p className="text-slate-600 leading-relaxed">
               With a complementary strenghts and perspectives, husband-and-wife team offers a dynamic blend of legal insights. Whether it is litigation strategy or contract negotiation, their collaborative approach ensures every angle is considered.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-amber-500 transition-all hover:shadow-lg">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Personalized, Family-Centered Servic</h3>
              <p className="text-slate-600 leading-relaxed">
                Clients often say working with a husband-and-wife firm feels like joining a family. You’re not just another case—you’re a relationship they’re invested in.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-amber-500 transition-all hover:shadow-lg">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Stability You Can Count On.</h3>
              <p className="text-slate-600 leading-relaxed">
      No handsoffs. No surprises. Long-term relationships build on consistency, Their repuation is personal-so they go the extra mile.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button
              onClick={() => handleNavigation('about')}
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Learn More About Our Firm
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
