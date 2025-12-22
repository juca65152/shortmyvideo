import Link from "next/link"
import { Sparkles, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#FF0080] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
                ShortClip AI
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Transform long videos into viral shorts with AI-powered clipping and multilingual subtitles.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-[#0066FF] flex items-center justify-center transition-colors group">
                <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-[#FF0080] flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-red-600 flex items-center justify-center transition-colors group">
                <Youtube className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-blue-700 flex items-center justify-center transition-colors group">
                <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Pricing</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">How it Works</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 ShortClip AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Made with ❤️ for content creators worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
