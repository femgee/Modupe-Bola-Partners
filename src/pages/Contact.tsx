import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    legalMatter: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaText, setCaptchaText] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
    return captcha;
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(148, 163, 184, ${Math.random() * 0.3 + 0.1})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(100, 116, 139, ${Math.random() * 0.4 + 0.1})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.font = 'bold 32px Arial';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < text.length; i++) {
      ctx.save();
      const x = 20 + i * 30;
      const y = canvas.height / 2;
      const angle = (Math.random() - 0.5) * 0.4;

      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 40%)`;
      ctx.fillText(text[i], 0, 0);

      ctx.restore();
    }
  };

  useEffect(() => {
    const text = generateCaptcha();
    drawCaptcha(text);
  }, []);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaAnswer.toLowerCase() !== captchaText.toLowerCase()) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        legalMatter: '',
        message: '',
      });
      setCaptchaAnswer('');
      const text = generateCaptcha();
      drawCaptcha(text);
    }, 3000);
  };

  const refreshCaptcha = () => {
    const text = generateCaptcha();
    drawCaptcha(text);
    setCaptchaAnswer('');
    setCaptchaError(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+234 (703) 090-8565',
      subContent: 'Mon-Fri from 9am to 6pm',
    },

    {
      icon: Phone,
      title: 'Phone',
      content: '+234 (805) 458 4008',
      subContent: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@modupebola.com',
      subContent: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'SW9/320ad Orita Ikereku',
      subContent: 'Odo Ona Elewe, Ibadan',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9am - 6pm',
      subContent: 'Saturday: By appointment',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Schedule a consultation to discuss your legal needs. Our experienced attorneys are ready to help you navigate complex legal matters.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div id="contact-form" ref={formRef} className="bg-white rounded-xl border-2 border-slate-200 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Consultation</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

                {submitted ? (
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 text-center">
                    <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-10 w-10 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Message Received!
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Thank you for reaching out. One of our attorneys will review your inquiry and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                          placeholder="Please enter your name full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                          placeholder="Kindly enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                          placeholder="Kindly enter your contact number"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="legalMatter" className="block text-sm font-semibold text-slate-700 mb-2">
                        Legal Matter *
                      </label>
                      <select
                        id="legalMatter"
                        name="legalMatter"
                        required
                        value={formData.legalMatter}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                      >
                        <option value="">Select a practice area</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="litigation">Litigation</option>
                        <option value="ip">Intellectual Property</option>
                        <option value="realestate">Real Estate</option>
                        <option value="employment">Employment Law</option>
                        <option value="family">Family Law</option>
                        <option value="tax">Tax Law</option>
                        <option value="estate">Estate Planning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Tell Us About Your Case *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                        placeholder="Please provide details about your legal matter..."
                      />
                    </div>

                    <div>
                      <label htmlFor="captcha" className="block text-sm font-semibold text-slate-700 mb-2">
                        Security Check *
                      </label>
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <canvas
                            ref={canvasRef}
                            width="220"
                            height="80"
                            className="border-2 border-slate-300 rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={refreshCaptcha}
                            className="absolute -top-2 -right-2 bg-amber-600 text-white w-8 h-8 rounded-full hover:bg-amber-700 transition-colors flex items-center justify-center text-sm font-bold shadow-lg"
                            title="Refresh captcha"
                          >
                            ↻
                          </button>
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            id="captcha"
                            required
                            value={captchaAnswer}
                            onChange={(e) => {
                              setCaptchaAnswer(e.target.value);
                              setCaptchaError(false);
                            }}
                            className={`w-full px-4 py-3 border-2 ${
                              captchaError ? 'border-red-500' : 'border-slate-300'
                            } rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all`}
                            placeholder="Enter the text shown"
                          />
                          {captchaError && (
                            <p className="text-red-600 text-sm mt-2 font-medium">
                              Incorrect code. Please try again.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                    >
                      Submit Consultation Request
                      <Send className="ml-2 h-5 w-5" />
                    </button>

                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting this form, you agree to our privacy policy. All communications are confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-slate-700 text-sm font-medium">{item.content}</p>
                          <p className="text-slate-500 text-xs mt-1">{item.subContent}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Legal Matters</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  For urgent legal matters requiring immediate attention, please call our office directly during business hours.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-sm"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Office Location</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Visit our downtown office for in-person consultations. Free parking available for clients.
                </p>
                <div className="bg-slate-800 rounded-lg p-4 text-sm">
                  <p className="font-medium">SW9/320ad</p>
                  <p className="text-slate-400">Orita Ikereku, Odo Ona Elewe, Ibadan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
