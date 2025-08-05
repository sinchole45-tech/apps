import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Lock
} from 'lucide-react';

import Layout from '../components/layout/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ePay's Transfer - Premium International Money Transfer Service</title>
        <meta name="description" content="Send money worldwide with competitive rates, low fees, and bank-level security. Join ePay's Business network and earn up to 3% commission." />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Premium Money Transfer
              <span className="block text-yellow-300">Worldwide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
              Send money across borders with competitive exchange rates, low fees, and bank-level security. 
              Join our business network and earn commissions up to 3%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/rates" className="btn-primary text-lg px-8 py-4">
                Check Exchange Rates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/register" className="btn-outline text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Start Transferring
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Globe className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-yellow-300/20 rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Live Exchange Rates Widget */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Live Exchange Rates
            </h2>
            <p className="text-lg text-gray-600">
              Check real-time rates for popular currency pairs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { from: 'USD', to: 'EUR', rate: '0.85', change: '+0.12%' },
              { from: 'USD', to: 'GBP', rate: '0.73', change: '-0.08%' },
              { from: 'USD', to: 'JPY', rate: '149.50', change: '+0.25%' },
            ].map((pair, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center items-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">{pair.from}</span>
                  <ArrowRight className="mx-3 h-5 w-5 text-gray-400" />
                  <span className="text-2xl font-bold text-primary-600">{pair.to}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{pair.rate}</div>
                <div className={`text-sm font-medium ${pair.change.startsWith('+') ? 'text-success-600' : 'text-error-600'}`}>
                  {pair.change}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/rates" className="btn-primary">
              View All Rates & Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ePay's Transfer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of international money transfers with our premium service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your money and data are protected with enterprise-grade encryption and security protocols.',
                color: 'text-blue-600'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Most transfers complete within minutes, not days. Get your money where it needs to be, fast.',
                color: 'text-yellow-600'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Send money to over 200 countries and territories worldwide with competitive rates.',
                color: 'text-green-600'
              },
              {
                icon: TrendingUp,
                title: 'Best Exchange Rates',
                description: 'Get more for your money with our competitive exchange rates and transparent pricing.',
                color: 'text-purple-600'
              },
              {
                icon: Users,
                title: 'Business Network',
                description: 'Join ePay\'s Business and earn commissions from 0.2% to 3% on processed transfers.',
                color: 'text-indigo-600'
              },
              {
                icon: Award,
                title: 'Licensed & Certified',
                description: 'Fully licensed in the USA with international certifications for your peace of mind.',
                color: 'text-red-600'
              }
            ].map((feature, index) => (
              <div key={index} className="card hover:shadow-medium transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ePay's Business Section */}
      <section className="py-16 business-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">
              ePay's Business Network
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our exclusive insider network and earn commissions by processing money transfers. 
              Six levels of earning potential from 0.2% to 3%.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { level: 1, commission: '0.2%', title: 'Starter', color: 'bg-white/10' },
              { level: 2, commission: '0.5%', title: 'Bronze', color: 'bg-yellow-500/20' },
              { level: 3, commission: '1.0%', title: 'Silver', color: 'bg-gray-300/20' },
              { level: 4, commission: '1.5%', title: 'Gold', color: 'bg-yellow-400/20' },
              { level: 5, commission: '2.0%', title: 'Platinum', color: 'bg-purple-400/20' },
              { level: 6, commission: '3.0%', title: 'Diamond', color: 'bg-blue-400/20' },
            ].map((tier, index) => (
              <div key={index} className={`${tier.color} backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center text-white`}>
                <div className="text-2xl font-bold mb-2">Level {tier.level}</div>
                <div className="text-lg font-semibold mb-2">{tier.title}</div>
                <div className="text-3xl font-bold text-yellow-300">{tier.commission}</div>
                <div className="text-sm opacity-80 mt-2">Commission Rate</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/business" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Join ePay's Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Licensed & Certified
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trust is our priority. We maintain the highest standards of compliance and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'FinCEN MSB',
                subtitle: 'USA Registration',
                description: 'Registered Money Services Business',
                icon: Shield
              },
              {
                title: 'ISO 27001',
                subtitle: 'Security Certified',
                description: 'Information Security Management',
                icon: Lock
              },
              {
                title: 'State Licensed',
                subtitle: 'Multi-State',
                description: 'Licensed in all operating states',
                icon: Award
              },
              {
                title: 'AML Compliant',
                subtitle: 'Full Compliance',
                description: 'Anti-Money Laundering certified',
                icon: CheckCircle
              }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                  <cert.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-sm font-medium text-primary-600 mb-2">{cert.subtitle}</p>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/legal/compliance" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Certifications & Legal Documents →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Transferring?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ePay's Transfer for their international money transfer needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Create Account
            </Link>
            <Link href="/rates" className="btn border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Check Rates First
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

