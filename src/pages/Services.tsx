import {
  Calculator,
  FileText,
  PieChart,
  Receipt,
  Briefcase,
  TrendingUp,
  DollarSign,
  ClipboardCheck,
  CheckCircle2
} from 'lucide-react';

interface ServicesProps {
  onNavigateToContact?: () => void;
}

export default function Services({ onNavigateToContact }: ServicesProps) {
  const services = [
    {
      icon: Calculator,
      title: 'Bookkeeping Services',
      description: 'Comprehensive day-to-day financial record management, ensuring accuracy and compliance',
      features: [
        'Daily transaction recording',
        'Bank reconciliation',
        'Accounts payable/receivable',
        'Monthly financial reports',
      ],
    },
    {
      icon: FileText,
      title: 'Tax Preparation & Planning',
      description: 'Expert tax services to minimize liability and maximize returns for individuals and businesses',
      features: [
        'Corporate tax returns',
        'Individual tax filing',
        'Tax strategy planning',
        'HMRC representation',
      ],
    },
    {
      icon: PieChart,
      title: 'Financial Consulting',
      description: 'Strategic financial advice to help your business grow and achieve long-term objectives',
      features: [
        'Business planning',
        'Cash flow analysis',
        'Financial forecasting',
        'Performance metrics',
      ],
    },
    {
      icon: Receipt,
      title: 'Payroll Management',
      description: 'Streamlined payroll processing that ensures timely and accurate employee compensation',
      features: [
        'Payroll processing',
        'Tax withholding',
        'Direct deposit setup',
        'Compliance management',
      ],
    },
    {
      icon: Briefcase,
      title: 'Business Advisory',
      description: 'Expert guidance on business structure, operations, and growth strategies',
      features: [
        'Entity selection',
        'Operational efficiency',
        'Risk management',
        'Growth strategy',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Financial Statements',
      description: 'Accurate preparation of financial statements for informed decision-making',
      features: [
        'Balance sheets',
        'Income statements',
        'Cash flow statements',
        'Financial analysis',
      ],
    },
    {
      icon: DollarSign,
      title: 'Budget Planning',
      description: 'Comprehensive budgeting solutions to control costs and maximize profitability',
      features: [
        'Budget creation',
        'Variance analysis',
        'Cost reduction strategies',
        'Financial projections',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Audit Support',
      description: 'Professional support to navigate audits smoothly and maintain compliance',
      features: [
        'Audit preparation',
        'Document organization',
        'HMRC audit support',
        'Compliance verification',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive accounting services that are intentionally designed to meet the unique needs of your business.
            From bookkeeping to strategic financial planning, we've got you covered.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-emerald-500 p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600">
                Our proven process ensures seamless service delivery and optimal results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your needs and goals' },
                { step: '02', title: 'Analysis', desc: 'Review your financial situation' },
                { step: '03', title: 'Strategy', desc: 'Develop customized solutions' },
                { step: '04', title: 'Execution', desc: 'Implement and monitor results' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Every business is unique. Let's discuss how we can tailor our services to your specific needs.
          </p>
          <button
            onClick={onNavigateToContact}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
