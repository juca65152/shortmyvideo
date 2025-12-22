import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Globe, Download, Video, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066FF]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF0080]/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#FF0080]/10 border border-[#0066FF]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            <span className="text-sm font-medium text-gray-700">AI-Powered Video Creation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Long Videos Into
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
              Viral Shorts
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your long-form content into engaging 15s, 30s, or 3-minute shorts with intelligent clipping and automatic multilingual subtitles. Ready for TikTok, Instagram Reels, and YouTube Shorts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] hover:opacity-90 text-white shadow-2xl shadow-[#FF0080]/30 text-lg px-8 py-6 h-auto">
              Start Creating Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white text-lg px-8 py-6 h-auto">
              Watch Demo
              <Video className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <div className="text-sm text-gray-600">Shorts Created</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Go Viral
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help content creators save time and maximize engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#0066FF]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0066FF]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Clipping</h3>
              <p className="text-gray-600 leading-relaxed">
                AI automatically detects the most engaging moments in your videos based on speech patterns, emotional intensity, and narrative flow.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FF0080]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0080] to-[#FF0080]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingual Subtitles</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatic subtitle generation in 50+ languages with perfect timing. Enable, disable, or regenerate before export.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#0066FF]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#FF0080] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Durations</h3>
              <p className="text-gray-600 leading-relaxed">
                Create shorts in 15s, 30s, or up to 3 minutes. Perfect for TikTok, Instagram Reels, YouTube Shorts, and more.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FF0080]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0080] to-[#0066FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Input Sources</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload local videos or paste YouTube links. We support all major video formats and platforms.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#0066FF]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0066FF]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Library</h3>
              <p className="text-gray-600 leading-relaxed">
                Visual library of all your generated shorts with in-app preview, download tracking, and easy management.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#FF0080]/20 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0080] to-[#FF0080]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Export Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Download with or without burned-in subtitles. Full control over your final output for maximum flexibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Create Viral Shorts in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From upload to download in minutes. No editing skills required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upload Video", desc: "Upload your video or paste a YouTube link" },
              { step: "02", title: "Select Duration", desc: "Choose 15s, 30s, or up to 3 minutes" },
              { step: "03", title: "AI Processing", desc: "Our AI clips highlights and adds subtitles" },
              { step: "04", title: "Download & Share", desc: "Preview, download, and publish instantly" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#FF0080] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FF0080]/30">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#0066FF] to-[#FF0080] opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-[#0066FF] to-[#FF0080] border-0 shadow-2xl">
            <div className="text-center text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Viral Content?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Join thousands of creators who are saving time and growing their audience with ShortClip AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#0066FF] hover:bg-gray-100 text-lg px-8 py-6 h-auto shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <p className="text-sm mt-6 opacity-75">
                No credit card required • 2 free videos • Cancel anytime
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
