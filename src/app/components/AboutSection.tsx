'use client';

import { Award, Target, Users, Heart, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Who We Are</h2>
            <p className="text-xl text-slate-600 mb-8">
            Innoverse is a software development company based in the Middle East. We help startups and established businesses build powerful digital platforms — without the complexity of in-house tech teams.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {/* <div className="flex items-center">
                <Award className="w-8 h-8 text-indigo-500 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800">Award Winning</div>
                  <div className="text-sm text-slate-600">5+ Industry Awards</div>
                </div>
              </div> */}
              <div className="flex items-center">
                <Target className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800">50+ Projects</div>
                  <div className="text-sm text-slate-600">Successfully Delivered</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-8 h-8 text-emerald-500 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800">Expert Team</div>
                  <div className="text-sm text-slate-600">10+ Professionals</div>
                </div>
              </div>
              {/* <div className="flex items-center">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800">Client Satisfaction</div>
                  <div className="text-sm text-slate-600">98% Success Rate</div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <p className="text-lg mb-6">
              Fast execution. Scalable code. Real results. Our team combines elite development skills with business-first thinking — so your platform doesn’t just work, it wins.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Innovation First</div>
                  <div className="text-sm opacity-90">Always pushing boundaries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 