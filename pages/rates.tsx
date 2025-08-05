import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  RefreshCw,
  Calculator,
  Clock
} from 'lucide-react';

import Layout from '../components/layout/Layout';

interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  change: number;
  flag: string;
}

const ExchangeRatesPage: NextPage = () => {
  const [selectedFrom, setSelectedFrom] = useState('USD');
  const [selectedTo, setSelectedTo] = useState('EUR');
  const [amount, setAmount] = useState('1000');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock exchange rates data
  const exchangeRates: ExchangeRate[] = [
    { from: 'USD', to: 'EUR', rate: 0.8534, change: 0.12, flag: '🇪🇺' },
    { from: 'USD', to: 'GBP', rate: 0.7321, change: -0.08, flag: '🇬🇧' },
    { from: 'USD', to: 'JPY', rate: 149.50, change: 0.25, flag: '🇯🇵' },
    { from: 'USD', to: 'CAD', rate: 1.3456, change: 0.15, flag: '🇨🇦' },
    { from: 'USD', to: 'AUD', rate: 1.4789, change: -0.22, flag: '🇦🇺' },
    { from: 'USD', to: 'CHF', rate: 0.9123, change: 0.05, flag: '🇨🇭' },
    { from: 'USD', to: 'CNY', rate: 7.2345, change: 0.18, flag: '🇨🇳' },
    { from: 'USD', to: 'INR', rate: 83.25, change: -0.12, flag: '🇮🇳' },
    { from: 'USD', to: 'MXN', rate: 18.45, change: 0.33, flag: '🇲🇽' },
    { from: 'USD', to: 'BRL', rate: 5.12, change: -0.15, flag: '🇧🇷' },
  ];

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
  ];

  const getExchangeRate = (from: string, to: string): number => {
    if (from === to) return 1;
    
    const rate = exchangeRates.find(r => r.from === from && r.to === to);
    if (rate) return rate.rate;
    
    // Reverse rate calculation
    const reverseRate = exchangeRates.find(r => r.from === to && r.to === from);
    if (reverseRate) return 1 / reverseRate.rate;
    
    return 1;
  };

  const calculateConversion = (): number => {
    const rate = getExchangeRate(selectedFrom, selectedTo);
    return parseFloat(amount) * rate;
  };

  const refreshRates = () => {
    setLastUpdated(new Date());
    // In a real app, this would fetch new rates from an API
  };

  return (
    <Layout>
      <Head>
        <title>Live Exchange Rates - ePay's Transfer</title>
        <meta name="description" content="Check live exchange rates for international money transfers. Real-time currency conversion calculator with competitive rates." />
      </Head>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Live Exchange Rates</h1>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Get real-time exchange rates for international money transfers. 
              No registration required - check rates anytime.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-200">
              <Clock className="h-4 w-4" />
              <span className="text-sm">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
              <button
                onClick={refreshRates}
                className="ml-2 p-1 hover:bg-primary-500 rounded transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Currency Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Calculate how much you'll receive with our competitive rates
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-8 w-8 text-primary-600" />
            </div>
            
            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="label">Amount to Send</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input text-2xl font-bold text-center"
                  placeholder="1000"
                />
              </div>

              {/* Currency Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* From Currency */}
                <div>
                  <label className="label">From</label>
                  <select
                    value={selectedFrom}
                    onChange={(e) => setSelectedFrom(e.target.value)}
                    className="input"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="bg-primary-100 rounded-full p-3">
                    <ArrowRight className="h-6 w-6 text-primary-600" />
                  </div>
                </div>

                {/* To Currency */}
                <div>
                  <label className="label">To</label>
                  <select
                    value={selectedTo}
                    onChange={(e) => setSelectedTo(e.target.value)}
                    className="input"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Result */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">You will receive</div>
                <div className="text-3xl font-bold text-primary-600">
                  {calculateConversion().toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} {selectedTo}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Rate: 1 {selectedFrom} = {getExchangeRate(selectedFrom, selectedTo).toFixed(4)} {selectedTo}
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button className="btn-primary text-lg px-8 py-3">
                  Start Transfer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Rates Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Currency Pairs
            </h2>
            <p className="text-lg text-gray-600">
              Real-time exchange rates for the most traded currencies
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Currency Pair
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exchange Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      24h Change
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exchangeRates.map((rate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🇺🇸</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {rate.from}/{rate.to}
                            </div>
                            <div className="text-sm text-gray-500">
                              US Dollar to {currencies.find(c => c.code === rate.to)?.name}
                            </div>
                          </div>
                          <span className="text-2xl ml-3">{rate.flag}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg font-semibold text-gray-900">
                          {rate.rate.toFixed(4)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center ${
                          rate.change >= 0 ? 'text-success-600' : 'text-error-600'
                        }`}>
                          {rate.change >= 0 ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          <span className="text-sm font-medium">
                            {rate.change >= 0 ? '+' : ''}{rate.change.toFixed(2)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            setSelectedFrom(rate.from);
                            setSelectedTo(rate.to);
                            document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Use Rate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Send Money?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get these competitive rates when you create your free account and start transferring money worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Create Free Account
            </button>
            <button className="btn border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExchangeRatesPage;

