import Link from 'next/link';
import { 
  Globe, 
  Shield, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">e</span>
              </div>
              <span className="text-xl font-bold">ePay's Transfer</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium international money transfer service with competitive rates, 
              low fees, and bank-level security. Licensed and certified in the USA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rates" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Exchange Rates
                </Link>
              </li>
              <li>
                <Link href="/transfer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Send Money
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-300 hover:text-white transition-colors text-sm">
                  ePay's Business
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Track Transfer
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/compliance" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Compliance & Licenses
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/aml" className="text-gray-300 hover:text-white transition-colors text-sm">
                  AML Policy
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">support@epay-transfer.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>123 Financial District</div>
                  <div>New York, NY 10004</div>
                  <div>United States</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} ePay's Transfer LLC. All rights reserved.
            </div>
            
            {/* Certifications */}
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>FinCEN MSB Registered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-6 text-xs text-gray-500 text-center md:text-left">
            <p>
              ePay's Transfer is a registered Money Services Business (MSB) with FinCEN. 
              Licensed to operate in all 50 states. International transfers subject to regulatory approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

